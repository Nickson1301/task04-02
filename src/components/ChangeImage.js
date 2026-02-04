import React, { Component } from 'react'
import ConstImg from './ConstantImg'
import './style.css'

class ChangeImage extends Component {
  constructor(){
    super();
    this.state={
        show:ConstImg.nemo,name:"Nemo fish"
    };
    }

     fish1=()=>{
        this.setState({
            show:ConstImg.dorifish,name:"Dori fish"
            
        })
    }
    fish2=()=>{
        this.setState({
            show:ConstImg.goldfish,name:"Gold fish"
            
        })
    }
    fish3=()=>{
        this.setState({
            show:ConstImg.nemo,name:"Nemo fish"
            
        })
    }
    fish4=()=>{
        this.setState({
            show:ConstImg.parrotfish,name:"Parrot fish"
            
        })
    }

  render() {

    
    return (
      <div>
        <img  src={this.state.show} alt="img" className='img1'/><br></br>
        <p>Name : <strong>{this.state.name}</strong></p>
        <button onClick={this.fish1} className='but1'>Blue Fish</button>
        <button onClick={this.fish2} className='but1'>Gold Fish</button>
        <button onClick={this.fish3} className='but1'>Nemo Fish</button>
        <button onClick={this.fish4} className='but1'>Parrot Fish</button>
      </div>
    )
  }
}

export default ChangeImage