import React, { Component } from "react";
import {render} from 'react-dom';
import {defineCustomElements} from '../../../web-components/index';

defineCustomElements();

class MyApp extends Component {

    render() {
        return (
            <div>
                <smart-greetings recipient="Krakow.JS"></smart-greetings>
                <smart-clock></smart-clock>
                <smart-avatar url="https://image.ibb.co/kFAbfK/1500295159151.jpg"></smart-avatar>
            </div>
        )
    }

}

render(<MyApp />, document.querySelector('#app-root'))