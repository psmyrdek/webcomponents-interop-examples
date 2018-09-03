export class FancyGreetings extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <p>Hello, ${this.getAttribute('recipient')}!</p>
        `
    }

}

