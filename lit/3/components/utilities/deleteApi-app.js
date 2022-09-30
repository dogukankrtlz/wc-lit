import { LitElement, html } from "lit-element";

export class DeleteApi extends LitElement {
  static get properties() {
    return {
      url: { type: String },
      method: { type: String },
    };
  }

  firstUpdated() {
    this.deleteData();
  }

  constructor() {
    super();
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
        alert("DELETEDATAERROR");
      })
      .finally((this.fav = !this.fav));
  }
  sendResponse(data) {
    this.dispatchEvent(
      new CustomEvent("ApiData", {
        detail: { data },
        bubbles: true,
        composed: true,
      })
    );
  }
}

customElements.define("delete-api", DeleteApi);
