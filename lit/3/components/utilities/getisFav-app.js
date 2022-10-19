import { LitElement, html, css } from "lit-element";
import "iconify-icon";

export class GetIsFavApi extends LitElement {
  static styles = css`
    :host {
      display: block;
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
        alert(err);
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
        console.log(err);
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
          ? ((this.favId = data.id), (this.fav = true))
          : (this.fav = false);
      })
      .catch((err) => {
        console.log(err);
        this.fav = false;
      });
  }

  render() {
    return html`
      <div
        @click=${() => {
          this.addFav(this.id);
        }}
      >
        <iconify-icon
          icon="ant-design:heart-outlined"
          style="color: red;"
          width="44"
          height="44"
        ></iconify-icon>
      </div>
    `;
  }
}

customElements.define("getfav-api", GetIsFavApi);
