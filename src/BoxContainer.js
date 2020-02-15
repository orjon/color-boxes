import React, { Component } from 'react'
import Box from './Box';
import './BoxContainer.css'

class BoxContainer extends Component{
  static defaultProps = {
    allColors: ['#d6ecd2','#b7ddb0','#99d18f','#7bc86c','#61bd4f','#5aac44','#519839','#49852e','#009dff','#0da2ff','#26abff','#59bfff','#8cd3ff','#bfe6ff','#d9f1ff','#e8ffff'],
    numBoxes: 18
  }
  render(){
    const boxes = Array.from({length: this.props.numBoxes}).map(() => (
      <Box allColors={this.props.allColors}/>
    ));
    return(
      <div className='BoxContainer'>
        {boxes}
      </div>
    );
  }
}

export default BoxContainer