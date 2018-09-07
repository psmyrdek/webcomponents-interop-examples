import {SmartClock} from '../../../web-components/smart-clock/main';
import {SmartGreetings} from '../../../web-components/smart-greetings/main';

export function defineCustomElements() {
    customElements.define('smart-clock', SmartClock);
    customElements.define('smart-greetings', SmartGreetings);
}