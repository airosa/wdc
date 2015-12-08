( function() {

  var root = typeof exports !== "undefined" && exports !== null ? exports : this;
  var lib = {};

  lib.start = function() {
    ReactDOM.render(
      React.createElement( "h1", null, "Hello from React" ),
      document.getElementById( "hello" )
    );
  };

  root.main = lib;

} ).call( this );

