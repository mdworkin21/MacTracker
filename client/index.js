import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'

ReactDom.render(
    <Provider store={store}>
      <div>HELLO POOP</div>
    </Provider>,
      document.getElementById('app')
)