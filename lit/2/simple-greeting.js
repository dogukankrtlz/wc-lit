import { html, css, LitElement } from "lit";

export class SimpleGreeting extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  static properties = {
    name: { type: String },
    age: { type: Number },
  };

  constructor() {
    super();
    this.name = "Somebody";
    this.age = "2";
  }

  render() {
    return html`<p>Hello from Javascript, ${this.name}!</p>
      <p>hellow again ,age:${this.age}</p> `;
  }
}
customElements.define("simple-greeting", SimpleGreeting);
