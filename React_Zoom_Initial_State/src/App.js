import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
   
    this.state={
      x:50,
      y:50
    };

    this.increaseWidth = this.increaseWidth.bind(this);
    this.decreaseWidth = this.decreaseWidth.bind(this);
  }
 
  increaseWidth(){
     if(this.state.x != 75){
     this.setState({
       x : this.state.x + 25,
       y : this.state.y - 25
     })
    }
  }
  
  decreaseWidth(){
    if(this.state.x != 25){ 
    this.setState({
      x : this.state.x - 25,
      y : this.state.y + 25
    })
  }
 }

  render() {
    return (
        <div className="col-lg-8 col-lg-offset-2">
            <div className="col-lg-12 m-t-40">
                <div className="col-lg-12">
                      <div className="">
                            <input className="float-l m-1" type="button" value ="-" onClick={(e) => this.decreaseWidth()}/> <p className="float-l m-1" id="left-div">100%</p> 
                            <input className="float-l m-1" type="button" value ="+" onClick={(e) => this.increaseWidth()}/>
                      </div>
                </div>
                <div className="col-lg-12">
                <div className="first_div" style={{width: (this.state.x + '%')}}>
                    <h1>This is first div</h1>
                </div>
                <div className="second_div" style={{width: this.state.y + '%'}}>
                    <h1>This is second div</h1>
                </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
