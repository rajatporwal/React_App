import React, { Component } from 'react';


export default class InsightLibrary extends Component{
     
    render() {
      let self = this, icon_css="icon-css";
          return (
              <div>
                     { self.props.optionData ? self.props.optionData.map(item =><div className="get-tabs"><i className={item.icon}></i><span className="items-alignment">{item.name}</span></div>) : " "}
              </div>
            );
        }
      } 
