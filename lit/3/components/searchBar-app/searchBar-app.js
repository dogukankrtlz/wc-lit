import { css, html, LitElement } from "lit-element";

export class SearchBarApp extends LitElement {
  static get properties() {
    return {
      title: { type: String, reflect: true },
      selected: { type: String, reflect: true },
      closed: { type: Boolean, reflect: true },
      options: { type: Array },
    };
  }

  static get styles() {
    return css`
      :host {
        --primary-color: #072146;
        --text-color: #4d5464;
        font-family: "Poppins";
        font-size: 16px;
        color: var(--text-color);
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: transparent;
        user-select: none;
        justify-content: center;
        align-items: center;
      }

      .container {
        padding: 60px;
        background-color: #072146;
        width: 100%;
        height: 120px;
        border-radius: 20px;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        font-weight: 700;
        color: #fffff0;
      }
      .label {
        font-size: 12px;
        color: var(--primary-color);
      }

      .head {
        border-bottom: 1px solid var(--primary-color);
        display: flex;
        justify-content: space-between;
        min-height: 24px;
        padding: 8px;
      }

      .choice {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: var(--text-color);
        height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .toggle {
        width: 24px;
        height: 24px;
        background-color: var(--primary-color);
        -webkit-mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>');
        -webkit-mask-repeat: no-repeat;
        transition: transform 0.3s linear;
      }
      .toggle.open {
        transform: rotate(180deg);
      }

      .body {
        max-height: 0;
        opacity: 0;
        overflow-y: scroll;
        overflow-x: hidden;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.6);
        transition: max-height 0.3s linear, opacity 0.3s linear;
      }
      .body.open {
        max-height: 200px;
        opacity: 1;
      }
      .body.closed {
        max-height: 0;
        opacity: 0;
      }

      ::slotted(p) {
        margin: 0;
      }

      .option {
        color: var(--text-color);
        position: relative;
        padding-left: 8px;
        padding: 14px;
        display: flex;
        align-items: center;
        transition: padding 0.5s linear, background-color 0.25s linear,
          color 0.25s linear;
        opacity: 1;
      }

      .option::after {
        content: "";
        width: 100%;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.15);
        position: absolute;
        bottom: 0;
        left: 0;
      }

      .option:hover {
        background-color: var(--primary-color);
        color: #fff;
        padding-left: 16px;
      }
      button {
        width: 100%;
        margin-bottom: 10px;
        padding: 10px 15px;
        outline: none;
      }

      button {
        width: 40%;
        border-radius: 10px;
        display: block;
        font-size: 15px;
        line-height: 24px;
        will-change: background-position;
        background-size: 210% 100%;
        background-position: 99% center;
        background-repeat: no-repeat;
        -webkit-transition: background-position 0.66667s
          cubic-bezier(0.24, 0.22, 0.31, 1.07);
        transition: background-position 0.66667s
          cubic-bezier(0.24, 0.22, 0.31, 1.07);
        background-color: #028484;
        background-image: linear-gradient(100deg, #02a5a5 50%, #028484 50%);
        color: #fff;
        text-align: center;
        padding: 16px 32px;
        background-color: #028484;
        cursor: pointer;
        margin-right: 25px;
        text-decoration: none;
        font-weight: 700;
        border: none;
        margin: 0;
        margin-top: 14px;
      }

      button:hover {
        background-position: 0 center;
      }

      /* .button {
        background-color: #d81e5b;
        color: white;
        width: 40%;
        font-size: 16px;
        padding: 15px 32px;
        border: none;
        border-radius: 10px;
        text-decoration: none;
        display: inline-block;
        margin-top: 10px;
      } */
      .input {
        padding: 30px;
        border-radius: 10px;
        width: 86%;
        // margin-top: 30px;
        // margin-left: -20px;
        font-size: 20px;
      }
    `;
  }

  constructor() {
    super();

    this.value = "";
  }

  handleMenuOption(searchValue) {
    console.log("this value:" + searchValue);
    this.dispatchEvent(
      new CustomEvent("search-update", {
        detail: { searchValue },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="container">
      MOVIE LIST
          <input
            placeholder="Search For a Movie Title.."
            class="input"
            type="text"
            value=${this.value}
            @change=${(event) => {
              this.value = event.target.value;
              this.handleMenuOption(event.target.value);
            }}
          />
   
         
        </form>
      </div>
    `;
  }
}

window.customElements.define("lit-element-search-bar", SearchBarApp);
