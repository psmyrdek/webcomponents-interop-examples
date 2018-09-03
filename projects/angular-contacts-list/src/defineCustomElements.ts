import {SmartGreetings} from '../../../web-components/smart-greetings/main.js';
import {SmartClock} from '../../../web-components/smart-clock/main.js';

export default function defineCustomElements() {
    customElements.define('smart-greetings', SmartGreetings);
    customElements.define('smart-clock', SmartClock);
}