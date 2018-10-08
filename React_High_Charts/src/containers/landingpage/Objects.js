import React, { Component } from 'react';

export default class Objects extends Component{
     
      render() {
        let self = this;
            return (
                <div>
                       { self.props.optionData ? self.props.optionData.map(item =><div className="get-tabs"><i className={item.icon + ""}></i><span className="items-alignment">{item.name}</span></div>) : " "}
                </div>
              );
          }
        } 

      
