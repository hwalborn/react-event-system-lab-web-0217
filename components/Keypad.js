import React from 'react'

class Keypad extends React.Component {
  constructor() {
    super()
    this.passwordEnter = this.passwordEnter.bind(this)
  }

  passwordEnter() {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.passwordEnter}></input>
    )
  }
}

module.exports = Keypad
