import React from 'react'
import Navigation from './Navigation'
import circle from '../images/bg-pattern-intro.svg'
import Landing from './Landing'
import {ReactComponent as Arrow} from '../images/icon-arrow-light.svg'
import Main from './Main'


const Header = () => {
    return (
       <div>
        <header>
            <Navigation drop={<Arrow />}>
                <DropdownMenu />
            </Navigation>
            <Landing />


        </header>
      </div>   
    )
}

function DropdownMenu() {

    function DropdownItem(props){
        return(
            <a href="#" className="menu-item">
                {props.children}
            </a>
        )
    }

    return (
        <div className="dropdown">
            <DropdownItem> 

            </DropdownItem>
        </div>
    )
}

export default Header
