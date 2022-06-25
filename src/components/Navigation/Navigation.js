import React from 'react'
import "./Navigation.css"
import { NavigationObjects } from './NavigationObjects'

function Navigation() {

    return (
        <nav className='Navigation'>
            <ul className='NavigationList'>
                {NavigationObjects.map((singleNavObject, key) => {
                    return(
                        <div key={key}>
                            <li 
                            key={singleNavObject.title}
                            className="NavObject">
                                <div id="NavComponentIcon">{singleNavObject.icon}</div>
                                <div id="NavComponentTitle">{singleNavObject.title}</div>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </nav>
    )
}


export default Navigation