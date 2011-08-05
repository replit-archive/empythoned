var Python = {
  allocateString: function(str) {
    var arr = Module['intArrayFromString'](str);
    return Module['allocate'](arr, 'i8', ALLOC_NORMAL);
  },
  // Initializes the Python runtime with optional standard I/O callbacks.
  initialize: function(input, output, error) {
    FS.init(input, output, error);
    ENV.PYTHONHOME = '/:/';
    Module['run']();
    setValue(Module['_Py_NoSiteFlag'], 1, 'i32');
    Module['_Py_Initialize']();

    this.module = Module['_PyImport_AddModule'](this.allocateString('__main__'));
    this.filename = this.allocateString('<string>');
    this.flags = Module['allocate']([0], 'i32', ALLOC_NORMAL);
    this.globals = Module['_PyModule_GetDict'](this.module);
  },
  // Evaluates Python code. Returns:
  //   1. If an expression is passed, returns the representation of the value of
  //      this expression, or null if the value is None.
  //   2. If a statement of set of statements is passed, returns null.
  //   3. If a Python exception occurs while evaluating, returns undefined.
  eval: function(command) {
    var commandPtr = this.allocateString(command);

    // Compile.
    var compiled = Module['_Py_CompileStringFlags'](
        commandPtr, this.filename, this.Py_eval_input, this.flags);
    if (compiled === 0) {
      Module['_PyErr_Clear']();
      compiled = Module['_Py_CompileStringFlags'](
          commandPtr, this.filename, this.Py_file_input, this.flags);
    }
    if (compiled === 0) {
      Module['_PyErr_Print']();
      Module['_free'](commandPtr);
      return undefined;
    }

    // Evaluate.
    var result = Module['_PyEval_EvalCode'](
        compiled, this.globals, this.globals);
    if (result === 0) {
      Module['_PyErr_Print']();
      // TODO: Free `compiled` (bind _Py_Dealloc).
      Module['_free'](commandPtr);
      return undefined;
    }

    // Get result representation.
    var repr = Module['_PyString_AsString'](Module['_PyObject_Repr'](result));
    var reprStr = Pointer_stringify(repr);
    if (reprStr === 'None') reprStr = null;  // A little hacky, but will do.

    // Cleanup.
    // TODO: Free `compiled` and `result` (bind _Py_Dealloc).
    Module['_free'](commandPtr);

    // Return the final result.
    return reprStr;
  },
  // Checks whether a command is finished and does not require more input.
  // Useful when running a REPL.
  isFinished: function(command) {
    // Based on http://docs.python.org/faq/extending.html#how-do-i-tell-incomplete-input-from-invalid-input.
    var commandPtr = this.allocateString(command);

    var compiled = Module['_Py_CompileStringFlags'](
        commandPtr, this.filename, this.Py_eval_input, this.flags);
    if (compiled === 0) {
      Module['_PyErr_Clear']();
      compiled = Module['_Py_CompileStringFlags'](
          commandPtr, this.filename, this.Py_file_input, this.flags);
    }
    if (compiled !== 0) {
      Module['_free'](commandPtr);
      return true;
    }

    var exc = Module['allocate']([0], 'void*', ALLOC_NORMAL);
    var val = Module['allocate']([0], 'void*', ALLOC_NORMAL);
    var trb = Module['allocate']([0], 'void*', ALLOC_NORMAL);
    var obj = Module['allocate']([0], 'void*', ALLOC_NORMAL);
    var msg = Module['allocate']([0], 'i8*', ALLOC_NORMAL);
    var msgPtr = Module['allocate']([msg], 'i8**', ALLOC_NORMAL);
    var idx = this.allocateString('sO');

    Module['_PyErr_Fetch'](exc, val, trb);
    Module['_PyArg_ParseTuple'](getValue(val, 'void*'), idx, msgPtr, obj);
    var msgStr = Pointer_stringify(getValue(getValue(msgPtr, 'i8**'), 'i8*'));
    var ret = (msgStr != 'unexpected EOF while parsing' &&
               msgStr != 'EOF while scanning triple-quoted string literal');

    // TODO: Free exc, val and trb (bind _Py_Dealloc).
    Module['_free'](commandPtr);
    Module['_free'](idx);
    Module['_free'](msgPtr);
    Module['_free'](msg);
    Module['_free'](obj);
    Module['_free'](trb);
    Module['_free'](val);
    Module['_free'](exc);
    return ret;
  },
  flags: null,
  filename: null,
  module: null,
  Py_single_input: 256,
  Py_file_input: 257,
  Py_eval_input: 258
};
