import { LitElement, html, css } from "lit-element";
import "../utilities/getApi-app";
import "../utilities/getisFav-app";
import "../moviepop/modaldialog-app";
import "../dropdown/dropdown-app";
import "../searchBar-app/searchBar-app";
import "../pagination/pagination-app";
export class MoviePageApp extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    * {
      box-sizing: border-box;
    }
    .loadmore {
      margin-top: 20px;

      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: #072146;
      padding: 30px;
      font-size: 27px;
      font-weight: 600;
      color: #fffff0;
      border-radius: 10px;
    }
    .pagecolor {
      padding-bottom: 200px;
      width: 100%;
      background-color: #454264;
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
      background-color: #454264;
      min-height: 1000px;
    }

    .album {
      width: 362px;

      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 20px;
      border: 1px solid black;
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
      top: 1px;
      left: 1px;
      font-size: 12px;
      border-radius: 4px;
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
      border-end-end-radius: 4px;
      border-top-right-radius: 4px;
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
      font-size: 12px;
      line-height: 24px;
      color: yellow;
      border-radius: 5px;
      justify-content: "flex-start";
      align-items: "flex-start";
      padding: 2px;
      background-color: #072146;
      font-weight: 700;
      display: flex;
      flex-direction: row;
    }
    .title-data {
      display: flex;

      font-size: 11px;
      line-height: 24px;
      color: #fffff0;
      border-radius: 5px;
      justify-content: "flex-start";
      align-items: "flex-start";
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
      padding: 2px;
      /* flex-shrink: 1;
      overflow: hidden; */
    }
    button {
      width: 100%;
      margin-bottom: 10px;
      padding: 10px 15px;
      outline: none;
    }
    .green {
      color: green;
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
    .results-label {
      color: #fffff0;
      font-size: 34px;
      font-weight: 500;
      margin-bottom: 20px;
      padding-top: 27px;
    }
    .readmore {
      // color: rgb(1, 566, 1);
      justify-content: flex-start;
      align-items: flex-start;
      text-align: center;
      align-self: center;
      width: 90px;
      font-weight: 600;
      font-size: 14px;
      color: #072154;
      margin-right: 20px;
      border-radius: 15px;
      background-color: yellow;
    }
    .gomoviepage {
      justify-content: flex-start;
      align-items: flex-start;
      text-align: center;
      align-self: center;
      width: 90px;
      color: #072154;
      margin-right: 20px;
      border-radius: 15px;
      margin-left: -43px;
      margin-top: -5px;
      font-weight: 600;
      font-size: 14px;
      background-color: #ff9;
    }
    .off {
      background-color: pink;
    }
    .info-alt {
      display: flex;
      flex-direction: row;
      margin-top: 45px;
      justify-content: center;
    }
    .option {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    }
    .searchbar {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 50px;
      width: 80%;
    }

    #error {
      display: none;
      color: red;
      font-size: 14px;
    }
    .dropdown {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 50px;
    }
    .nodata {
      color: red;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 240px;
      width: 100%;
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
  $get = (elem) => this.shadowRoot.querySelector(elem);

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
        isFav: Boolean,
      },
      filteredAlbums: {
        id: Number,
        title: String,
        rel_year: Number,
        rating: Number,
        genre: String,
        image_url: String,
        summary: String,
        isFav: Boolean,
      },
      extrafilteredAlbums: {
        id: Number,
        title: String,
        rel_year: Number,
        rating: Number,
        genre: String,
        image_url: String,
        summary: String,
        isFav: Boolean,
      },
      favorite: {
        id: Number,
        userId: Number,
        movieId: Number,
      },
      removeReq: {
        userId: Number,
        movieId: Number,
      },
      numAlbums: { type: Number },
      genre: String,
      loginId: Number,
      popup: Boolean,
      category: String,
      search_value: String,
      favmode: String,
      load: Number,
      pageCount: Number,
      activePage: Number,
    };
  }

  constructor() {
    super();
    this.load = 12;
    this.loginId;
    this.category = "ALL";
    this.popup = false;
    this.numAlbums;
    this.albums = [];
    this.favorite = {};
    this.filteredAlbums = [];
    this.extrafilteredAlbums = [];
    this.pageCount = 1;
    this.activePage = 1;
    this.favmode = true;
    this.addEventListener("change-page", (event) => {
      this.filterPage(event.detail.x);
    });
    this.addEventListener("fav-check", (event) => {
      console.log(event.detail.data);
    });
    this.addEventListener("search-update", (e) => {
      e.preventDefault();
      this.search_value = e.detail.searchValue;
      this.filterAlbumsSearch();
      e.preventDefault();
    });
    this.addEventListener("selectionChanged", (e) => {
      this.category = e.detail.option;
      this.filterAlbums();
    });
    this.addEventListener("read-me", this.readMore);
    this.addEventListener("ApiData", (event) => {
      this.albums = event.detail.data;
      this.filteredAlbums = event.detail.data;
      this.extrafilteredAlbums = event.detail.data;
      this.pageCount = Math.ceil(this.extrafilteredAlbums.length / 12);
      this.filterPage(1);
      this.filterAlbums();
    });
    this.addEventListener("open-modal", (e) => {
      const modal = this.shadowRoot.querySelector("modeldialog-app");
      modal.open = true;
      modal.title = e.detail.title;
      modal.text = `Summary: ${e.detail.summary} `;
      modal.imageUrl = e.detail.image_url;
    });
    this.addEventListener("reset-game", (e) => {
      const modal = this.shadowRoot.querySelector("modeldialog-app");
      modal.open = false;
    });
  }

  requestDetail(movie) {
    console.log(movie);
    this.dispatchEvent(
      new CustomEvent("detailRequested", {
        detail: { movie },
      })
    );
  }
  filterPage(x) {
    let a = (x - 1) * 12;
    let b = x * 12;
    let c = this.filteredAlbums.length;
    console.log("c" + c);
    if (c > b) {
      this.extrafilteredAlbums = this.filteredAlbums.slice(a, b);
    } else {
      this.extrafilteredAlbums = this.filteredAlbums.slice(a, c);
    }
    this.activePage = x;
  }
  filterLoadMore() {
    this.extrafilteredAlbums = this.filteredAlbums.slice(0, this.load);
  }

  paintImage(album) {
    return album.image_url != "Hello"
      ? html` <div
          @click=${() => {
            this.requestDetail(album);
          }}
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
  removeFav(album) {
    console.log(
      "silinecek favoritein movieIdsi ve userIdsi" +
        album.id +
        "-" +
        this.loginId
    );
    this.removeReq.movieId = album.id;
    this.removeReq.userId = this.loginId;
    console.log("removereq: " + this.removeReq);
    if (album.id) {
      this.deleteData("http://localhost:8080/favorite/movie", this.removeReq);
    } else {
      alert("ERROR!!!");
    }

    // Wrong Credentials
  }
  async deleteData(url = "", data = {}) {
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
    }).then((response) => {
      console.log("status:" + response.status);
      console.log("status:" + response.body);
    });
  }
  addFav(album) {
    this.favorite.id = album.id * 4;
    this.favorite.userId = this.loginId;
    this.favorite.movieId = album.id;

    console.log(JSON.stringify(this.favorite));
    if (this.favorite.id && this.favorite.userId && this.favorite.movieId) {
      this.postData("http://localhost:8080/favorite", this.favorite);
    } else {
      alert("ERROR!!!");
    }

    // Wrong Credentials
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
    }).then((response) => {
      console.log("status:" + response.status);
      console.log("status:" + response.body);
    });
  }
  filterAlbumsSearch() {
    if (this.search_value == "") {
      if (this.category == "ALL") {
        this.filteredAlbums = this.albums;
      } else {
        this.filteredAlbums = this.albums.filter(
          (album) => album.genre === `${this.category}`
        );
      }
    } else if (this.category == "ALL") {
      // this.filteredAlbums = this.albums;
      this.filteredAlbums = this.albums.filter(
        (album) => album.title.toLowerCase().indexOf(this.search_value) > -1
      );
    } else {
      this.filteredAlbums = this.albums.filter(
        (album) => album.genre === `${this.category}`
      );
      this.filteredAlbums = this.filteredAlbums.filter(
        (album) => album.title.toLowerCase().indexOf(this.search_value) > -1
      );
    }
    this.pageCount = Math.ceil(this.filteredAlbums.length / 12);
    this.filterPage(1);
  }
  filterAlbums() {
    if (this.category == "ALL") {
      this.filteredAlbums = this.albums;
    } else {
      this.filteredAlbums = this.albums.filter(
        (album) => album.genre === `${this.category}`
      );
    }
    this.pageCount = Math.ceil(this.filteredAlbums.length / 12);
    this.filterPage(1);
  }
  async getData(url, method) {
    return fetch(url, { method: method })
      .then((reponse) => {
        return reponse.json();
      })
      .then((data) => {
        return data;
      })
      .catch((err) => console.error("Ha ocurrido un error", err));
  }

  //http://localhost:8080/favorite/check/10/${album.id}
  paintPagination() {
    return this.pageCount > 1
      ? html`
          <div>
            <pagination-app
              .activePage=${this.activePage}
              .pages=${this.pageCount}
            ></pagination-app>
          </div>
        `
      : html`
          <div>
            <pagination-app
              .activePage=${this.activePage}
              .pages=${this.pageCount}
            ></pagination-app>
          </div>
        `;
  }

  paintAlbums() {
    return this.extrafilteredAlbums.length >= 1
      ? this.extrafilteredAlbums.map((album, index) => {
          return this.extrafilteredAlbums.length >= 1
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
                        <div
                          @click=${() => {
                            this.readMore(album);
                          }}
                          class="summary"
                        >
                          ${album.summary}
                        </div>
                      </div>
                    </div>
                    <div class="info-alt">
                      <div
                        class="readmore"
                        @click=${() => {
                          this.readMore(album);
                        }}
                      >
                        See Details
                      </div>

                      <getfav-api
                        url="http://localhost:8080/favorite/check/${this
                          .loginId}/${album.id}"
                        method="GET"
                        id=${album.id}
                        loginId="${this.loginId}"
                      ></getfav-api>
                    </div>
                    <div
                      class="gomoviepage"
                      @click=${() => {
                        this.requestDetail(album);
                      }}
                    >
                      Movie Page
                    </div>
                  </div>
                </div>
              `
            : "";
        })
      : html` <div class="nodata">Nothing Found!</div>`;
  }

  render() {
    return html`
      <div class="pagecolor">
        <div class="container">
          ${this.loginId
            ? html` <div class="results-label">Welcome ${this.loginId}!</div> `
            : ""}

          <div class="option">
            <div class="searchbar">
              <lit-element-search-bar></lit-element-search-bar>
            </div>
            <div class="dropdown">
              <lit-element-drop-down></lit-element-drop-down>
            </div>
          </div>
          <div class="results-label">Results</div>
          <hr />
          <br />
          <br />
          <get-api
            url="http://localhost:8080/user/movie-list"
            method="GET"
          ></get-api>
          <div class="modal">
            <modeldialog-app @reset-game="${this.resetGame}"></modeldialog-app>
          </div>
          <div class="albums-block">${this.paintAlbums()}</div>
          <br />
          <br />
          <br />
          <br />
          ${this.extrafilteredAlbums.length > 0
            ? html` <div>${this.paintPagination()}</div> `
            : ""}
        </div>
      </div>
    `;
  }
}

customElements.define("moviepage-app", MoviePageApp);
