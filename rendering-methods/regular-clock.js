export class RegularClock extends HTMLElement {

    constructor() {
        super();
        this.timeNow = new Date().toLocaleTimeString();
        this.render();
    }

    connectedCallback() {
        setInterval(() => {
            this.timeNow = new Date().toLocaleTimeString();
            this.render();
        }, 1000);
    }

    render() {
        this.innerHTML = `
            <div>
                <p>Aktualny czas to <strong>${this.timeNow}</strong></p>            
            </div>
        `
    }

}