import { LitElement, html, css } from "lit-element";

export class LoginApp extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    * {
      box-sizing: border-box;
    }

    #login {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100vw;
      height: 100vh;
      background: #072146;
    }

    .logo {
      width: 150px;
    }

    h2 {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
    }

    .login-block {
      width: 350px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 15px;
    }

    #error {
      display: none;
      color: red;
      font-size: 14px;
    }

    .container {
      width: 1176px;
      margin-left: auto;
      margin-right: auto;
      max-width: 100%;
    }

    input,
    button {
      width: 100%;
      margin-bottom: 10px;
      padding: 10px 15px;
      outline: none;
    }

    button {
      width: 100%;
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
    }

    button:hover {
      background-position: 0 center;
    }

    @media screen and (max-width: 767px) {
      h2 {
        font-size: 13px;
        margin-bottom: 13px;
      }

      .login-block {
        width: 310px;
        padding-top: 10px;
      }

      .logo {
        width: 80px;
      }
    }
  `;
  $get = (elem) => this.shadowRoot.querySelector(elem);

  login() {
    const email = this.$get("#email").value;
    const password = this.$get("#password").value;
    const error = this.$get("#error");

    if (email && password) {
      this.dispatchEvent(
        new CustomEvent("sign", {
          bubbles: true,
          composed: true,
          detail: {
            login: true,
          },
        })
      );
    } else {
      error.style.display = "block";
    }

    // Hariamos fetch a la api con las credenciales del usuario
  }

  render() {
    return html`
      <div id="login">
        <img src="./images/logo-BBVA.svg" alt="logo" class="logo" />
        <div class="login-block">
          <h2>**** ******** *********** *********</h2>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="E-mail"
            value=""
          />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value=""
          />
          <p id="error">**** ******** *********** *********</p>
          <button @click=${this.login}>Login</button>
        </div>
      </div>
    `;
  }
}
customElements.define("login-app", LoginApp);
