import { LitElement, html, css } from "lit-element";
import "../utilities/getApi-app";
import "../utilities/getisFav-app";
import "../moviepop/modaldialog-app";
import "../dropdown/dropdown-app";
import "../searchBar-app/searchBar-app";
import "../pagination/pagination-app";
export class MovieDetailPageApp extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    * {
      box-sizing: border-box;
    }
    .userId {
      font-size: 14px;
    }
    .comment-top {
      display: flex;
      flex-direction: column;
      margin: 4px;
      margin-bottom: 10px;
    }
    .summary {
      margin-top: 10px;
    }
    .year {
      margin-top: -20px;
    }
    .date {
      color: #fff4;
      font-size: 12px;
    }
    .genre {
      border-radius: 10px;
      border: 2px solid white;
      padding: 5px;
      font-weight: 600;
      margin-top: 20px;
    }
    .info {
      margin-left: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      height: 100%;
    }
    .title {
      color: #f0e68c;
      font-size: 29px;
      font-family: Georgia;
    }
    .pagecolor {
      display: flex;
      padding-bottom: 200px;
      width: 100%;
      background-color: #454264;
      justify-content: center;
      align-items: center;
      min-height: 1300px;
    }
    .container {
      display: flex;
      width: 90%;
      justify-content: center;
      align-items: flex-start;
      flex-direction: row;
      margin-left: auto;
      margin-right: auto;
      background-color: #454264;
      min-height: 1000px;
    }
    .movie {
      width: 45%;
      border-radius: 5px;
      box-shadow: 3px 3px black;
      margin-top: 50px;
      color: #fffff0;
      border: 1px solid;
      padding: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: row;
      background-color: #072146;
    }

    .com {
      margin-left: 45px;
      width: 55%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .comments {
      border-radius: 5px;

      color: #fffff0;
      background-color: #fffff0;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 1px solid pink;
      min-height: 400px;
      width: 75%;
      margin: 12px;
    }
    .comment {
      width: 80%;
      display: flex;
      border-radius: 14px;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      border: 1px solid #fffff0;
      margin-top: 25px;
      padding-left: 15px;
      padding-bottom: 15px;

      background-color: #072146;
      box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
        0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    }
    .album_img {
      min-width: 280px;
      height: 490px;
      position: relative;
      background-size: cover !important;
      background-position: center !important;
      background-repeat: no-repeat !important;
    }
    .login-block {
      border-radius: 5px;
      border: 1px solid pink;
      width: 450px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      padding: 40px;
      margin-top: 45px;
      margin-bottom: 20px;
      padding-top: 40px;
      width: 75%;
      background-color: #072146;
    }

    #error {
      display: none;
      color: red;
      font-size: 14px;
    }
    button {
      border-radius: 10px;
      width: 25%;
      margin-bottom: 10px;
      padding: 10px 15px;
      outline: none;
      min-height: 40px;
    }
    input {
      font-size: 20px;
      width: 75%;
      margin-bottom: 10px;
      padding: 40px;
      border-radius: 20px;
      outline: none;
      margin-right: 20px;
    }
    button {
      width: 25%;
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

    @media screen and (max-width: 1158px) {
      .container {
        padding: 0px 30px 25px;
        margin-bottom: 15px;
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
    }
  `;
  $get = (elem) => this.shadowRoot.querySelector(elem);

  static get properties() {
    return {
      movie: {},
      comments: {
        userId: Number,
        movieId: Number,
        message: String,
        date: String,
      },
      filteredComments: {
        userId: Number,
        movieId: Number,
        message: String,
        date: String,
      },
      log: Number,
      comment: {
        userId: Number,
        movieId: Number,
        message: String,
        date: String,
      },
      loginId: Number,
      pageCount: Number,
      activePage: Number,
    };
  }

  constructor() {
    super();
    this.comment = {};
    this.loginId;
    this.movie = {};
    this.comments = [];
    this.activePage = 1;
    this.filteredComments = [];

    this.log = 4;
    this.pageCount = 1;
    this.addEventListener("ApiData", (event) => {
      this.comments = event.detail.data;
      this.filteredComments = event.detail.data;
      console.log(event.detail.data);
      this.pageCount = Math.ceil(this.comments.length / 4);
      this.filterPage(1);
    });
    this.addEventListener("change-page", (event) => {
      console.log(event.detail.x);
      this.activePage = 0;
      this.filterPage(event.detail.x);
    });
  }
  connectedCallback() {
    super.connectedCallback();
    console.log("connected");
  }
  attributeChangedCallback() {
    this.pageCount = Math.ceil(this.comments.length / 4);
    console.log("pagecount::" + this.pageCount);
    MovieDetailPageApp;
  }
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
            <pagination-app .activePage=${1} .pages=${1}></pagination-app>
          </div>
        `;
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
  filterPage(x) {
    let a = (x - 1) * 4;
    let b = x * 4;
    let c = this.comments.length;
    console.log("c" + c);
    if (c > b) {
      this.filteredComments = this.comments.slice(a, b);
    } else {
      this.filteredComments = this.comments.slice(a, c);
    }
    this.activePage = x;

    console.log(this.activePage);
  }
  paintComments() {
    return this.filteredComments.length >= 1
      ? this.filteredComments.map((comment) => {
          return html`
            <div class="comment">
              <div class="comment-top">
                <div class="userId">${comment.userId}</div>
                <div class="date">${comment.date}</div>
              </div>

              <div class="message">${comment.message}</div>
            </div>
          `;
        })
      : "";
  }
  async addComment() {
    /////////////
    this.pageCount = 0;
    this.activePage = 0;
    this.comment.movieId = this.movie.id;
    this.comment.userId = this.loginId;
    this.comment.message = this.$get("#newcomment").value;
    var date2 = new Date().toISOString().substr(0, 19).replace("T", " ");
    this.comment.date = date2;
    const error = this.$get("#error");

    // var currentdate = new Date();
    // var datetime =
    //   currentdate.getDate() +
    //   "/" +
    //   (currentdate.getMonth() + 1) +
    //   "/" +
    //   currentdate.getFullYear() +
    //   " " +
    //   currentdate.getHours() +
    //   ":" +
    //   currentdate.getMinutes() +
    //   ":" +
    //   currentdate.getSeconds();
    // console.log(datetime);

    console.log(JSON.stringify(this.comment));
    if (
      this.comment.message &&
      this.comment.userId &&
      this.comment.movieId &&
      this.comment.date
    ) {
      await this.postData("http://localhost:8080/comment", this.comment);
      fetch(`http://localhost:8080/comment/${this.movie.id}`, {
        method: "GET",
      })
        .then((reponse) => {
          return reponse.json();
        })
        .then((data) => {
          this.comments = data;
          this.pageCount = Math.ceil(this.comments.length / 4);

          this.filterPage(1);
        })
        .catch((err) => console.error("Ha ocurrido un error", err));
    } else {
      error.style.display = "block";
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
    })
      .then((response) => {
        console.log(response.status);
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return html`
      <div class="pagecolor">
        <div class="container">
          <get-api
            method="GET"
            url="http://localhost:8080/comment/${this.movie.id}"
          >
          </get-api>
          <div class="movie">
            <div>${this.paintImage(this.movie)}</div>

            <div class="info">
              <div class="title">
                <h2>${this.movie.title}</h2>
              </div>
              <div class="year">${this.movie.rel_year}</div>
              <div class="genre">${this.movie.genre}</div>
              <div class="summary">${this.movie.summary}</div>
            </div>
          </div>
          <div class="com">
            <div class="login-block">
              <input
                id="newcomment"
                type="text"
                name="newcomment"
                placeholder="Add New Comment"
                value=""
              />

              <p id="error">Empty Comment!</p>
              <button
                @click=${() => {
                  this.addComment();
                }}
              >
                SAVE Comment
              </button>
            </div>
            <div class="comments">${this.paintComments()}</div>
            ${this.filteredComments.length > 0
              ? html` <div>${this.paintPagination()}</div> `
              : ""}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("movie-detail-app", MovieDetailPageApp);
