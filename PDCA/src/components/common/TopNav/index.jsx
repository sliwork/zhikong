import React from 'react';
import Router from 'react-router';
import { Link } from 'react-router';
import {NavDropdown, MenuItem, Table, Button} from 'react-bootstrap';
import $ from 'jquery';
import AppActions from '../../../actions/AppActions';
import AppStore from '../../../stores/AppStore';
import Translate from '../Translate';

var TopNav = React.createClass({

  getInitialState: function(){
    
    return {
      rtlClass: true
    };

  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  componentWillLeave: function() {
    AppStore.removeChangeListener(this._onChange);
  },

  render: function(){
    return ( <nav className="navbar topnav-navbar navbar-fixed-top" role="navigation">

              <div className="navbar-header text-center">
                <button type="button" className="navbar-toggle" onClick={this.showMenu} >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                <a className="navbar-brand" ui-sref="home">PDCA调查系统</a>
              </div>
              <div className="collapse navbar-collapse">
                <form className="navbar-form navbar-left" role="search">
                  <span className="glyphicon glyphicon-search"></span>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="" />
                  </div>      
                </form>
                <ul className="nav navbar-nav">
                  
                </ul>

                <ul className="nav navbar-nav pull-right navbar-right"> 
        
              {/*}      <NavDropdown eventKey={3} 
                      title={<span>
                        <i className="fa fa-circle"></i>
                        </span>
                      }
                      noCaret className="dropdown color-picker"
                    >
                      
                        <Table bordered className="table color-swatches-table text-center no-m-b">
                          <tbody>
                            <tr>
                              <td className="text-center colorr">
                                  <a href="javascript:;" onClick={() => this.changeTheme('blue')} className="theme-picker">
                                      <i className="fa fa-circle blue-base"></i>
                                  </a>
                              </td>
                              <td className="text-center colorr">
                                  <a href="javascript:;" onClick={this.changeTheme('green')} className="theme-picker">
                                      <i className="fa fa-circle green-base"></i>
                                  </a>
                              </td>
                              <td className="text-center colorr">
                                  <a href="javascript:;" ng-click="changeTheme('red')" className="theme-picker">
                                      <i className="fa fa-circle red-base"></i>
                                  </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center colorr">
                                  <a href="javascript:;" ng-click="changeTheme('purple')" className="theme-picker">
                                      <i className="fa fa-circle purple-base"></i>
                                  </a>
                              </td>
                              <td className="text-center colorr">
                                  <a href="javascript:;" ng-click="changeTheme('midnight-blue')" className="theme-picker">
                                      <i className="fa fa-circle midnight-blue-base"></i>
                                  </a>
                              </td>
                              <td className="text-center colorr">
                                  <a href="javascript:;" ng-click="changeTheme('lynch')" className="theme-picker">
                                      <i className="fa fa-circle lynch-base"></i>
                                  </a>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      
                    </NavDropdown> */}
                  
                  <li>
                    <a href="javascript:;" onClick={this.rightToLeft} >
                      <span> 菜单栏：左/右 </span>
                    </a>
                  </li> 
                  
                  <NavDropdown eventKey={4} title={<span>
                    <img src={require("../../../common/images/flat-avatar.png")} className="topnav-img" alt="" />
                    <span className="hidden-sm">admin</span>
                    </span>} noCaret className="dropdown admin-dropdown"
                  >
                      
                      <li><Link to="/login">{Translate.getWord('logout')}</Link></li>
                  </NavDropdown>
                  
                </ul>
                
              
              </div>

              <ul className="nav navbar-nav pull-right hidd"> 
                <NavDropdown eventKey={4} title={<span>
                    <img src={require("../../../common/images/flat-avatar.png")} className="topnav-img" alt="" />
                    </span>} noCaret className="dropdown admin-dropdown"
                  >
                    <li><Link to="/dashboard/profile">{Translate.getWord('profilee')}</Link></li>
                    <li><Link to="/login">{Translate.getWord('logout')}</Link></li>
                </NavDropdown>
              </ul>
            </nav>


    );
  },

  changeTheme: function(setTheme){

    $('<link>')
      .appendTo('head')
      .attr({type : 'text/css', rel : 'stylesheet/less'})
      .attr('href', '/app/src/common/styles/app-'+setTheme+'.less?v='+window.app_version);

    // console.log("inside change themes");
    // var styleObj = require('file!../../../common/styles/base.less');
    // console.log("styles", styleObj);
    // var style = require("style/useable!less!../../../common/styles/app-red.useable.less");
    // style.use();
    // console.log("style successful");
  },

  _onChange: function() {
    this.setState({language: AppStore.getLanguage()});
  },

  changeLanguage: function(e){
    AppActions.setLanguage(e.target.name);
  },

  rightToLeft: function(){
    this.setState({'rtlClass': !this.state.rtlClass});
    if(this.state.rtlClass){
      $('body').addClass('rtl');
    }
    else{
      $('body').removeClass('rtl');
    }
  },
  showMenu: function(){
   
      $('.dashboard-page').toggleClass('push-right');   
    
  }

});

export default TopNav;