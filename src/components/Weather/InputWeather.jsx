import React from 'react'
import style from './InputWeather.module.css'

export default function InputWeather(props) {
    return(<div className={style.formStyle}>
        <form onSubmit={props.weatherMethod}>
            <input className={style.inputStyle} type="text" name="city" placeholder="Введіть місто" autocomplete="off"/>
            <button className={style.buttonStyle}>Пошук</button>
        </form>
    </div>)
}