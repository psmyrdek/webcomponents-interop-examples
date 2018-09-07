import {createStyles} from '../helpers/createStyles.js';

export class SmartAvatar extends HTMLElement {

    static get observedAttributes() {
        return ['url']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
    }

    constructor() {
        super();
        this._size = 100;
        this._url = '';
    }

    get url() { return this._url; }

    set url(url) {
        this._url = url;
        this.render();
    }

    get size() { return this._size; }

    set size(size) {
        this._size = size;
        this.render();
    }

    connectedCallback() {
        this._avatarUrl = this.getAttribute('url');
        this.render();
        this.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('plus-clicked', { bubbles: true }))
        })
    }

    render() {
        this.innerHTML = `
            ${createStyles({
                smartAvatar: {
                    width: `${this._size}px`,
                    height: `${this._size}px`,
                    borderRadius: '100%',
                    border: '3px solid white',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                },
                smartWrapper: {
                    display: 'inline-flex;',
                    flexDirection: 'row',
                    alignItems: 'center',
                },
                smartLike: {
                    marginLeft: '5px',
                    fontSize: '18px',
                    background: '#4ce8b6',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                    color: 'white',
                    border: 'none',
                    borderBottom: '2px solid #38c397',
                    outline: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                },
                'smartLike:hover': {
                    background: '#60eabe'
                }
            })}
            <div class="smartWrapper">
                <img class="smartAvatar" src="${this._url}" alt="Avatar" />
                <button class="smartLike">+</button>
            </div>
        `
    }

}