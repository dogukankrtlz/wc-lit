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
      min-height: 1000px;
    }

    h3,
    h1 {
      color: red;
    }

    #footer {
      margin-top: 400px;
    }
  `;

  static get properties() {
    return {
      genre: String,
      loginId: Number,
      login: String,
      urlSelected: {},
      success: { type: Boolean },
      movie: {},
    };
  }

  constructor() {
    super(), (this.urlSelected = "movie-list");
    this.success = true;
    this.movie = {};
    this.genre = "";
    this.loginId = 1;
    this.login = "login";
  }

  urlChanged(e) {
    this.urlSelected = e.detail;
  }

  registerRequested() {
    this.login = "register";
  }
  loginRequested() {
    this.login = "login";
  }
  detailRequested(e) {
    this.movie = e.detail.movie;
    this.urlSelected = "movie-detail-app";
  }

  startApp(e) {
    this.loginId = e.detail.loginId;
    this.success = true;
  }
  stopApp(e) {
    this.urlSelected = "movie-list";
    this.loginId = 0;
    this.success = false;
  }

  paintLandingPage() {
    return this.login == "login"
      ? html`<login-app
          @registerreq=${this.registerRequested}
          @sign=${this.startApp}
        ></login-app> `
      : html` <register-app
          @loginreq=${this.loginRequested}
          @sign=${this.startApp}
        ></register-app>`;
  }

  render() {
    return html`
      <div id="home">
        ${!this.success
          ? html`<div>${this.paintLandingPage()}</div> `
          : html`
              <nav-bar
                urlSelected=${this.urlSelected}
                @change=${this.urlChanged}
                @logout=${this.stopApp}
              ></nav-bar>
              ${this.urlSelected === "movie-list"
                ? html`
                    <moviepage-app
                      @detailRequested=${this.detailRequested}
                      .loginId="${this.loginId}"
                    ></moviepage-app>
                    <footer-app></footer-app>
                  `
                : // : this.urlSelected === "movie-add"
                // ? html` <movie-form></movie-form> <footer-app></footer-app> `
                // : this.urlSelected === "user-profile"
                // ? html`
                //     <profile-form></profile-form>
                //     <footer-app></footer-app>
                //   `
                this.urlSelected === "user-favorites"
                ? html`
                    <profile-favorite
                      .loginId="${this.loginId}"
                    ></profile-favorite>
                    <footer-app></footer-app>
                  `
                : html`
                    <movie-detail-app
                      .movie="${this.movie}"
                      .loginId=${this.loginId}
                    ></movie-detail-app>
                    <footer-app></footer-app>
                  `}
            `}
      </div>
    `;
  }
}

customElements.define("home-app", HomeApp);
