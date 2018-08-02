import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux'
import store from './store'
import style from '../public/style.css'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import MacroCalc from './components/MacroCalc'
import Log from './components/Log'


ReactDom.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/calc" component={MacroCalc} />
          <Route exact path="/log" component={Log} />


        </Switch>
      </Router>
    </Provider>,
      document.getElementById('app')
)