import { LitElement, html } from "lit";
import "./my-header.js";

class MyPage extends LitElement {
  static properties = {
    article: { attribute: false },
  };

  constructor() {
    super();
    this.article = {
      title: "My Nifty Article",
      text: "Some witty text.",
    };
  }

  headerTemplate() {
    return html`<header>${this.article.title}</header>`;
  }

  articleTemplate() {
    return html`<article>${this.article.text}</article>`;
  }

  footerTemplate() {
    return html`<footer>Your footer here.</footer>`;
  }

  render() {
    return html`
      <my-header></my-header>

      ${this.articleTemplate()} ${this.footerTemplate()}
    `;
  }
}
customElements.define("my-page", MyPage);
