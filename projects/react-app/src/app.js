import {Component, createElement} from 'react';
import {render} from 'react-dom';
import {defineCustomElements} from '../../../web-components/index';

defineCustomElements();

const e = createElement;

class MyApp extends Component {

    render() {
        return e('div', null, [
            e('smart-greetings', { recipient: 'Krakow.JS'}),
            e('smart-clock')
        ])
    }

}

render(e(MyApp), document.querySelector('#app-root'))