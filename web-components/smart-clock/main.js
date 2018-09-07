import {createStyles} from '../helpers/createStyles.js';

export class SmartClock extends HTMLElement {

    connectedCallback() {
        setInterval(() => {
            this.render();
        }, 1000)
    }

    getDate() {
        return new Date().toLocaleTimeString();
    }

    render() {
        this.innerHTML = `
            ${createStyles({
                smartClock: {
                    marginLeft: '5px',
                    padding: '10px',
                    fontSize: '18px',
                    background: '#4ce8b6',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                    color: 'white',
                    borderBottom: '2px solid #38c397',
                    borderRadius: '5px'
                }
            })}
            <span class="smartClock">${this.getDate()}</span>
        `
    }

}

