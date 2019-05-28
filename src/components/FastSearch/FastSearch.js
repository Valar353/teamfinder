import React from "react";
import style from "./FastSearch.module.css";

import dotaLogo from '../../img/gameLogo/dota2.png';


export default class FastSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.searchContainer}>
                <div className={style.item}>
                    <div className={style.gameLogo}><img src={dotaLogo} alt='doka 2'/></div>
                    <div className={style.lobbyDescription}>description lobby</div>
                    <button className={style.lobbyEnter}>enter</button>
                </div>
                <div className={style.item}>
                    <div className={style.gameLogo}><img src={dotaLogo} alt='doka 2'/></div>
                    <div className={style.lobbyDescription}>description lobby</div>
                    <button className={style.lobbyEnter}>enter</button>
                </div>
                <div className={style.item}>
                    <div className={style.gameLogo}><img src={dotaLogo} alt='doka 2'/></div>
                    <div className={style.lobbyDescription}>description lobby</div>
                    <button className={style.lobbyEnter}>enter</button>
                </div>
            </div>
        )
    }
}
