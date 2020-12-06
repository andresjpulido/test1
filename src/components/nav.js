import React, { Component, Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
export default class Nav extends Component { 

  
  render() {

    const navItems = this.props.menu.map(item =>
      <div className="item" title={item.label} key={"div_" + item.id.toString()}>
        <div className="item-text">
          <a href={item.ref} id={item.id.toString()} className={item.isActive ? "active" : ""} onClick={(e) => {
            this.props.handler(e, item.id)
          }}>
            <FontAwesomeIcon
              className="icon"
              icon={[item.iconFamily, item.icon]}
              key={item.id} />
          </a>
        </div>
      </div>
    );

    const menuItems = this.props.menu.map(item =>
      <div className={item.isActive ? "item-menu-active" : "item-menu"} title={item.label} key={"div2_" + item.id.toString()}>
        <div className="item-menu-text">
          <a href={item.ref} id={item.id.toString()} title={item.ref} className={item.isActive ? "active" : ""} onClick={(e) => {
            this.props.handler(e, item.id)
          }}>{item.label}</a>
        </div>
      </div>
    );

    return <Fragment>

      <nav>
      
        <div id="navItems">
          <div className="item icons">
            <img id="icon" src="favicon.ico" />
          </div>
          {navItems}
        </div>
        <div id="menuItems">
          <div className="menu">
            {menuItems}
          </div>

        </div>
      </nav>

    </Fragment>
  }
}