const templateInScript = document.createElement("template");
templateInScript.innerHTML = `<p>Script ahoy! </p>`;

class CustomElement extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.appendChild(templateInScript.content.cloneNode(true));

    const templateInPage = document.getElementById("page-template");
    shadowRoot.appendChild(templateInPage.content.cloneNode(true));
  }
}

customElements.define("custom-element", CustomElement);
