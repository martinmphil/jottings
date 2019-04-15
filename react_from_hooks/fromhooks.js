function main () {
  let a = `
    <li><a href="./intro_to_hooks.html">Intro</a></li>
    <li><a href="./jsx.html">JSX</a></li>
    <li><a href="./state_hook.html">State Hook</a></li>
    <li><a href="./effects_hook.html">Effects Hook</a></li>
    <li><a href="./custom_hook.html">Custom Hook</a></li>

    <li><a href="./sources.html">Sources</a></li>
  `
  document.querySelector('nav ul').innerHTML += a
}

main()