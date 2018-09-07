import { render, html } from '../node_modules/lit-html/lit-html.js'
import { createRules } from '../helpers/createStyles.js';

export class SmartClock extends HTMLElement {

    constructor() {
        super();
        this.componentTemplate = (date) => html`
            <style>
                ${createRules({
                    smartClock: {
                        margin: '10px',
                        display: 'inline-block',
                        padding: '10px',
                        fontSize: '18px',
                        background: '#4ce8b6',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                        color: 'white',
                        borderBottom: '2px solid #38c397',
                        borderRadius: '5px'
                    }
                })}
            </style>
            <p class="smartClock">${date}</p>
        `
    }

    connectedCallback() {
        this.render();
        setInterval(() => {
            this.render();
        }, 1000)
    }

    getDate() {
        return new Date().toLocaleTimeString();
    }

    render() {
        render(this.componentTemplate(this.getDate()), this)
    }

}

