this['Python'] = {
  // Initializes the Python runtime with optional standard I/O callbacks.
  'initialize': function(input, output, error) {
    if (this.isInitialized) {
      console.log('Ignoring repeated Python initialization.');
      return;
    }
    FS.init(input, output, error);
    ENV.PYTHONHOME = '/:/';
    run();
    setValue(_Py_NoSiteFlag, 1, 'i32');
    _Py_Initialize();

    var cmd = this.allocateString('python');
    _PySys_SetArgv(1, allocate([cmd], 'i8*', ALLOC_NORMAL));


    this.module = _PyImport_AddModule(this.allocateString('__main__'));
    this.filename = this.allocateString('<stdin>');
    this.flags = allocate([0], 'i32', ALLOC_NORMAL);
    this.globals = _PyModule_GetDict(this.module);
    this.isInitialized = true;

    var help = ('def help(x):\n' +
                '  print getattr(x, "__doc__", "No documentation.")\n' +
                '  print ""\n' +
                '  print "For detailed help, run \'from pydoc import help\' (slow)."');
    this['eval'](help);
  },
  // Evaluates Python code. Returns:
  //   1. If an expression is passed, returns the representation of the value of
  //      this expression, or null if the value is None.
  //   2. If a statement of set of statements is passed, returns null.
  //   3. If a Python exception occurs while evaluating, returns undefined.
  'eval': function(command) {
    if (!this.isInitialized) throw new Error('Python runtime not initialized.');
    var commandPtr = this.allocateString(command);

    // Compile.
    var compiled = _Py_CompileStringFlags(
        commandPtr, this.filename, this.Py_eval_input, this.flags);
    if (compiled === 0) {
      _PyErr_Clear();
      compiled = _Py_CompileStringFlags(
          commandPtr, this.filename, this.Py_file_input, this.flags);
    }
    if (compiled === 0) {
      _PyErr_Print();
      _free(commandPtr);
      return undefined;
    }

    // Evaluate.
    var result = _PyEval_EvalCode(
        compiled, this.globals, this.globals);
    if (result === 0) {
      _PyErr_Print();
      _Py_DecRef(compiled);
      _free(commandPtr);
      return undefined;
    }

    // Get result representation.
    var reprStr = Pointer_stringify(_PyString_AsString(_PyObject_Repr(result)));
    if (reprStr === 'None') reprStr = null;  // A little hacky, but will do.

    // Cleanup.
    _Py_DecRef(compiled);
    _Py_DecRef(result);
    _free(commandPtr);

    // Return the final result.
    return reprStr;
  },
  // Checks whether a command is finished and does not require more input.
  // Useful when running a REPL.
  'isFinished': function(command) {
    if (!this.isInitialized) throw new Error('Python runtime not initialized.');
    // Based on http://docs.python.org/faq/extending.html#how-do-i-tell-incomplete-input-from-invalid-input.
    var commandPtr = this.allocateString(command);

    var compiled = _Py_CompileStringFlags(
        commandPtr, this.filename, this.Py_eval_input, this.flags);
    if (compiled === 0) {
      _PyErr_Clear();
      compiled = _Py_CompileStringFlags(
          commandPtr, this.filename, this.Py_file_input, this.flags);
    }
    if (compiled !== 0) {
      _free(commandPtr);
      return true;
    }

    var exc = allocate([0], 'void*', ALLOC_NORMAL);
    var val = allocate([0], 'void*', ALLOC_NORMAL);
    var trb = allocate([0], 'void*', ALLOC_NORMAL);
    var obj = allocate([0], 'void*', ALLOC_NORMAL);
    var msg = allocate([0], 'i8*', ALLOC_NORMAL);
    var msgPtr = allocate([msg], 'i8**', ALLOC_NORMAL);
    var idx = this.allocateString('sO');

    _PyErr_Fetch(exc, val, trb);
    var varargs = allocate([msgPtr, 0, 0, 0, obj, 0, 0, 0],
                           ['i8**', 0, 0, 0, 'void*', 0, 0, 0],
                           ALLOC_NORMAL);
    _PyArg_ParseTuple(getValue(val, 'void*'), idx, varargs);
    var msgStr = Pointer_stringify(getValue(getValue(msgPtr, 'i8**'), 'i8*'));
    var ret = (msgStr != 'unexpected EOF while parsing' &&
               msgStr != 'EOF while scanning triple-quoted string literal');

    _Py_DecRef(exc);
    _Py_DecRef(val);
    _Py_DecRef(trb);
    _free(varargs);
    _free(commandPtr);
    _free(idx);
    _free(msgPtr);
    _free(msg);
    _free(obj);
    _free(trb);
    _free(val);
    _free(exc);
    return ret;
  },
  isInitialized: false,
  flags: null,
  filename: null,
  module: null,
  Py_single_input: 256,
  Py_file_input: 257,
  Py_eval_input: 258,
  allocateString: function(str) {
    return allocate(intArrayFromString(str), 'i8', ALLOC_NORMAL);
  }
};
