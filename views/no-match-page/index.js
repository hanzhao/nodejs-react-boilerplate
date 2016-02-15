'use strict'
import React from 'react'

import style from './style'
import logo from './react.svg'

class NoMatch extends React.Component {
  render() {
    return (
      <div className={style.block}>
        <img className={style.react} src={logo} />
        <div className={style.info}>
          Sorry, this page is not found.
        </div>
      </div>
    )
  }
}

export default NoMatch
