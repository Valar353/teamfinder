import React from "react";
import style from "./Content.module.css";
import FastSearch from '../FastSearch/FastSearch';
import Chat from '../Chat/Chat';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={style.mainContent}>
                <FastSearch />
                <Chat />
            </div>
        )
    }
}
