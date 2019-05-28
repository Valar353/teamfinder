import React from "react";
import style from "./Nav.module.css";
import Signup from '../Signup/Signup';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.navbar}>
                <div>Главная</div>
                <div>Главная</div>
                <div>Главная</div>
                <Signup/>
            </div>
        )
    }
}
