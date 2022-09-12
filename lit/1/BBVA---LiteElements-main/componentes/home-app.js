import { LitElement, html, css } from "lit-element";
export class HomeApp extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .container {
      width: 1176px;
      margin-left: auto;
      margin-right: auto;
      max-width: 100%;
    }

    h3,
    h1 {
      color: red;
    }
  `;

  static get properties() {
    return {
      urlSelected: {},
      success: { type: Boolean },
    };
  }

  constructor() {
    super(), (this.urlSelected = "**** ******** *********** *********");
    this.success = false;
  }

  urlChanged(e) {
    this.urlSelected = e.detail;
  }

  startApp() {
    this.success = true;
  }

  render() {
    return html`
      <div id="home">
        ${this.success
          ? html` <nav-bar
                urlSelected=${this.urlSelected}
                @change=${this.urlChanged}
              ></nav-bar>
              ${this.urlSelected === "personas"
                ? html`
                    <text-image
                      subtitle="**** ******** *********** *********"
                      title="**** ******** *********** *********"
                      features="**** ******** *********** *********"
                      image="hero-desktop.jpg"
                      btnText="Hazte cliente"
                    ></text-image>

                    <placeholder-api numAlbums="5"></placeholder-api>

                    <text-button title="**** ******** *********** *********">
                    </text-button>

                    <text-image
                      subtitle="**** ******** *********** *********"
                      class="small-img"
                      title="**** ******** *********** *********"
                      features="**** ******** *********** *********"
                      image="section0.png"
                      btnText="Hazte cliente"
                    ></text-image>

                    <footer-app></footer-app>
                  `
                : html`
                    <text-image
                      subtitle="**** ******** *********** *********"
                      title="**** ******** *********** *********"
                      text="Seas autónomo, pyme o empresa estrenar banco tiene muchas ventajas."
                      image="hero-desktop-blue.jpg"
                      class="blue"
                      secondaryText="**** ******** *********** *********"
                      btnText="**** ******** *********** *********"
                    ></text-image>

                    <text-image
                      subtitle="Cuenta Online Sin Comisiones"
                      class="small-img"
                      title="Y llévate hasta 350 € con el Plan Invita a un Amigo"
                      features='Hazte cliente con la Cuenta Online Sin Comisiones. 
                                            - Accede al área privada de cliente en "Mis promociones" 
                                            - Comparte tu código con amigos y familiares.'
                      image="section1.svg"
                      secondaryText="Para llevaros el premio, tus amigos tendrán que utilizar tu código al hacerse clientes y realizar una compra superior a 15 € con su nueva tarjeta BBVA."
                      btnText="Hazte cliente"
                    ></text-image>

                    <text-button
                      title="Más de 1 millón de clientes disfrutan de una Cuenta Online sin comisiones ni condiciones"
                    >
                    </text-button>

                    <placeholder-api numAlbums="2"></placeholder-api>

                    <footer-app></footer-app>
                  `}`
          : html`<login-app @sign=${this.startApp}></login-app>`}
      </div>
    `;
  }
}

customElements.define("home-app", HomeApp);
