root = if typeof exports isnt "undefined" and exports isnt null then exports else this
lib = {}

lib.start = () ->
    ReactDOM.render(
      React.createElement "h1", null, "Hello from React"
      document.getElementById "hello"
    )

root.main = lib