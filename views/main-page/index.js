'use strict'
import React from 'react'

import style from './style'

class MainPage extends React.Component {
  render() {
    return (
      <div className={style.block}>
        <div className={style.info}>
          Hey! Pick a color!
        </div>
      </div>
    )
  }
}

export default MainPage
