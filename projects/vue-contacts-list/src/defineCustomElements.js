import Vue from 'vue'
import { FancyGreetings } from '../../../web-components/fancy-greetings/main';

export default function defineCustomElements() {

    Vue.config.ignoredElements = [
        'fancy-greetings'
    ];

    customElements.define('fancy-greetings', FancyGreetings);
}