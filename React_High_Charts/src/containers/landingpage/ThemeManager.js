import React, { Component } from 'react';

export default class ThemeManager extends Component{

    constructor(props) {
        super(props);
        this.markerJSON = [
            
            {
              "localeList": [
                {
                  "name": "Fri",
                  "id": "DOW_FRI",
                },
                {
                  "name": "Mon",
                  "id": "DOW_MON",
                }
              ]
                },

           ]
    }

    render() {
        let className = "tab-pane fade",tabArr =[] ,count = 0;
        this.markerJSON && this.markerJSON.map(function (option, i){
            let activeClass = (i == 0) ? className + " in active" : className;   
            let localeList = option.localeList;
            let test = [];
            localeList.map(function (option, i){
                test.push(
                <div>
                    {option.id}{option.name}
                </div>
                )
             })
            tabArr.push(<div key={"Tab" + count++} className={activeClass}>{test}</div>);
        })
            return  <div>{tabArr}</div>;
        }

}
