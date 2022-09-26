import { LitElement, html, css } from "lit-element";

export class MovieFormApp extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    * {
      box-sizing: border-box;
    }
    .container {
      display: flex;
      background-color: #fffff0;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      max-width: 100%;
      min-height: 1300px;
      width: 100%;
    }
    #login {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      background: #2f4f4f;
      min-width: 100%;
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
      width: 450px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 40px;
      margin: 45px;
      background-color: #072146;
      padding-top: 40px;
    }
    .login-block-p {
      width: 50%;
      display: flex;
      justify-content: flex-start;
      color: white;
      align-items: flex-start;
      flex-direction: column;
      padding: 50px;
      font-family: "Montserrat", sans-serif;
      margin: 45px;
      background-color: #072146;
    }
    #error {
      display: none;
      color: red;
      font-size: 14px;
    }

    #instructions {
      font-size: 26px;
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
      #instructions {
        font-size: 12px;
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

  static get properties() {
    return {
      albums: {
        id: Number,
        title: String,
        year: Number,
        rating: Number,
        genre: String,
      },
    };
  }
  constructor() {
    super();
    this.albums = {};
  }
  $get = (elem) => this.shadowRoot.querySelector(elem);

  login() {
    this.albums.id = this.$get("#id").value;
    this.albums.title = this.$get("#title").value;
    this.albums.year = this.$get("#year").value;
    this.albums.rating = this.$get("#rating").value;
    this.albums.genre = this.$get("#genre").value;

    const error = this.$get("#error");

    if (
      this.albums.id &&
      this.albums.title &&
      this.albums.year &&
      this.albums.genre &&
      this.albums.rating
    ) {
      this.postData("http://localhost:8080/movie", this.albums);
    } else {
      error.style.display = "block";
    }
  }
  async postData(url = "", data = {}) {
    // Default options are marked with *

    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then();
  }
  render() {
    return html`
      <div class="container">
        <div id="login">
          <div class="login-block-p">
            <h1>Rules</h1>
            <p id="instructions">
              Mollit duis mollit incididunt est sit voluptate occaecat. Nostrud
              *anim mollit sint sit adipisicing consectetur adipisicing
              exercitation minim. Deserunt reprehenderit ad occaecat et. Culpa
              dolore ea culpa consequat incididunt.
            </p>
            <p id="instructions">
              Mollit duis mollit incididunt est sit voluptate occaecat. Nostrud
              *anim mollit sint sit adipisicing consectetur adipisicing
              exercitation minim. Deserunt reprehenderit ad occaecat et. Culpa
              dolore ea culpa consequat incididunt.
            </p>
          </div>
          <div class="login-block">
            <h2>Add New Movie to The System</h2>
            <input
              id="id"
              type="number"
              name="id"
              placeholder="Special ID"
              value=""
            />
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Title"
              value=""
            />
            <input
              id="year"
              type="number"
              name="year"
              max="2040"
              min="1895"
              placeholder="Release Year"
              value=""
            />
            <input
              id="rating"
              type="number"
              max="10"
              min="0"
              name="rating"
              placeholder="Rating"
              value=""
            />
            <input
              id="genre"
              type="text"
              name="genre"
              placeholder="Genre"
              value=""
            />
            <p id="error">Check The Rules!</p>
            <button @click=${this.login}>SAVE MOVIE</button>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("movie-form", MovieFormApp);
