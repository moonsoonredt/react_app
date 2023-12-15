import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = 'dialogs/*' + props.id;

    return <div className={s.dialogs + ' ' + s.dialogs}>
        <NavLink to={path}>props.name</NavLink>
    </div>

}
const Massages = (props) => {
    return <div className={s.dialogs}>{props.massage}</div>
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name="Dimar" id="1"/>
                <DialogsItem name="Dimra" id="2"/>
                <DialogsItem name="Drima" id="3"/>
                <DialogsItem name="Dimat" id="4"/>
            </div>

            <div className={s.messages}>
                <Massages massage="Hri"/>
                <Massages massage="rHi"/>
                <Massages massage="Hpi"/>
            </div>


            );
            };
            export default Dialogs;
