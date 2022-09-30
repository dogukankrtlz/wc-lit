import { LitElement, html, css } from "lit";

class NavBar extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #072146;
    }

    .container {
      width: 1176px;
      margin-left: auto;
      margin-right: auto;
      max-width: 100%;
    }

    .navbar {
      height: 88px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .navbar-block {
      display: flex;
      align-items: center;
      height: 100%;
    }

    .navbar-item {
      margin: 0 15px;
      font-family: "Montserrat", sans-serif;
    }

    .navbar-item__newClient {
      display: flex;
      align-items: center;
      color: #f8cd51;
    }

    .navbar-item__newClient img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
      -webkit-filter: brightness(0) saturate(100%) invert(78%) sepia(13%)
        saturate(1766%) hue-rotate(2deg) brightness(105%) contrast(94%);
      filter: brightness(0) saturate(100%) invert(78%) sepia(13%)
        saturate(1766%) hue-rotate(2deg) brightness(105%) contrast(94%);
    }

    .logo {
      height: 40px;
      margin-right: 15px;
    }

    a {
      text-decoration: none;
    }

    span {
      color: #fff;
      text-decoration: none;
      cursor: pointer;
      opacity: 0.5;
    }

    .btn-green {
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
      padding: 14px 24px;
      margin-left: 24px;
      background-color: #028484;
      cursor: pointer;
    }

    .btn-green:hover {
      background-position: 0 center;
    }

    .active {
      font-weight: 700;
      position: relative;
      opacity: 1;
    }

    .active:before {
      content: "";
      position: absolute;
      bottom: -32px;
      left: 0px;
      height: 4px;
      width: 100%;
      background-color: rgb(255, 255, 255);
    }

    h3 {
      color: #fff;
    }

    .not-allowed {
      cursor: not-allowed;
    }

    @media screen and (max-width: 1024px) {
      .navbar-block {
        padding-left: 35px;
      }

      .logo {
        height: 30px;
      }

      .navbar-block:last-child {
        display: none;
      }
    }

    @media screen and (max-width: 767px) {
      .navbar-block {
        padding-left: 0;
      }

      .logo {
        height: 15px;
      }

      .navbar-item {
        font-size: 12px;
      }

      .navbar-item.active::before {
        bottom: -22px;
      }

      .navbar {
        height: 60px;
        justify-content: space-around;
      }
    }
  `;

  static get properties() {
    return {
      navPages: {},
      urlSelected: {},
    };
  }

  constructor() {
    super();
    this.navPages = [
      {
        text: "LIST MOVIES",
        active: true,
        url: "#",
        selected: "movie-list",
        all: true,
      },
      // {
      //   text: "ADD NEW MOVİE",
      //   active: false,
      //   url: "#",
      //   selected: "movie-add",
      //   all: true,
      // },
      // {
      //   text: "PROFILE",
      //   active: false,
      //   url: "#",
      //   selected: "user-profile",
      //   all: true,
      // },
      {
        text: "FAVORITES",
        active: false,
        url: "#",
        selected: "user-favorites",
        all: true,
      },
    ];
  }

  activeButton(event) {
    const input = event.target;
    this.navPages.forEach((item) =>
      input.innerText === item.text
        ? (item.active = true)
        : (item.active = false)
    );
    this.goUrl(input.attributes["data-select"].value);
  }

  goUrl(url) {
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: url,
      })
    );
  }
  logOut() {
    this.dispatchEvent(new CustomEvent("logout", {}));
  }

  paintTabs() {
    return this.navPages.map((item) => {
      return html`
        <span
          href=${item.url}
          class="navbar-item ${item.active ? "active" : ""}"
          @click=${this.activeButton}
          data-select=${item.selected}
        >
          ${item.text}</span
        >
      `;
    });
  }

  render() {
    return html`
      <div class="container">
        <div class="navbar">
          <div class="navbar-block">
            <img
              src="https://www.bbva.com/wp-content/uploads/2019/04/Logo-BBVA-1024x576.jpg"
              alt="logo"
              class="logo"
            />
            ${this.paintTabs()}
          </div>
          <div class="navbar-block">
            <a
              @click=${this.logOut}
              href="#"
              class="navbar-item btn-green not-allowed"
              >Logout</a
            >
            <div>Login</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("nav-bar", NavBar);
