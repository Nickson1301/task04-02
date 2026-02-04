import React, { Component } from 'react'
import nemo from '../images/nemo.jpg'
import dorifish from '../images/dorifish.jpg'
import './style.css'

class ToggleImage extends Component {
    constructor(){
    super();
    this.state={
        show:true
    };
    }

     toggle=()=>{
        this.setState({
            show:!this.state.show
        })
    }
  render() {

     let imagelink;
     if(this.state.show){
        imagelink=nemo
     }
     else{
        imagelink=dorifish
     }
    return (
      <div>
        <img  src={imagelink} alt="img" className='img1'/><br></br>
        <button onClick={this.toggle} className='but1'>Toggle Image</button>
      </div>
    )
  }
}

export default ToggleImage