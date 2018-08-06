import React from 'react'

class Keypad extends React.Component{

  constructor(){
    super()
    this.state={
      value: ""
    }
  }

  renderKeys = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  logKeys = () => {
    console.log('Entering password...');
  }

  render(){
    return(
      <div>
        <input
        onKeyUp={this.logKeys}
        onChange={this.renderKeys}
        type="password"/>
      </div>
    )
  }
}

export default Keypad
