import React from "react";
import Router, { Link, RouteHandler } from "react-router";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar, OverlayTrigger, 
        Tooltip, DropdownButton, Button, ButtonGroup, Table} from "react-bootstrap";
import $ from "jquery";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Sidebar from '../../common/Sidebar';
import TopNav from '../../common/TopNav';

var HomePage = React.createClass({
    
  componentWillMount: function() {
    this.setState({Height: $(window).height()});
  },

  componentDidMount: function() {

  },

  componentWillUnmount: function(){
    
    $(window).unbind('resize',this.adjustResize);

  },

  getInitialState: function(){
    
    return {};

  },

  contextTypes: {
    router: React.PropTypes.func
  },

  render: function() {

    const { pathname } = this.props.location;
    
    return (
        <div className="dashboard-page">
           
          <TopNav></TopNav>

          <Sidebar></Sidebar>

          <ReactCSSTransitionGroup component="div"
                               transitionName="ng"
                               transitionEnterTimeout={500}
                               transitionLeaveTimeout={300}
          >
            {React.cloneElement(<section id="body-container" className="ui-view">{this.props.children}</section> || <div />, { key: pathname })}
          </ReactCSSTransitionGroup>
          
          
        </div>
    );
  },

  statics: {
    fetchData: function(params) {
      }
  }
  
});

export default HomePage;
