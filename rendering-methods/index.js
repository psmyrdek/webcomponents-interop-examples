import {RegularClock} from './regular-clock.js'
import {SmartClock} from './smart-clock.js'
import {initAngularApp} from './angular-clock.js'

customElements.define('regular-clock', RegularClock)
customElements.define('smart-clock', SmartClock)
initAngularApp();