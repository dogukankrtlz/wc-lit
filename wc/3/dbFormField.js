const template = document.createElement("template");
template.innerHTML = `
<style> 
    :host { 
        margin-bottom: 10px; 
        display: block; 
    } 
    .invalid-field { 
        border: 1px solid red; 
    } 
    .invalid-field:focus { 
        outline-color: red; 
    } 
    .form-field { 
        display: table; 
    } 
    label, 
    input { 
        display: table-cell; 
    } 
    label { 
        padding-right: 10px; 
    } 
    .error { 
        display: block; 
    } 
    .hidden { 
        display: none; 
    } 
    ::slotted(span) { 
        color: grey; 
        font-style: italic; 
        padding-left: 10px; 
    } 
</style> 

<div class="form-field"> 
        <label></label> 
        <input /> 
        <slot></slot> 
        <span class="error hidden"></span> 
</div>`;

class FormField extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$label = this.shadowRoot.querySelector("label");
    this.$input = this.shadowRoot.querySelector("input");
    this.$error = this.shadowRoot.querySelector(".error");
  }

  static get observedAttributes() {
    return ["value", "label", "type", "error-message", "invalid"];
  }

  //When an element is added to the DOM, the connectedCallback method is triggered.
  //From that moment we can be sure that its available in the DOM and we’re able to safely set attributes, fetch resources, run setup code or render templates.
  connectedCallback() {
    if (this.$input.isConnected) {
      this.$input.addEventListener("blur", (event) => {
        if (!event.target.value && this.hasAttribute("required")) {
          this.invalid = true;
          this.$error.innerText = "This field is required.";
        } else {
          this.invalid = false;
          this.value = event.target.value;
        }
      });
    }
  }

  //attributeChangedCallback: Invoked each time one of the custom element's attributes is added, removed, or changed
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "label":
        this.$label.innerText = `${newValue}:`;
        break;
      case "type":
        this.$input.type = newValue;
        break;
      case "error-message":
        this.$error.innerText = newValue;
        break;
      case "invalid":
        this._handleInvalidState(newValue);
        break;
      default:
        break;
    }
  }

  get invalid() {
    return this.hasAttribute("invalid");
  }

  set invalid(value) {
    if (!!value) {
      this.setAttribute("invalid", "");
    } else {
      this.removeAttribute("invalid");
    }
  }

  get value() {
    return this.getAttribute("value");
  }

  set value(newValue) {
    this.setAttribute("value", newValue);
  }

  _handleInvalidState(value) {
    if (value !== null) {
      this.$error.classList.remove("hidden");
      this.$input.classList.add("invalid-field");
    } else {
      this.$error.classList.add("hidden");
      this.$input.classList.remove("invalid-field");
    }
  }
}

window.customElements.define("db-form-field", FormField);
