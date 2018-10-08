import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getObject,  getLibrary, getWorkspace, getdropDown } from '../../actions';
import '../../style/workSpace.css';
import Switch, { Case, Default } from 'react-switch-case';

import Dropdown from '../../containers/landingpage/Dropdown';
import Objects from '../../containers/landingpage/Objects';
import InsightLibrary from '../../containers/landingpage/InsightLibrary';
import Text from '../../containers/landingpage/Text';
import Icons from '../../containers/landingpage/Icons';
import ThemeManager from '../../containers/landingpage/ThemeManager';
import Marker from '../../containers/landingpage/Marker';

class Homepage extends Component{

  constructor(props) {
  super(props);
                  this.getTabs = this.getTabs.bind(this);
                  this.getTabContents = this.getTabContents.bind(this);
                  this.markerJSON = []
              }
              
              componentDidMount(){
                this.props.getObject();
                this.props.getLibrary();
                this.props.getWorkspace();
                this.props.getdropDown();
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
            const dropDown_Item= this.props.dropDownData ;
        return (
          <body>
            <div className="row">
            <div className="col-md-8 col-md-offset-2"> 
              <div className="container-fluid pad-0">
                <nav className="navbar nav-main">
                  <h2 className="col-white"><i className="fa fa-archive font-30"></i> Create Page <i className="fa fa-close pull-right font-30"></i></h2>
                </nav>
              </div>
              <div className="container-fluid main-div margin-10">
                <center>
                  <h5 className="layout"> Layout Selection > Workspace > Page Rlevance </h5>
                </center>
                <div className="col-md-12 margin-bottom-20">
                    <div className="col-md-3 workspace-div">                  
                      <div className="containe r-fluid col-e4e4 height-53">
                      <h4 className="col-3333 margin-left-25"><i className="fa fa-edit fa-lg col-0026"></i><b> Workspace </b></h4>
                      </div>
                      <div className="col-md-3 icon-bar">
                        <ul className="nav">
                          {this.getTabs()}
                        </ul>
                      </div>
                      <div className="tab-content left-pannel">
                          {this.getTabContents()}
                      </div>
                    </div>
                    <div className="col-md-8 preview-div">   
                      <nav className="navbar navbar-default">
                          <div className="container-fluid pad-0 col-f2f2">
                            <div className="navbar-header col-md-2" >
                              <a className="navbar-brand col-e4e4 small-font " href="#"><b>Preview </b><i className="fa fa-eye col-0026"></i></a> 
                            </div>
                            <div className="col-md-3" >   
                            {dropDown_Item ? (
                            <Dropdown data= {dropDown_Item.dropdown.gsm} />
                              ) : (
                                ""
                              )}
                            </div>
                            <div className="col-md-3">   
                            {dropDown_Item ? (
                            <Dropdown data= {dropDown_Item.dropdown.merchant} />
                              ) : (
                                ""
                              )}
                            </div>
                            <div className="col-md-3">   
                            {dropDown_Item ? (
                            <Dropdown data= {dropDown_Item.dropdown.english} />
                              ) : (
                                ""
                              )}
                            </div> 
                          </div>
                        </nav>
                        <div className="col-md-11 inner-div">
                          <h3 className="col-0026"><b>Click to add headline</b></h3>
                          <hr/>
                          <h5 className="col-0026">Click to add Subtitle</h5>
                          <div className="col-md-12 col-f2f2 margin-top-30">
                            <h6 >Legend: 
                                <i className="fa fa-circle col-34c4 pad-left-15"></i><span className="col-34c4"> Sep 2015 - Nov 2015 </span>
                                <i className="fa fa-circle col-009b pad-left-15"></i><span className="col-009b"> Sep 2016 - Nov 2016 </span>
                                <i className="fa fa-circle col-0026 pad-left-15"></i><span className="col-0026"> Sep 2017 - Nov 2017 </span>
                            </h6>
                          </div>
                          <div className="col-md-8 bck-img"></div>
                          <div className="col-md-12">
                            <div className="col-md-12 col-0026 background-col-002663 margin-top-20">
                              <div className="col-md-7 margin-10">
                              <span className="col-white font-xxsmall">This documnet contains unpublished confidential and proprietary information of American Express.
                                No disclosure or use of any portion may be made without the express written consent of American Express.
                                @2017 American Express. All Rights Reserved.
                              </span>
                              </div>
                              <div className="col-md-4 margin-15">
                              <center>
                              <h7 className="col-white">American Express</h7>
                              </center>
                            </div>
                          </div>
                        </div>
                       </div>
                     </div>
                    <button type="button" className="btn btn-default btn-round-lg btn-lg back-btn" >&nbsp; Back &nbsp;</button>&nbsp;
                    <button type="button" className="btn btn-default btn-round-lg btn-lg next-btn"  >&nbsp; Next &nbsp;</button>&nbsp;
                    &nbsp;<button type="button" className="btn btn-primary btn-round-lg btn-lg save-btn">&nbsp; Save &nbsp;</button>
              </div> 
            </div> 
          </div>
        </div>  
        </body>
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