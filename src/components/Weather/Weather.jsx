import React from 'react'
import style from './Weather.module.css'

export default function Weather(props) {
    return (
        <div className={style.weatherStyle}>
        <br></br>
        { props.weatherState.name &&
        <div>
            <p>Місто: {props.weatherState.name}, {props.weatherState.sys.country}</p>
            <p>Температура: {props.weatherState.main.temp.toFixed(1)}°C
                відчувається як: {props.weatherState.main.feels_like.toFixed(1)}°C</p>
            <p>Вологість: {props.weatherState.main.humidity} %</p>
            <p>Атмосферний тиск: {props.weatherState.main.pressure} hPa</p>
            <p>Швидкість вітру: {props.weatherState.wind.speed} м/с</p>
            <p>Видимість: {props.weatherState.visibility} метрів</p>

        </div>
        }

    </div>)

}
