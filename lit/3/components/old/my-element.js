import { LitElement, html } from "lit";

class MyElement extends LitElement {
  static properties = {
    value: {
      // only update for odd values of newVal.
      hasChanged(newVal, oldVal) {
        const hasChanged = newVal % 2 == 1;
        console.log(`${newVal}, ${oldVal}, ${hasChanged}`);
        return hasChanged;
      },
    },
  };

  constructor() {
    super();
    this.value = 1;
  }

  render() {
    return html`
      <p>${this.value}</p>
      <button @click="${this.getNewVal}">Get new value</button>
    `;
  }

  getNewVal() {
    this.value = Math.floor(Math.random() * 100);
  }
}
customElements.define("my-element", MyElement);
