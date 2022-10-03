import { LitElement, html, css } from "lit-element";

export class GetIsFavFavApi extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .readmore {
      // color: rgb(1, 566, 1);
      justify-content: flex-start;
      align-items: flex-start;
      text-align: center;
      align-self: center;
      width: 60%;
      font-weight: 500;
      color: #072154;
      border-radius: 15px;
      background-color: yellow;
    }
    .off {
      background-color: red;
    }
  `;

  static get properties() {
    return {
      url: { type: String },
      method: { type: String },
      id: { type: String },
      loginId: { type: String },
      favId: String,
      fav: Boolean,
    };
  }

  async firstUpdated() {
    await this.getData();
  }

  constructor() {
    super();
    this.fav = true;
  }

  // sendResponse(data) {
  //   this.dispatchEvent(
  //     new CustomEvent("fav-check", {
  //       detail: { data },
  //       bubbles: true,
  //       composed: true,
  //     })
  //   );
  // }
  removeFav(id, loginId) {
    console.log("silinecek FAV ID: " + this.favId);
    if (this.favId) {
      this.deleteData(`http://localhost:8080/favorite/${this.favId}`);
    } else {
      alert("ERROR!!!");
    }
    this.dispatchEvent(
      new CustomEvent("fav-delete", {
        detail: { id },
        bubbles: true,
        composed: true,
      })
    );

    // Wrong Credentials
  }
  async deleteData(url = "") {
    // Default options are marked with *

    const response = await fetch(url, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })
      .then((response) => {
        console.log("status:" + response.status);
        console.log("status:" + response.body);
      })
      .catch((err) => {
        alert("DELETEDATAERROR");
      })
      .finally((this.fav = false));
  }
  addFav(id) {
    let favorite = {};

    var x = parseInt(id);
    favorite.id = x * 4;
    favorite.userId = this.loginId;
    favorite.movieId = x;

    console.log(JSON.stringify(favorite));
    if (favorite.id && favorite.userId && favorite.movieId) {
      this.postData("http://localhost:8080/favorite", favorite);
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
    })
      .then((response) => {
        return response.json;
      })
      .catch((err) => {
        alert("POSTDATAERROR");
      })
      .finally((this.fav = !this.fav), (this.favId = data.id));
  }
  getData() {
    fetch(this.url, { method: this.method })
      .then((reponse) => {
        return reponse.json();
      })
      .then((data) => {
        data.id != 0
          ? (console.log("xd"), ((this.favId = data.id), (this.fav = true)))
          : (console.log("xd2"), (this.fav = false));
      })
      .catch((err) => {
        this.fav = false;
      });
  }

  render() {
    return html`
      <div
        @click=${() => {
          this.removeFav(this.id, this.loginId);
        }}
      >
        X
      </div>
    `;
  }
}

customElements.define("getfavfav-api", GetIsFavFavApi);
