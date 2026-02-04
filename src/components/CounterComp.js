import React, { Component } from 'react'

class CounterComp extends Component {
     
     constructor(){
    super();
    this.state={
        count:0
    };
    }

     increment=()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
    }

    decrement=()=>{
        this.setState((prevState)=>({count:prevState.count-1}))
    }
    zero=()=>{
        this.setState((prevState)=>({count:0}))
    }
  render() {
    
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.increment()} className="but1">increment</button>
        <button onClick={()=>this.decrement()} className="but1">Decrement</button>
        <button onClick={()=>this.zero()} className="but1">Reset to zero</button>
      </div>
    )
  }
}

export default CounterComp