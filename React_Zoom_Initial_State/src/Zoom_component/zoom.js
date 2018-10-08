import React, { Component } from 'react';

class Zoom extends Component {
  
  constructor(props) {
    super(props);
   
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
                <div className="col-lg-12">
                {console.log(this.props.optionData,'x')}
                      <div className="">
                            <input className="float-l m-1" type="button" value ="-" onClick={(e) => this.decreaseWidth()}/> <p className="float-l m-1" id="left-div">100%</p> 
                            <input className="float-l m-1" type="button" value ="+" onClick={(e) => this.increaseWidth()}/>
                      </div>
                </div>
    );
  }
}

export default Zoom;
