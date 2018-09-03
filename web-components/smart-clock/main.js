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
            <p>${this.getDate()}</p>
        `
    }

}

