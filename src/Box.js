import React, { Component } from 'react';
import {Choice} from './Helpers';
import './Box.css'

class Box extends Component {
  static defaultProps={
    
  }
  constructor(props){
    super(props);
    this.state={color: Choice(this.props.allColors)};
    this.handleClick=this.handleClick.bind(this);
  }

  pickColor() {
    let newColor
    do {
      newColor = Choice(this.props.allColors);
    } while (newColor === this.state.color)
    this.setState({ color: newColor });
  }

  handleClick() {
    this.pickColor()
  }

  render(){
    return(
      <div
        className='Box'
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}
        ></div>
    );
  }
}

export default Box
