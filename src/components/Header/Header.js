import React from "react";
import style from "./Header.module.css";
import logo from '../../img/logo.png';
import Nav from '../Nav/Nav';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className={style.header}>
                <div className={style.logo}><img src={logo} /></div>
                <Nav />
            </header>
        )
    }
}
