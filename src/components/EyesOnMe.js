import React from 'react'

class EyesOnMe extends React.Component{

  onFocusEvent = () => {
    console.log('Good!');
  }

  onBlurEvent = () => {
    console.log('Hey! Eyes on me!');
  }

  render(){
    return (
      <div>
        <button
          onFocus={this.onFocusEvent}
          onBlur={this.onBlurEvent}
        ></button>
      </div>
    )
  }
}

export default EyesOnMe
