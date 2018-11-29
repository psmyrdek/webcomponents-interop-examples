import { html, render } from './node_modules/lit-html/lit-html.js'

export class SmartClock extends HTMLElement {

    constructor() {
        super();
        this.timeNow = new Date().toLocaleTimeString();
        this.clockTemplate = (time) => html`
            <div>
                <p>Aktualny czas to <strong>${time}</strong></p>            
            </div>
        `;
        this.render();
    }

    connectedCallback() {
        setInterval(() => {
            this.timeNow = new Date().toLocaleTimeString();
            this.render();
        }, 1000)
    }

    render() {
        render(this.clockTemplate(this.timeNow), this)
    }

}