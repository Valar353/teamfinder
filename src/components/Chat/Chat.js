import React from "react";
import style from "./Chat.module.css";

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.chatOnline = 322;
    }

    render() {
        return (
            <div className={style.chatWrapper}>
                <div className={style.chatTitle}>
                    <p>чат</p>
                    <p className={style.chatOnline}>{this.chatOnline} online</p>
                </div>
                <div className={style.message}>
                    <img className={style.userAvatar} src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/22/22fd4dfad67f90dd0df902314b0c116ba3aec73b_full.jpg'/>
                    <p className={style.userName}>name</p>
                    <div className={style.messageText}>
                        text 1
                    </div>
                </div>
                <div className={style.message}>
                    <img className={style.userAvatar} src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/22/22fd4dfad67f90dd0df902314b0c116ba3aec73b_full.jpg'/>
                    <p className={style.userName}>name</p>
                    <div className={style.messageText}>
                        text 1
                    </div>
                </div>
                <div className={style.message}>
                    <img className={style.userAvatar} src='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/22/22fd4dfad67f90dd0df902314b0c116ba3aec73b_full.jpg'/>
                    <p className={style.userName}>name</p>
                    <div className={style.messageText}>
                        text 1
                    </div>
                </div>
                <form className={style.chatInput}>
                    <input />
                    <button>send</button>
                </form>
            </div>
        )
    }
}
