import Vue from 'vue'
import { SmartGreetings } from '../../../web-components/smart-greetings/main';
import { SmartClock } from '../../../web-components/smart-clock/main';

export default function defineCustomElements() {

    Vue.config.ignoredElements = [
        'smart-greetings',
        'smart-clock'
    ];

    customElements.define('smart-greetings', SmartGreetings);
    customElements.define('smart-clock', SmartClock);
}