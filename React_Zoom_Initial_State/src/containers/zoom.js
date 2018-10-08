import React, { Component } from 'react';
import {selectZoomData} from '../actions/index';
import { connect } from 'react-redux';

class Zoom extends Component {
  
  constructor(props) {
    super(props);
   
    this.increaseWidth = this.increaseWidth.bind(this);
    this.decreaseWidth = this.decreaseWidth.bind(this);
  }
 
  increaseWidth(){
    if(this.props.zoomTabObject.x != 75){
      const x = this.props.zoomTabObject.x + 25
      const y = this.props.zoomTabObject.y - 25
      this.props.selectZoomData({x,y})
  }
}
  
  decreaseWidth(){
    if(this.props.zoomTabObject.x != 25){
    const x = this.props.zoomTabObject.x - 25
    const y = this.props.zoomTabObject.y + 25
    this.props.selectZoomData({x,y})
  }
 }

  render() {
    return (
                <div className="col-lg-12">
                      <div className="">
                            <input className="float-l m-1" type="button" value ="-" onClick={(e) => this.decreaseWidth()}/> <p className="float-l m-1" id="left-div">{this.props.zoomTabObject.x + '%'}</p> 
                            <input className="float-l m-1" type="button" value ="+" onClick={(e) => this.increaseWidth()}/>
                      </div>
                </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if(state.zoom_Items)
  return {
    zoomTabObject: state.zoom_Items
  }
}

export default connect(
  mapStateToProps, {selectZoomData}
)(Zoom);
