System.registerModule("app.js", [], function() {
  "use strict";
  var __moduleName = "app.js";
  var run = function() {
    ReactDOM.render(React.createElement("h1", null, "Hello from React"), document.getElementById("hello"));
  };
  return {get run() {
      return run;
    }};
});
System.get("app.js" + '');
