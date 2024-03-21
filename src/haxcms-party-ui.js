import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. Replicate codepen card to here.
 * 2. Headers, images, parargraph, and details button.
 * 3. W.i.P.: other functional buttons
 */

export class RPGParty extends LitElement {

    static get tag() {
        return 'rpg-party';
    }

    constructor() {
        super();
        this.title = "Defualt Card";
        this.link = "https://www.psu.edu/";
        this.cardImg = "https://free-icon-rainbow.com/i/icon_00201/icon_002010_256.png";
        this.para = "Interesting text goes here.";
        this.fancy = false;
        this.topText = "top text";
        this.bottomText = "bottom text";

    }

    static get styles() {
        return css`
      :host {
        overflow: auto;
        width: 100%;
        padding: 0 10em;
      }

      .rpg-picker-wrapper {
        height: 75vh;
        width: 90%;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-around;
      }

      .rpg-character-selector {
        height: 44%;
        width: 90%;
        border: 1px solid black;
      }
      .rpg-buttons-wrapper {
        height: 10%;
        width: 90%;


        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-evenly;
      }

      .rpg-buttons-wrapper button {
        padding: 4em 10em;
        
        height: 100%;
        display: flex;
        background: white;
        border-radius: 20px;
        align-items: center;
        justify-content: center;
      }

      .rpg-buttons-wrapper p {
        font-size: 20px;
      }
      
      .rpg-arraylist-output {
        height: 44%;
        width: 90%;
        border: 1px solid black;
      }

    `;
    }

    openChanged(e) {
        console.log(e.newState);
        if (e.newState === "open") {
            this.fancy = true;
        }
        else {
            this.fancy = false;
        }
    }

    render() {
        return html`
        <div class="rpg-picker-wrapper">
            <div class="rpg-character-selector">

            </div>
            <div class="rpg-buttons-wrapper">
                <button><p>Add</p></button>
                <button><p>Save</p></button>
                <button><p>Delete</p></button>
            </div>
            <div class="rpg-arraylist-output">

            </div>
        </div>
    `;
    }

    static get properties() {
        return {
            title: { type: String },
            link: { type: String },
            cardImg: { type: String },
            para: { type: String },
            fancy: { type: Boolean, reflect: true },
            topText: { type: String },
            bottomText: { type: String },

        };
    }
}

globalThis.customElements.define(RPGParty.tag, RPGParty);
