import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import Zoom from '../containers/zoom';
import '../../src/App.css';
import $ from 'jquery';
// import '../drag_drop/drag_drop.js'

class Homepage extends Component {
  
    constructor(props)
    {
        super(props);
        // this.draggable = this.draggable.bind(this);
    }
    
    // componentDidMount()
    // {
    //     $(document).ready(function() {

    //         $("#draggable").draggable({
    //           revert: true
    //         });
          
    //         $("#draggablenew").draggable({
    //           revert: true
    //         });
            
    //         $("#leftd").droppable({
    //               drop: function (event, ui) {                                                
    //               $(this).html(ui.draggable.text());                                          
    //           }
    //         });
    //       });
    // }

    componentWillReceiveProps(){
        const change = this.props.zoomTabWidth ; 
        if(change){
            var w1=document.getElementById('leftd');
            var w2=document.getElementById('rightd');
            w1.style.width = change.x + '%';
            w2.style.width = change.y + '%';
            }
        }
 
  render() {
    return (
        <div>
            <div id="droppable">Drop here</div>
            <div className="col-lg-8 col-lg-offset-2">
                <div className="col-lg-12 m-t-40">
                    <Zoom />
                    <div className="col-lg-12">
                    <div className="first_div" id="leftd" style={{width: this.props.zoomTabWidth.x + '%'}}>
                        <h1>This is first div</h1>
                    </div>
                    <div className="second_div" id="rightd" style={{width: this.props.zoomTabWidth.y + '%'}}>
                        <h1>This is second div</h1>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    if(state.zoom_Items)
    return {
      zoomTabWidth: state.zoom_Items
    }
  }

  export default connect(mapStateToProps)(Homepage);
