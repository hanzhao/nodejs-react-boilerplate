'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Header from './header'
import MainPage from './main-page'
import PinkPage from './pink-page'
import TealPage from './teal-page'
import NoMatch from './no-match-page'

import style from './app.scss'

class App extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <Header />
        { this.props.children }
      </div>
    )
  }
}

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MainPage} />
      <Route path="pink" component={PinkPage} />
      <Route path="teal" component={TealPage} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
)

ReactDOM.render(router, document.querySelector('#root'))
