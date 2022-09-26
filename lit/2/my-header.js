import { LitElement, html } from "lit";

class MyHeader extends LitElement {
  render() {
    return this.albums.map((album, index) => {
      return this.albums.length >= 1
        ? html`
            <div>
              <table>
                <tr>
                  <th>Movie Name</th>
                </tr>
                <tr>
                  <td>${album.movie}</td>
                </tr>
              </table>
            </div>
          `
        : "";
    });
  }
}
customElements.define("my-header", MyHeader);
