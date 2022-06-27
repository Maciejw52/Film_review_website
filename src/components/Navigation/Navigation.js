import React from 'react'
import "./Navigation.css"
import { NavigationObjects } from './NavigationObjects'
import { useState } from 'react';
import { Link } from "react-router-dom";


function NavigationSidebar() {

  const sidebarCollapsed = localStorage.getItem("sidebar-collapsed");
  const [navIsShown, setNavIsShown] = useState(sidebarCollapsed ? false : true);

  const handleToggle = () => {
    if (navIsShown) {
      setNavIsShown(false);
      localStorage.setItem("sidebar-collapsed", true);
      return;
    }
    setNavIsShown(true);
    localStorage.removeItem("sidebar-collapsed");
  }


  return (
    <nav className={navIsShown ? "NavigationMenu" : "NavigationMenu collapsed"}>
      <ul className='NavigationList'>
        {NavigationObjects.map((singleNavObject, key) => {
          if (singleNavObject.title === "Menu") {
            return (
              <div key={key}>
                <li key={singleNavObject.title} className={"NavObjectHeader"}>
                  <div className="NavComponentIcon" onClick={handleToggle}>{singleNavObject.icon}</div>
                  <span className="NavComponentTitle">{singleNavObject.title}</span>
                </li>
              </div>
            );
          }
          return (
            <div key={key}>
              <Link style={{ textDecoration: 'none' }} to={`${singleNavObject.link}`}>
                <li
                  key={singleNavObject.title}
                  className={"NavObjectItems"}>
                  <div className="NavComponentIcon">{singleNavObject.icon}</div>
                  <span className="NavComponentTitle">{singleNavObject.title}</span>
                </li>
              </Link>
            </div>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavigationSidebar;