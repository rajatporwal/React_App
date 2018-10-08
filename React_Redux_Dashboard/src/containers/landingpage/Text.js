import React, { Component } from 'react';

export default class Text extends Component{

    constructor(props) {
        super(props);
        this.markerJSON = [
            
            {
                "localeList": [
                    {
                      "name": "Minimum: Spend: Pi",
                      "id": "CTRY_INDIA",
                    },
                    {
                      "name": "Minimum: Spend: Pi",
                      "id": "CTRY_INDIA",
                    }
                  ],
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
                    {option.name}{option.id}
                </div>
                )
             })
            tabArr.push(<div key={"Tab" + count++} className={activeClass}>{test}</div>);
        })
            return  <div>{tabArr}</div>;
        }

}
