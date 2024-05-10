class BespokeElement extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <p>This content comes from a custom HTML element.</p>
    `;
  }

  connectedCallback() {
    this.style.color = "green";
  }
}

customElements.define("bespoke-element", BespokeElement);
