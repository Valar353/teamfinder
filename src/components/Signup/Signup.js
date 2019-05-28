import React from "react";
import style from "./Signup.module.css";

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href='' className={style.loginButton}>
                войти через
            </a>
        )
    }
}
