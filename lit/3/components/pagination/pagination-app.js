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
      max-width: 100%;

      flex-wrap: wrap;
    }
    button {
      margin: 4px;
      padding: 12px;
      font-size: 13px;
      font-weight: 600;
      min-height: 40px;
      min-width: 40px;
      max-height: 40px;
      max-width: 40px;
    }
    .logo {
      display: block;
      height: 120px;
      padding: 10px 0;
      margin: 0 auto;
    }
    .main {
      background-color: green;
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
      activePage: {
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
    this.activePage;
  }

  connectedCallback() {
    super.connectedCallback();
    for (let i = 0; i < this.pages; i++) {
      this.fake[i] = i + 1;
      console.log("xd");
    }

    // 3 4 5 6 7
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
    return this.activePage >= 1
      ? this.fake.map((x, index) => {
          return index != this.activePage - 1
            ? html`
                <div>
                  <button
                    @click=${() => {
                      this.changePage(x);
                    }}
                  >
                    ${x}
                  </button>
                </div>
              `
            : html`
                <div class="main">
                  <button
                    @click=${() => {
                      this.changePage(x);
                    }}
                  >
                    ${x}
                  </button>
                </div>
              `;
        })
      : "";
  }
  render() {
    return html` <div class="container">${this.paintButtons()}</div> `;
  }
}
customElements.define("pagination-app", PaginationApp);
