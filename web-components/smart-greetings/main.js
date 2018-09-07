import { createStyles } from '../helpers/createStyles.js';

export class SmartGreetings extends HTMLElement {

    static get observedAttributes() {
        return ['recipient']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
    }

    get recipient() { return this._recipient; }

    set recipient(recipient) {
        this._recipient = recipient;
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            ${createStyles({
                recipient: {
                    color: '#4ce8b6',
                    fontWeight: '700'
                }
            })}
            <p>Hello <span class="recipient">${this._recipient}</span></p>
        `
    }

}

