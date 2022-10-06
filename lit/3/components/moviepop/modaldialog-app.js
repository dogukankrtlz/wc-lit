import { LitElement, html, css } from "lit-element";
import { classMap } from "lit/directives/class-map.js";
/* eslint-disable */
class ModalDialogApp extends LitElement {
  static get styles() {
    return css`
      :host {
        font-family: Arial, Helvetica, sans-serif;
      }
      .wrapper {
        opacity: 0;
        z-index: 10;
        transition: opacity 0.25s ease-in;
        position: fixed;
        left: 50%;
        top: 50%;
        -ms-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
      .wrapper:not(.open) {
        visibility: hidden;
      }
      .wrapper.open {
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: row;
        width: 100%;
        height: 100%;
        opacity: 1;
        visibility: visible;
      }
      .overlay {
        background: rgba(0, 0, 0, 0.8);
        height: 100%;
        width: 100%;
      }
      .dialog {
        align-items: center;
        display: flex;
        justify-content: center;
        background: #454264;
        border-radius: 13px;
        max-width: 900px;
        min-height: 600px;
        padding: 1rem;
        position: absolute;
      }
      .dialog h1 {
        margin: 0 0 10px;
      }
      .dialog button {
        background-color: #d81e5b;
        color: white;
        width: 30%;
        font-size: 16px;
        padding: 15px 32px;
        border: none;
        border-radius: 10px;
        text-decoration: none;
        display: inline-block;
        margin-top: 10px;
      }
      .album_img {
        min-width: 280px;
        height: 420px;
        position: relative;
        background-size: cover !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
      }
      #title {
        color: #fffff0;
      }
      #content {
        color: #fffff0;
      }
      #info {
        border: 2px solid #fffff0;
        height: 520px;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
      }
    `;
  }
  static get properties() {
    return {
      open: { type: Boolean },
      title: { type: String },
      text: { type: String },
      imageUrl: { type: String },
    };
  }

  constructor() {
    super();
    this.open = false;
  }
  paintImage() {
    return (this.imageUrl = "Hello"
      ? html` <div
          class="album_img"
          style="background: url(${this.imageUrl})"
        ></div>`
      : html` <div
          class="album_img"
          style="background: url(https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg)"
        ></div>`);
  }

  render() {
    return html`
      <div class="${classMap({ wrapper: true, open: this.open })}">
        <div class="overlay" @click="${this.close}"></div>

        <div class="dialog">
          <div>${this.paintImage()}</div>
          <div id="info">
            <h1 id="title">${this.title}</h1>
            <div id="content" class="content">${this.text}</div>
            <button @click=${this.resetGame}>Okey</button>
          </div>
        </div>
      </div>
    `;
  }

  close() {
    this.open = false;
  }

  resetGame() {
    this.dispatchEvent(new CustomEvent("reset-game"));
    this.close();
  }
}

customElements.define("modeldialog-app", ModalDialogApp);
