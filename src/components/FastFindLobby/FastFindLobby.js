import React from "react";
// import style from "./FastSearch.module.css";

// import dotaLogo from '../../img/gameLogo/dota2.png';


export default class FastSearchForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.fastFindLobby}>
                <label>trade URL:</label>
                <input type='text' name="tradeLink" placeholder={this._tradePlaceholder} defaultValue={this._tradeURL}/>
                <button>применить</button>
                <a href={LINK_TRADE_OFFER} target='_blank'>получить ссылку</a>
            </form>
        )
    }
}
