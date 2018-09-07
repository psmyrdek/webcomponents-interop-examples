import {createStyles} from '../helpers/createStyles.js';

export class SmartAvatar extends HTMLElement {

    constructor() {
        super();
        this._avatarSize = 100;
    }

    set avatarSize(size) {
        this._avatarSize = size;
        this.render();
    }

    connectedCallback() {
        this._avatarUrl = this.getAttribute('avatar-url');
        this.render();
    }

    render() {
        this.innerHTML = `
            ${createStyles({
                smartAvatar: {
                    width: `${this._avatarSize}px`,
                    height: `${this._avatarSize}px`,
                    borderRadius: '100%',
                    border: '3px solid white',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                },
                smartWrapper: {
                    display: 'flex',
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
                <img class="smartAvatar" src="${this._avatarUrl}" alt="Avatar" />
                <button class="smartLike">+</button>
            </div>
        `
    }

}