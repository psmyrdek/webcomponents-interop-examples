import { SmartGreetings } from './smart-greetings/main.js';
import { SmartClock } from './smart-clock/main.js';
import { SmartAvatar } from './smart-avatar/main.js';

export function defineCustomElements() {
    customElements.define('smart-greetings', SmartGreetings);
    customElements.define('smart-clock', SmartClock);
    customElements.define('smart-avatar', SmartAvatar);
}