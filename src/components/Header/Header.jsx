import React from 'react'
import style from './Header.module.css'
import Clock from "./Clock/Clock";

export default function Header() {

    return(
        <header className={style.header}>
            <Clock/>
        </header>
    )

}