import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

/* Создать функцию SetActive с параметром isActive, которая будет вызываться в ссылках. Она отвечает за активные ссылки */
const SetActive = ({isActive}) => {
    return isActive ? s.activeLink : s.item
}

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={SetActive} >Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" className={SetActive}>Massages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/news"}className={SetActive}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/music"}className={SetActive}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/settings"}className={SetActive}>Settings</NavLink>
            </div>
        </nav>
    );
};
export default Navbar;
