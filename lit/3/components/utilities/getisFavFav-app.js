import { LitElement, html, css } from "lit-element";
import "iconify-icon";
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
  async removeFav(userId, movieId) {
    console.log("silinecek user-movie: " + userId + "-" + movieId);
    if (this.favId) {
      await this.deleteData(
        `http://localhost:8080/favorite/${userId}/${movieId}`
      );
    } else {
      alert("ERROR!!!");
    }
    this.dispatchEvent(
      new CustomEvent("fav-delete", {
        detail: { userId },
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
      });
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
        this.fav = false;
      });
  }

  render() {
    return html`
      <div
        @click=${() => {
          this.removeFav(this.loginId, this.id);
        }}
      >
        <iconify-icon
          icon="ant-design:close-circle-twotone"
          width="40"
          height="40"
        ></iconify-icon>
      </div>
    `;
  }
}

customElements.define("getfavfav-api", GetIsFavFavApi);
