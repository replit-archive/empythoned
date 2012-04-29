;(function () {
	self.console = {
		log: function () {}
	};
	importScripts('python.opt.js');

	self.prompt = function () {
		return 'Input not supported in demo';
	}
	Python.initialize(null, function(chr) {
		if (chr !== null) 
			postMessage(String.fromCharCode(chr));
  });

	var msgHandler = function (e) {
		if (Python.isFinished(e.data)) {
      var result = Python.eval(e.data);
      if (result !== null && result !== undefined) {
      	postMessage('\n--------------------------\nResult: ' + result);
      }
      
    } else {
      postMessage('\nCommand not finished.\n');
    }
	};  

	addEventListener('message', msgHandler, false);

	postMessage('Loaded');
})();
