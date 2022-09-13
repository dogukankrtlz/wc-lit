const template = document.createElement("template");
template.innerHTML = `
<style>
h3{
    color: green;
}

.detail{
    display: none;
}

img{
    width: 100px;
    height: 100px;
    border-radius : 50%;
}
</style>
<h3></h3>
<img />
<div>
    <p style="font-weight: bold;">
    <slot name="year" />
    </p>
    <p>
    <slot name="type" />
    </p>
</div>
<p>
<slot />
</p>

<button>Tıkla.</button>
<p class="detail">Bu gizli bir içeriktir.. butona basildiginda ancak gösterilebilir.. </p>
`;

class MovieCard extends HTMLElement {
  constructor() {
    super();
    this.showDetail = false;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector("h3").innerHTML = this.getAttribute("title");
    this.shadowRoot.querySelector("img").src = this.getAttribute("poster");
  }

  connectedCallback() {
    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      this.showDetail = !this.showDetail;
      if (this.showDetail) {
        this.shadowRoot.querySelector(".detail").style.display = "block";
      } else {
        this.shadowRoot.querySelector(".detail").style.display = "none";
      }
    });
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("button").removeEventListener("click");
  }
}

window.customElements.define("movie-card", MovieCard);
