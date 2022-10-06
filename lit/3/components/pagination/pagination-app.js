import { calculateSize } from "iconify-icon";
import { LitElement, html, css } from "lit-element";

export class PaginationApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: rgb(7, 33, 70);
    }

    .container {
      color: white;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: row;
    }
    button {
      margin: 4px;
      padding: 12px;
      font-size: 13px;
      font-weight: 600;
    }
    .logo {
      display: block;
      height: 120px;
      padding: 10px 0;
      margin: 0 auto;
    }
    #info {
      margin-top: 20px;
      margin-left: 20px;
    }

    @media screen and (max-width: 767px) {
      .logo {
        height: 25px;
        padding: 25px 0px;
      }
    }
  `;
  static get properties() {
    return {
      pages: {
        type: Number,
        reflect: true,
        attribute: true,
      },
      fake: {},
    };
  }

  constructor() {
    super();
    this.fake = [];
    this.pages;
  }

  connectedCallback() {
    super.connectedCallback();

    for (let i = 0; i < this.pages; i++) {
      this.fake[i] = i + 1;
    }
    console.log(this.fake);
    console.log(this.pages);
  }
  changePage(x) {
    this.dispatchEvent(
      new CustomEvent("change-page", {
        detail: { x },
        bubbles: true,
        composed: true,
      })
    );
  }

  paintButtons() {
    return this.fake.length >= 1
      ? this.fake.map((x) => {
          return html`
            <button
              @click=${() => {
                this.changePage(x);
              }}
            >
              ${x}
            </button>
          `;
        })
      : "";
  }
  render() {
    return html` <div class="container">>>${this.paintButtons()}<<</div> `;
  }
}
customElements.define("pagination-app", PaginationApp);
