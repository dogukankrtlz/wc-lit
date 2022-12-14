import { css, html, LitElement } from "lit-element";

export class DropDown extends LitElement {
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
        --text-color: #a59bff;

        font-family: "Poppins";
        font-size: 20px;
        color: var(--text-color);
        width: 300px;
        display: flex;
        flex-direction: column;
        background-color: transparent;
        user-select: none;
      }

      .label {
        font-size: 27px;
        color: var(--primary-color);
        color: #fffff0;
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
    `;
  }

  constructor() {
    super();
    this.title = "Category";
    this.value = "ALL";
    this.options = ["WESTERN", "DRAMA", "ACTION", "CRIME", "ALL"];
    this.closed = true;
  }

  toggleMenu() {
    this.closed = !this.closed;
  }

  handleMenuOption(event, option) {
    this.value = option;
    this.toggleMenu(event);
    this.dispatchEvent(
      new CustomEvent("selectionChanged", {
        detail: { option },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="label">${this.title}</div>
      <div class="head" @click="${this.toggleMenu}">
        <div class="choice">${this.value}</div>
        <div class="toggle ${this.closed ? "closed" : "open"}"></div>
      </div>
      <div class="body ${this.closed ? "closed" : "open"}">
        ${this.options.map(
          (option) =>
            html`<div
              class="option"
              @click="${(e) => this.handleMenuOption(e, option)}"
            >
              ${option}
            </div>`
        )}
      </div>
    `;
  }
}

window.customElements.define("lit-element-drop-down", DropDown);
