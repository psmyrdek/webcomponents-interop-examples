import {createStyles} from '../helpers/createStyles.js';

export class SmartGreetings extends HTMLElement {

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
            <p>Hello <span class="recipient">${this.getAttribute('recipient')}</span></p>
        `
    }

}

