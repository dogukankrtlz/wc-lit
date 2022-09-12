import { LitElement, html, css } from 'lit-element';
import './btn-app'

export class TextButton extends LitElement {

    static styles = css`
        :host {
            display: block;
            background: rgb(244, 244, 244);
        }

        h2 {
            font-size: 36px;
            line-height: 40px; 
        }

        #text-button {
            padding: 64px 0;
            text-align: center;
        }

        .wrapper {
            width: 700px;
            float: left;
            margin-left: 16px;
            margin-right: 16px;
            float: none;
            margin: 0 auto;
        }

        btn-primary {
            display: inline-block;
            margin-right: -25px;
        }

        @media screen and (max-width: 1024px) {
            #text-button {
                padding-left: 20px;
                padding-right: 20px;
            }

            h2 {
                font-size: 30px;
            }

            .btn {
                margin: 0;
            }

        }

        @media screen and (max-width: 767px) {
            h2 {
                font-size: 24px;
                line-height: 20px;
                margin-top: 0;
            }

            .wrapper {
                width: 100%;
            }

            h2 {
                font-size: 18px;
                line-height: 120%;
            }
        }

    
        
    `;

    static get properties() {
        return {
            title: { type: String}
        };
    }

    render() {
        return html`
            <div class='wrapper'>
                <div id='text-button'>
                    <h2>${this.title}</h2>
                    <btn-primary class='not-allowed' text='Hazte cliente' url='www.prueba.com'></btn-primary>
                </div>
            </div>
        `;
    }
}

customElements.define('text-button', TextButton);