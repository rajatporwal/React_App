import React, { Component } from 'react';
import '../Zoom_component/index.css';
import Zoom from './zoom';
import App from './';

class Home extends Component {
  
  constructor(props) {
    super(props);
   
    this.state={
      x:50,
      y:50
    };
  }
 
  render() {
    return (
        <div className="col-lg-8 col-lg-offset-2">
            <div className="col-lg-12 m-t-40">
                <Zoom optionData={this.state} onChange={this.onChange}/>
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

export default Home;
