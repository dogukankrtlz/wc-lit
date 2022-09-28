import { LitElement, html, css } from "lit-element";
import "../utilities/getApi-app";
import "../moviepop/modaldialog-app";
import "../dropdown/dropdown-app";
export class MoviePageApp extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    * {
      box-sizing: border-box;
    }
    .pagecolor {
      width: 100%;
      background-color: #fffff0;
      justify-content: center;
      align-items: center;
      min-height: 1300px;
      margin-top: -40;
    }
    .container {
      width: 80%;
      justify-content: center;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      max-width: 100%;
      background-color: #fffff0;
      min-height: 1000px;
    }

    .album {
      width: 40%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 20px;
      border: 2px solid black;
      border-radius: 4px;
      margin: 4px;
      max-height: 315;
      min-height: 300px;
    }

    .albums-block {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    .album_img {
      min-width: 180px;
      height: 300px;
      position: relative;
      background-size: cover !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
    }

    .album_id {
      position: absolute;
      top: 8px;
      left: 8px;
      font-size: 19px;
      border-radius: 17px;
      font-weight: 700;
      padding: 5px;
      font-family: "Montserrat", sans-serif;

      color: rgb(1, 566, 1);
      background-color: #072146;
      /* background-color: rgb(44, 1, 66); */
    }

    h2 {
      font-size: 36px;
      line-height: 40px;
      color: #121212;
      margin-bottom: 34px;
    }

    .album-info {
      padding: 7px;
      display: flex;
      justify-content: "center";
      align-items: "center";
      flex-direction: column;
      max-width: 180px;
      min-width: 180px;
      max-height: 300px;
      min-height: 300px;
      background-color: #072146;
    }
    .title {
      font-size: 15px;
      line-height: 24px;
      color: yellow;
      border-radius: 5px;
      justify-content: "center";
      align-items: "center";
      padding: 2px;
      background-color: #072146;
      font-weight: 700;
    }
    .title-data {
      font-size: 15px;
      line-height: 24px;
      color: #fffff0;
      border-radius: 5px;
      justify-content: "center";
      align-items: "center";
      padding: 2px;
      background-color: #072146;
      font-weight: 700;
    }
    .summary {
      color: #fffff0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      /* flex-shrink: 1;
      overflow: hidden; */
    }
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
      /* padding: 16px 32px; */
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
    .readmore {
      color: red;
      background-color: green;
    }

    @media screen and (max-width: 1158px) {
      .container {
        padding: 0px 30px 25px;
        margin-bottom: 15px;
      }
      .album {
        width: 100%;
        align-items: flex-start;
      }
    }

    @media screen and (max-width: 767px) {
      h2 {
        font-size: 24px;
        line-height: 20px;
        margin-top: 30px;
      }

      .container {
        margin-bottom: 0;
        padding-bottom: 15px;
      }

      .album {
        width: 100%;
        align-items: flex-start;
      }
    }
  `;

  static get properties() {
    return {
      albums: {
        id: Number,
        title: String,
        rel_year: Number,
        rating: Number,
        genre: String,
        image_url: String,
        summary: String,
      },
      filteredAlbums: {
        id: Number,
        title: String,
        rel_year: Number,
        rating: Number,
        genre: String,
        image_url: String,
        summary: String,
      },
      numAlbums: { type: Number },
      count: Number(0),
      genre: String,
      loginId: Number,
      popup: Boolean,
      category: String,
    };
  }

  constructor() {
    super();
    this.category = "ALL";
    this.count = 0;
    this.popup = false;
    this.numAlbums;
    this.albums = [];
    this.filteredAlbums = [];

    this.addEventListener("selectionChanged", (e) => {
      this.category = e.detail.option;
      this.filterAlbums();
    });
    this.addEventListener("read-me", this.readMore);
    this.addEventListener("ApiData", (event) => {
      this.albums = event.detail.data;
      this.filteredAlbums = event.detail.data;
      this.filterAlbums();
    });
    this.addEventListener("open-modal", (e) => {
      const modal = this.shadowRoot.querySelector("modeldialog-app");
      modal.open = true;
      modal.title = e.detail.title;
      modal.text = `Summary: ${e.detail.summary} `;
    });
    this.addEventListener("reset-game", (e) => {
      const modal = this.shadowRoot.querySelector("modeldialog-app");
      modal.open = false;
    });
  }

  paintImage(album) {
    return album.image_url != "Hello"
      ? html` <div
          class="album_img"
          style="background: url(${album.image_url})"
        >
          <span class="album_id">${album.rating}</span>
        </div>`
      : html` <div
          class="album_img"
          style="background: url(https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg)"
        >
          <span class="album_id">${album.rating}</span>
        </div>`;
  }
  resetGame() {}

  readMore(e) {
    this.dispatchEvent(
      new CustomEvent("open-modal", {
        detail: e,
      })
    );
  }
  filterAlbums() {
    if (this.category == "ALL") {
      return;
    } else {
      this.filteredAlbums = this.albums.filter(
        (album) => album.genre === `${this.category}`
      );
    }
  }

  paintAlbums() {
    return this.filteredAlbums.map((album, index) => {
      return this.filteredAlbums.length >= 1
        ? html`
            <div class="album">
              <div>${this.paintImage(album)}</div>

              <div class="album-info">
                <div class="title">
                  Title:
                  <div class="title-data">${album.title}</div>
                </div>
                <div class="title">
                  Release Year:
                  <div class="title-data">${album.rel_year}</div>
                </div>

                <div class="title">
                  Genre:
                  <div class="title-data">${album.genre}</div>
                </div>
                <div class="title">
                  Summary:
                  <div>
                    <div class="summary">${album.summary}</div>

                    <div
                      class="readmore"
                      @click=${() => {
                        this.readMore(album);
                      }}
                    >
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `
        : "";
    });
  }

  render() {
    return html`
      <div class="pagecolor">
        <div class="container">
          <div></div>
          <h2>Movies</h2>
          <get-api url="http://localhost:8080/user/movie-list">
            method='GET'></get-api
          >
          <div class="modal">
            <modeldialog-app @reset-game="${this.resetGame}"></modeldialog-app>
          </div>
          <div class="albums-block">${this.paintAlbums()}</div>
        </div>
      </div>
    `;
  }
}

customElements.define("moviepage-app", MoviePageApp);
