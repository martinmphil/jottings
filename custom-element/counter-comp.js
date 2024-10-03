class CounterComp extends HTMLElement {
  constructor() {
    super();
    this._count = 0
  }

  render() {
    this.shadowRoot.querySelector('#counter-tally').textContent = this._count
  }

  connectedCallback() {
    this._count = parseInt(this.shadowRoot.querySelector('#counter-tally').textContent)

    this.shadowRoot.querySelector('#down-button')
      .addEventListener('click', () => {
        this._count += -1
        this.render()
      })

    this.shadowRoot.querySelector('#up-button')
      .addEventListener('click', () => {
        this._count += 1
        this.render()
      })
  }
}

customElements.define("counter-comp", CounterComp);
