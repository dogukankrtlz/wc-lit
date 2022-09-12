import { LitElement, html, css } from 'lit-element';

export class BtnPrimary extends LitElement {

    static styles = css`
        :host {
            display: block;
        }

        .btn {
            display: block;
            font-size: 15px;
            line-height: 24px;
            will-change: background-position;
            background-size: 210% 100%;
            background-position: 99% center;
            background-repeat: no-repeat;
            -webkit-transition: background-position .66667s cubic-bezier(.24,.22,.31,1.07);
            transition: background-position .66667s cubic-bezier(.24,.22,.31,1.07);
            background-color: #028484;
            background-image: linear-gradient(100deg,#02a5a5 50%,#028484 50%);
            color: #fff;
            text-align: center;
            padding: 16px 32px;
            background-color: #028484;
            cursor: pointer;
            margin-right: 25px;
            text-decoration: none;
            font-weight: 700;
        }

        .btn:hover {
            background-position: 0 center;
        }

        .blue {
            background-color: #1973b8;
            background-image: linear-gradient(100deg,#1464a5 50%,#1973b8 50%);
        }

        .not-allowed {
            cursor: not-allowed;
        }
    `;

    static get properties() {
        return {
            url: { type: String },
            text: { type: String },
            class: { type: String }
        }
    }

    render() {
        return html`
            <a class='btn ${this.class}' href=${this.url}>${this.text}</a>
        `;
    }
}
customElements.define('btn-primary', BtnPrimary);