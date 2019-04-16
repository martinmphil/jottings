function main () {
  let a = `
    <li><a href="./intro_to_hooks.html">Intro</a></li>
    <li><a href="./jsx.html">JSX</a></li>
    <li><a href="./component.html">Component</a></li>
    <li><a href="./props.html">Props</a></li>
    <li><a href="./function_component.html">Function component</a></li>
    <li><a href="./state_hook.html">State hook</a></li>
    <li><a href="./effects_hook.html">Effects hook</a></li>
    <li><a href="./custom_hook.html">Custom hook</a></li>

    <li><a href="./sources.html">Sources</a></li>
  `
  document.querySelector('nav ul').innerHTML += a
}

main()