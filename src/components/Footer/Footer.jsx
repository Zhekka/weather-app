import React from 'react'
import style from './Footer.module.css'
import Clock from "../Header/Clock/Clock";

export default function Footer() {
    return (<div className={style.footer}>
            <a className={style.textPos} href="https://home.openweathermap.org/" target="_blank">Weather API(click here)</a>
            <Clock/>
        </div>
    )
}