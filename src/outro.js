
  // Make conditionally as CommonJS module
  // please refer to
  // https://github.com/brettz9/json-editor/blob/0ebbd538925ebb82247525657653562cfcdadaf3/src/outro.js
  if (typeof module !== 'undefined') {
     module.exports = JSONEditor;
  }
  else {
     window.JSONEditor = JSONEditor;
  }
})();
