import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';
import { getObject,  getLibrary, getWorkspace, getdropDown } from '../../actions';
import '../../style/index.css';
import Switch, { Case, Default } from 'react-switch-case';
import Dropdown from '../../containers/landingpage/Dropdown';
import Objects from '../../containers/landingpage/Objects';
import InsightLibrary from '../../containers/landingpage/InsightLibrary';
import Text from '../../containers/landingpage/Text';
import Icons from '../../containers/landingpage/Icons';
import ThemeManager from '../../containers/landingpage/ThemeManager';
import Marker from '../../containers/landingpage/Marker';
import Highcharts from 'highcharts';
import axios from 'axios';

class Homepage extends Component{

  constructor(props) {
    super(props);
    this.state = { 
      type : "" ,
      stackdata : {},
      bardata : {},
      piedata : {},
      donutdata: {}
    };
    this.graphType = {"bar":"bardata","stack":"stackdata","pie":"piedata","donut":"donutdata"};
    this.graphValues = { 
                          "bar" : {
                                    "Populations":{
                                        "series":   [{
                                                            "name": "Population",
                                                            "type": "column",
                                                            "data": [1, 10, 50, 70, 90, 100, 110, 130, 150, 170, 190, 200],
                                                            "tooltip": {
                                                                "valueSuffix": " K"
                                                            }
                                                        }],
                                       "yAxis":  {
                                                        "min": 0,
                                                        "title": {
                                                            "text": "Population (K)"
                                                        }
                                                    },
                                        "title": {
                                                        "text": "Average Population"
                                                    }
                                    },
                                    "Spends":{
                                        "series":   [{
                                            "name": "Rainfall",
                                            "type": "column",
                                            "data": [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                                            "tooltip": {
                                                "valueSuffix": " $"
                                            }
                                        }],
                                       "yAxis":  {
                                                    "min": 0,
                                                    "title": {
                                                    "text": "Spends ($)"
                                                        }
                                                    },
                                        "title": {
                                                    "text": "Average Spends"
                                                 }
                                    },
                                    "Rainfall":{
                                        "series":   [{
                                            "name": "Rainfall",
                                            "type": "column",
                                            "data": [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                                            "tooltip": {
                                                "valueSuffix": " mm"
                                            }
                                        }],
                                       "yAxis":  {
                                                    "min": 0,
                                                    "title": {
                                                    "text": "Rainfall (mm)"
                                                    }
                                                    },
                                        "title": {
                                                "text": "Average Rainfall"
                                                 }
                                    },
                                    "xAxis":  {
                                        "Country":{
                                            "categories": [
                                                "India",
                                                "USA",
                                                "Australia",
                                                "Afganistan",
                                                "Bangladesh",
                                                "Canada",
                                                "France",
                                                "Japan",
                                                "China",
                                                "Bhutan",
                                                "United Kingdom",
                                                "Russia"
                                            ],
                                            "crosshair": true
                                        },
                                        "Month":{
                                            "categories": [
                                                "Jan",
                                                "Feb",
                                                "Mar",
                                                "Apr",
                                                "May",
                                                "Jun",
                                                "Jul",
                                                "Aug",
                                                "Sep",
                                                "Oct",
                                                "Nov",
                                                "Dec"
                                            ],
                                            "crosshair": true
                                        },
                                        "Year":{
                                            "categories": [
                                                "2001",
                                                "2002",
                                                "2003",
                                                "2004",
                                                "2005",
                                                "2006",
                                                "2007",
                                                "2008",
                                                "2009",
                                                "2010",
                                                "2011",
                                                "2012"
                                            ],
                                            "crosshair": true
                                        }
                                    }
                           },

                        "stack" : {
                            "Populations":{
                                "series":   [{
                                            "name": "Bhutan",
                                            "data": [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 39.3, 41.4, 47.0]
                                    
                                        }, {
                                            "name": "India",
                                            "data": [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 93.4, 106.0, 84.5]
                                    
                                        }, {
                                            "name": "London",
                                            "data": [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.3, 41.4, 47.0]
                                                                                
                                        }, {
                                            "name": "Berlin",
                                            "data": [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 39.7, 52.6, 75.5]
                                    
                                        }],
                                "tooltip":"",
                                "plotOptions": {
                                            "series": {
                                                "stacking": "normal",
                                                "legend": false
                                            }
                                },
                               "yAxis":  {
                                        "min": 0,
                                        "title": {
                                            "text": "Population (k)"
                                        }
                                            },
                                "title": {
                                    "text": "Average Population"
                                            }
                            },
                            "Spends":{
                                "series":   [{
                                            "name": "Bhutam",
                                            "data": [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 129.2, 144.0, 39.3]
                                        }, {
                                            "name": "India",
                                            "data": [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 48.9, 38.8, 39.3]
                                    
                                        }, {
                                            "name": "London",
                                            "data": [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 57.4, 60.4, 39.3]
                                    
                                        }, {
                                            "name": "Berlin",
                                            "data": [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 106.0, 84.5, 39.3]
                                    
                                        }],
                            "tooltip":"",
                            "plotOptions": {
                                            "series": {
                                                "stacking": "normal",
                                                "legend": false
                                            }
                            },        
                               "yAxis":  {
                                        "min": 0,
                                        "title": {
                                            "text": "Spends ($)"
                                        }
                                            },
                                "title": {
                                    "text": "Average Spends"
                                            }
                            },
                            "Rainfall":{
                                "series":   [{
                                            "name": "UK",
                                            "data": [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 83.6, 78.8, 98.5]
                                        }, {
                                            "name": "India",
                                            "data": [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 176.0, 135.6, 148.5]
                                        }, {
                                            "name": "London",
                                            "data": [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 57.4, 60.4, 47.6]
                                        }, {
                                            "name": "Berlin",
                                            "data": [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 71.5, 106.4]
                                        }],
                            "tooltip":"",
                            "plotOptions": {
                                            "series": {
                                                "stacking": "normal",
                                                "legend": false
                                            }
                            },  
                               "yAxis":  {
                                        "min": 0,
                                        "title": {
                                            "text": "Rainfall (mm)"
                                        }
                                            },
                                "title": {
                                    "text": "Average Rainfall"
                                            }
                            },
                            "xAxis":  {
                                "Country":{
                                    "categories": [
                                        "India",
                                        "USA",
                                        "Australia",
                                        "Afganistan",
                                        "Bangladesh",
                                        "Canada",
                                        "France",
                                        "Japan",
                                        "China",
                                        "Bhutan",
                                        "London",
                                        "England"
                                    ]
                                },
                                "Month":{
                                    "categories": [
                                        "Jan",
                                        "Feb",
                                        "Mar",
                                        "Apr",
                                        "May",
                                        "Jun",
                                        "Jul",
                                        "Aug",
                                        "Sep",
                                        "Oct",
                                        "Nov",
                                        "Dec"
                                    ]
                                },
                                "Year":{
                                    "categories": [
                                        "2001",
                                        "2002",
                                        "2003",
                                        "2004",
                                        "2005",
                                        "2006",
                                        "2007",
                                        "2008",
                                        "2009",
                                        "2010",
                                        "2011",
                                        "2012"
                                    ]
                                }
                            }
                        },

                        "pie" : 
                                { 
                            "Populations":{
                                "series":   [{
                                    "name": "Brands",
                                    "colorByPoint": true,
                                    "data": [{
                                        "name": "India",
                                        "y": 23.41,
                                        "sliced": true,
                                        "selected": true
                                    }, {
                                        "name": "USA",
                                        "y": 41.84
                                    }, {
                                        "name": "Australia",
                                        "y": 45.85
                                    }, {
                                        "name": "Russia",
                                        "y": 1.67
                                    }, {
                                        "name": "Bhutan",
                                        "y": 41.18
                                    }, {
                                        "name": "China",
                                        "y": 21.64
                                    }, {
                                        "name": "Japan",
                                        "y": 13.6
                                    }, {
                                        "name": "France",
                                        "y": 11.2
                                    }, {
                                        "name": "Other",
                                        "y": 2.61
                                    }]
                                }],"tooltip": {
                                    "pointFormat": "{series.name}: <b>{point.percentage:.1f}k</b>"
                                },
                                "plotOptions": {
                                    "pie": {
                                        "allowPointSelect": true,
                                        "cursor": "pointer",
                                        "dataLabels": {
                                            "enabled": true,
                                            "format": "<b>{point.name}</b>: {point.percentage:.1f} k",
                                            "style": {
                                                "color": "(Highcharts.theme && Highcharts.theme.contrastTextColor) || black"
                                            }
                                        }
                                    }
                                },
                               "yAxis":  "",
                                "title": {
                                    "text": "Browse Market WRT Population"
                                            }
                            },
                            "Spends":{
                                "series":   [{
                                    "name": "Brands",
                                    "colorByPoint": true,
                                    "data": [{
                                        "name": "Chrome",
                                        "y": 1.41,
                                        "sliced": true,
                                        "selected": true
                                    }, {
                                        "name": "Internet Explorer",
                                        "y": 31.84
                                    }, {
                                        "name": "Firefox",
                                        "y": 2.85
                                    }, {
                                        "name": "Edge",
                                        "y": 9.67
                                    }, {
                                        "name": "Safari",
                                        "y": 12.18
                                    }, {
                                        "name": "Sogou Explorer",
                                        "y": 11.64
                                    }, {
                                        "name": "Opera",
                                        "y": 1.6
                                    }, {
                                        "name": "QQ",
                                        "y": 11.2
                                    }, {
                                        "name": "Other",
                                        "y": 5.61
                                    }]
                                }],
                                "tooltip": {
                                    "pointFormat": "{series.name}: <b>{point.percentage:.1f}$</b>"
                                },
                                "plotOptions": {
                                    "pie": {
                                        "allowPointSelect": true,
                                        "cursor": "pointer",
                                        "dataLabels": {
                                            "enabled": true,
                                            "format": "<b>{point.name}</b>: {point.percentage:.1f} $",
                                            "style": {
                                                "color": "(Highcharts.theme && Highcharts.theme.contrastTextColor) || black"
                                            }
                                        }
                                    }
                                },
                               "yAxis":  "",
                                "title": {
                                    "text": "Browse Makrket WRT Spends"
                                            }
                            },
                            "Rainfall":{
                                "series":   [{
                                    "name": "Brands",
                                    "colorByPoint": true,
                                    "data": [{
                                        "name": "Bananas",
                                        "y": 11.41,
                                        "sliced": true,
                                        "selected": true
                                    }, {
                                        "name": "Kiwi",
                                        "y": 31.84
                                    }, {
                                        "name": "Oranges",
                                        "y": 1.85
                                    }, {
                                        "name": "Apples",
                                        "y": 21.67
                                    }, {
                                        "name": "Pears",
                                        "y": 41.18
                                    }, {
                                        "name": "Grapes",
                                        "y": 11.64
                                    }, {
                                        "name": "Reddish",
                                        "y": 1.6
                                    }, {
                                        "name": "Nuts",
                                        "y": 12.2
                                    }, {
                                        "name": "Other",
                                        "y": 2.61
                                    }]
                                }],
                                "tooltip": {
                                    "pointFormat": "{series.name}: <b>{point.percentage:.1f}mm</b>"
                                },
                                "plotOptions": {
                                    "pie": {
                                        "allowPointSelect": true,
                                        "cursor": "pointer",
                                        "dataLabels": {
                                            "enabled": true,
                                            "format": "<b>{point.name}</b>: {point.percentage:.1f} mm",
                                            "style": {
                                                "color": "(Highcharts.theme && Highcharts.theme.contrastTextColor) || black"
                                            }
                                        }
                                    }
                                },
                               "yAxis": "",
                                "title": {
                                    "text": "Browse Market WRT Average Rainfall"
                                            }
                            },
                            "xAxis":  ""
                        },

                        "donut" : {
                            "Populations":{
                                "series":   [{
                                    "name": "Delivered amount",
                                    "data":[
                                        ["India", 3],
                                        ["Afganistan", 6],
                                        ["Canada", 8],
                                        ["Japan", 1],
                                        ["Russia", 8],
                                        ["Bhutan", 4],
                                        ["USA", 1],
                                        ["United Kingdom", 4],
                                        ["Other", 1]
                                    ]
                                }],
                                "tooltip": "",
                                "plotOptions": {
                                    "pie": {
                                        "innerSize": 100,
                                        "depth": 45
                                    }
                                },
                               "yAxis":  "",
                                "title": {
                                             "text": " Fruit delivery WRT Population"
                                         }
                            },
                            "Spends":{
                                "series":   [{
                                    "name": "Delivered amount",
                                    "data": [
                                        ["Bananas", 8],
                                        ["Kiwi", 3],
                                        ["Mixed nuts", 1],
                                        ["Oranges", 6],
                                        ["Apples", 8],
                                        ["Pears", 4],
                                        ["Clementines", 4],
                                        ["Reddish (bag)", 1],
                                        ["Grapes (bunch)", 1]
                                    ]
                                }],
                                "tooltip": "",
                                "plotOptions": {
                                    "pie": {
                                        "innerSize": 100,
                                        "depth": 45
                                    }
                                },
                               "yAxis":  "",
                                "title": {
                                             "text": " Fruit delivery WRT Spends"
                                         }
                            },
                            "Rainfall":{
                                "series":   [{
                                    "name": "Delivered amount",
                                    "data": [
                                        ["Watrermelon", 3],
                                        ["Nuts", 4],
                                        ["Blueberries", 8],
                                        ["Cucumbers", 4],
                                        ["Entawak", 7],
                                        ["Raspberries", 1],
                                        ["Bananas", 3],
                                        ["Strawberries", 8],
                                        ["Peach", 2]
                                    ]
                                }],
                                "tooltip": "",
                                "plotOptions": {
                                    "pie": {
                                        "innerSize": 100,
                                        "depth": 45
                                    }
                                },
                               "yAxis":  "",
                                "title": {
                                             "text": "Fruit delivery WRT Rainfall"
                                         }
                            },
                            "xAxis": ""
                   }
    }
    this.chartObj = {};
    this.getTabs = this.getTabs.bind(this);
    this.getTabContents = this.getTabContents.bind(this);
    this.markerJSON = [];
  }

  onSubmit(e){
    console.log(this.chartObj);
    alert("Chart Saved Successfully");
  }

  onMeasureChange(event) {
    const stateType = this.graphType[this.state.type];
    const chartValues = this.graphValues[this.state.type];
    const measures = event.target.value;
    if(measures!="" && measures!=undefined){
        this.state[this.graphType[this.state.type]].series = chartValues[measures]["series"];
        this.state[this.graphType[this.state.type]].title= chartValues[measures]["title"];      
        this.state[this.graphType[this.state.type]].yAxis=chartValues[measures]["yAxis"];
        this.state[this.graphType[this.state.type]].tooltip=chartValues[measures]["tooltip"];
        this.state[this.graphType[this.state.type]].plotOptions=chartValues[measures]["plotOptions"];
        this.setState({stateType : this.state[this.graphType[this.state.type]]});
    }   
  }       

  onDimentionsChange(event) {
    const xAxis = this.graphValues[this.state.type]["xAxis"];  
    const stateType = this.graphType[this.state.type];
    const dimentions = event.target.value;
    if(dimentions!="" && dimentions!=undefined){
        this.state[this.graphType[this.state.type]].xAxis= xAxis[dimentions];
        this.setState({ stateType : this.state[this.graphType[this.state.type]]});
    }     
  }

  componentDidMount(){
    this.props.getObject();
    this.props.getLibrary();
    this.props.getWorkspace();
    this.props.getdropDown();

    setTimeout(() => {
      window.$(".get-tabs").draggable({
        revert: true
      });
    }, 1000);

    axios.get('stackChart.json')
    .then(res => {
        const stackdata = res.data;
        this.setState({ stackdata });
    });

    axios.get('barChart.json')
    .then(res => {
        const bardata = res.data;
        this.setState({ bardata });
    });

    axios.get('pieChart.json')
    .then(res => {
        const piedata = res.data;
        this.setState({ piedata });
    });

    axios.get('donutChart.json')
    .then(res => {
        const donutdata = res.data;
        this.setState({ donutdata });
    });

  }

  componentDidUpdate() {    

    $(".divhide").show();

    if(this.state.type=='pie' || this.state.type=='donut'){
        $(".divhide").hide();
    }

    if (this.state.type=='pie') {
        this.chartObj =   {
            chart: this.state.piedata.chart,
            title: this.state.piedata.title,
            tooltip: this.state.piedata.tooltip,
            plotOptions: this.state.piedata.plotOptions,
            series: this.state.piedata.series,
            tooltip: this.state.piedata.tooltip,
            plotOptions : this.state.piedata.plotOptions
        };      
    }

    if (this.state.type=='donut') {
        this.chartObj =   {
            chart: this.state.donutdata.chart,
            title: this.state.donutdata.title,
            plotOptions: this.state.donutdata.plotOptions,
            series: this.state.donutdata.series
        };      
    }
    
    if (this.state.type=='stack') {
        this.chartObj =   {
            chart: {
                type: 'bar'
            },
            title: this.state.stackdata.title,
            xAxis: this.state.stackdata.xAxis,
            yAxis: this.state.stackdata.yAxis,
            legend: false,
            series: this.state.stackdata.series,
            plotOptions: this.state.stackdata.plotOptions
        };      
    }

    if (this.state.type=='bar') {
        this.chartObj = {
            chart: {
                zoomType: 'xy'
            },
            title: this.state.bardata.title,
            subtitle: this.state.bardata.subtitle,
            xAxis: this.state.bardata.xAxis,
            yAxis: this.state.bardata.yAxis,
            tooltip: {
                shared: true
            },
            legend: false,
            series: this.state.bardata.series
        };        
    }
    if(this.state.type != "")
      Highcharts.chart('container', this.chartObj);
  }

  getTabs() {
  this.markerJSON = this.props.workSpaceData;
    let optArr =[], count = 0;
    this.markerJSON && this.markerJSON.map(function (option, i) {
        let class_Name = (i == 0) ? 'active' : '';
        let cont = option.type ? '' + option.type : ''; 
        let href = "#" + (cont).replace(/ /g, '');
        optArr.push(<li key={"Tab" + count++} className={class_Name}><a className="icon-color" data-toggle="tab" href={href}><center><i className={option.icon}></i></center>{option.type}</a></li>);
    })
    return optArr;
  } 
      
  getTabContents() {
    let class_Name = "tab-pane fade",tabArr =[] ,count = 0,contId;
    let self = this;
    this.markerJSON && this.markerJSON.map(function (option, i){
    let activeClass = (i == 0) ? class_Name + " in active" : class_Name;   
    contId = (option.type).replace(/ /g, '');
    tabArr.push(<div key={"Tab" + count++} className={activeClass} id={contId}>{
        <Switch condition={contId}>
            <Case value='InsightLibrary'>
                <InsightLibrary optionData={self.props.navTabLibraryData}/>
            </Case>
            <Case value='ThemeManager'>
                <ThemeManager/>
            </Case>
            <Case value='Marker'>
                <Marker/>
            </Case>
            <Case value='Icons'>
                <Icons/>
            </Case>
            <Case value='Text'>
                <Text/>
            </Case>
            <Case value='Object'>
                <Objects optionData={self.props.navTabObjectData}/>
            </Case>
            <Default>
                Nothing!
                <strong>default state</strong>
            </Default>
        </Switch>
    }
    </div>);
  })
  return tabArr;
  } 

  render() {

    var self = this;
    window.$("#droppable").droppable({
      drop: function (event, ui) {
      window.$(".get-tabs").css({"color":"#949494"});    
      window.$(ui.draggable[0]).css({"color":"#002663"});                                                   
      self.type = window.$(ui.draggable[0]).attr("graph-type");   
      self.setState({type : self.type});                              
      }
    });

    const dropDown_Item= this.props.dropDownData ;
        return (
            <div className="row main-container">
            <div className="col-lg-12"> 
                <div className="container-fluid pad-0">
                  <nav className="navbar nav-main">
                    <h2 className="col-white"><i className="fa fa-archive nav-main-font"></i> Create Page <i className="fa fa-close pull-right font-30"></i></h2>
                  </nav>
                </div>
              
              <div className="div-main">
                 <div className="col-md-12">
                    <div className="col-md-2 div-workspace height-61">                  
                      <div className="containe r-fluid div-workspace-container">
                        <h4 className="col-3333 margin-left-25"><i className="fa fa-lg col-0026"></i><b> Workspace </b></h4>
                      </div>
                          <div className="col-md-2 hidden-div icon-bar">
                        <ul className="nav">
                          {this.getTabs()}
                        </ul>
                      </div>
                      <div className="tab-content left-pannel">
                          {this.getTabContents()}
                      </div>
                    </div>
                    <div className="col-md-8">   
                       <div className="col-md-11 div-inner">
                            <div className="col-md-12" id="droppable">
                                <div id="container" className="col-md-12 inner-div-droppable">
                                      <div class="empty-cont-msg">Drag chart here..</div>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary btn-save" onClick={this.onSubmit.bind(this)}>Save</button>
                     </div>
                    
                    <div class="rgt-panel">
                    <div class="rgt-content">
                        <div>
                        <span class="rgt-heading">Measures</span>
                        <div class="radio">
                            <label><input type="radio" name="optSampleJ" value = "Populations" onChange={this.onMeasureChange.bind(this)} />Populations</label>
                        </div>
                        <div class="radio">
                            <label><input type="radio" name="optSampleJ" value = "Spends" onChange={this.onMeasureChange.bind(this)}/>Spends</label>
                        </div>
                        <div class="radio">
                            <label><input type="radio" name="optSampleJ" value = "Rainfall" onChange={this.onMeasureChange.bind(this)}/>Rainfall</label>
                        </div>
                        </div>
                        <hr class="rgt-panel-content-hr"/>
                        <div className="divhide"> 
                        <span class="rgt-heading">Dimentions</span>
                        <div class="radio">
                            <label><input type="radio" name="optSampleJj" value = "Country" onChange={this.onDimentionsChange.bind(this)}/>By Country</label>
                        </div>
                        <div class="radio">
                            <label><input type="radio" name="optSampleJj" value = "Month" onChange={this.onDimentionsChange.bind(this)}/>By Month</label>
                        </div>
                        <div class="radio">
                            <label><input type="radio" name="optSampleJj" value = "Year" onChange={this.onDimentionsChange.bind(this)}/>By Year</label>
                        </div>
                        </div>
                        <hr class="rgt-panel-content-hr"/>
                        <div>
                        <span class="rgt-heading">Sample JSON</span>
                        <div class="radio">
                            <label><input type="radio" name="optSampleJ" />Sample Data 1</label>
                        </div>
                        <div class="radio">
                            <label><input type="radio" name="optSampleJ" />Sample Data 2</label>
                        </div>
					            </div>
                    </div>
                    </div>
                    
                   </div> 
               </div> 
           </div>
        </div>  
        );
      }
    }

    const mapStateToProps = (state, ownProps) => {
        return {
          navTabObjectData: state.object_Items,
          navTabLibraryData: state.insightLibrary_Items,
          workSpaceData: state.workSpace_Items,
          dropDownData: state.dropDown_Items
        }
      }
      
      const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            getWorkspace: () => {
            dispatch(getWorkspace())
          },

          getdropDown: () => {
            dispatch(getdropDown())
          },
      
          getObject: () => {
            dispatch(getObject())
          },
      
          getLibrary: () => {
            dispatch(getLibrary())
          }
        }
      }
      
      const workSpace = connect(
        mapStateToProps,
        mapDispatchToProps
      )(Homepage)


export default workSpace;