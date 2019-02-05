import React from 'react';
import style from './Header.css';

import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav/sideNav';

const Header = (props) =>{

    const navBars = () =>{
        return(
        <div className={style.bars}>
            <FontAwesome name='bars'
            onClick={props.onOpenNav} 
            style={{
                color:'#dfdfdf',
                padding:"10px",
                cursor:"pointer"
            }}/>            
        </div>
        )
    }

    const logo = () =>{
        return(
            <Link to='/' className={style.logo}>
                <img src="/images/nba_logo.png" alt="sports-logo"/>
            </Link>
        )    
}


    return (
        <header className={style.header}>
        <SideNav {...props}/>
            <div className={style.headerOpt}>
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header;