import React from 'react';
import Router from 'react-router';
import { Link } from 'react-router';
import classNames from "classnames";
import AppStore from '../../../stores/AppStore';
import Translate from '../Translate';

var MenuBar = React.createClass({

  getInitialState: function(){
    return {};
  },

  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },

  componentWillLeave: function() {
    AppStore.removeChangeListener(this._onChange);
  },
  
  hideMenu: function(){
    $('.dashboard-page').toggleClass('push-right');   
  },

  render: function(){
  
    return (
      <div className="side-menu">
        <div className="menu-body">
          <ul className="nav nav-pills nav-stacked sidenav" onClick={() => this.hideMenu()}>
            <li className={classNames({'active': this.state.home})}>
              <Link to="/dashboard/table">
                <span className="glyphicon glyphicon-home"></span>
              </Link>
              <ul className="nested-dropdown animated fadeIn">
                <li className="sidemenu-header"><Link to="/dashboard/table">{Translate.getWord('jixian')}</Link></li>
                <li><Link to="/dashboard/message">{Translate.getWord('message')}</Link></li>
                <li><Link to="/dashboard/physical">{Translate.getWord('physique')}</Link></li>
                <li><Link to="/dashboard/biochemistry">{Translate.getWord('biochemistry')}</Link></li>
                <li><Link to="/dashboard/food">{Translate.getWord('food')}</Link></li>
                <li><Link to="/dashboard/table">{Translate.getWord('athletic')}</Link></li>
                <li><Link to="/dashboard/table">{Translate.getWord('hypertension')}</Link></li>
              </ul>
            </li>
            <li className={classNames({'active': this.state.typography})}>
              <Link to="/dashboard/table">
              <span className="glyphicon glyphicon-text-size"></span>
              </Link>
              <ul className="nested-dropdown animated fadeIn">
                <li className="sidemenu-header"><Link to="/dashboard/table">{Translate.getWord('guocheng')}</Link></li>
                <li><Link to="/dashboard/table">{Translate.getWord('sportme')}</Link></li>
              </ul>
            </li>
            <li className={classNames({'active': this.state.grid})}>
              <Link to="/dashboard/table">
              <span className="glyphicon glyphicon-th-large"></span>
              </Link>
              <ul className="nested-dropdown animated fadeIn">
                <li className="sidemenu-header"><Link to="/dashboard/table">{Translate.getWord('sport')}</Link></li>
                <li><Link to="/dashboard/table">{Translate.getWord('blood_pressure')}</Link></li>
                <li><Link to="/dashboard/table">{Translate.getWord('shape')}</Link></li>
                <li><Link to="/dashboard/table">{Translate.getWord('athletic_ability')}</Link></li>
              </ul>
            </li>
            
          </ul>
        </div>
      </div>

    );
      
  },

  _onChange: function(){

    this.setState({
      language: AppStore.getLanguage()
    });

  }

});

export default MenuBar;