import { LitElement, html } from "lit";

//Polymer CLI does not accept CommonJS modules, only ES modules.
class MyPage extends LitElement {
  static properties = {
    article: {
      // id = ,
      // title,
      // year,
      // rating,
      // genre,
    },
  };

  firstUpdated() {
    this.getData();
  }

  constructor() {
    super();
  }

  getData() {
    fetch("http://localhost:8080/user/10")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.article = data;
      });
  }

  render() {
    return html`<p>Hello from Javascript, !</p>
      <p>hellow again ,age</p> `;
  }
}
customElements.define("my-page", MyPage);
