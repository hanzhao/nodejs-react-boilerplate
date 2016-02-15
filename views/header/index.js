'use strict'
import React from 'react'
import { Link } from 'react-router'

import ajax from '../ajax'
import style from './style'

class Header extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      colors: [],
      seconds: 0
    }
    this.fetch.call(this)
  }
  componentDidMount() {
    setInterval(this.tick, 1000)
  }
  tick = () => {
    this.setState({ seconds: this.state.seconds + 1 })
  };
  async fetch() {
    try {
      let res = await ajax.get('/api/colors')
      this.setState({ colors: res.colors })
    } catch (err) {
      console.error(err)
    }
  }
  render() {
    return (
      <div className={style.headerOuter}>
        <Link to="/" className={style.indexLink}>
          Node.js / React.js Hot Reload Boilerplate
        </Link>
        {
          this.state.colors.map((color) => (
            <Link key={color} to={`/${color}`}
                  className={style[`${color}Link`]}>
              {color}
            </Link>)
          )
        }
        <a className={style.timer}>
          You have spent {this.state.seconds} seconds on here
        </a>
      </div>
    )
  }
}

export default Header
