import React from 'react'
import "./Navigation.css"
import { NavigationObjects } from './NavigationObjects'

function Navigation() {

    return (
        <nav>
            <div className='NavigationMenu'>
                <ul className='NavigationList' style={{width: "fit-content"}}>
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
            </div>
        </nav>
    )
}


export default Navigation