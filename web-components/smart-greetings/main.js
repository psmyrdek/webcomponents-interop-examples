export class SmartGreetings extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <p>Hello, ${this.getAttribute('recipient')}!</p>
        `
    }

}

