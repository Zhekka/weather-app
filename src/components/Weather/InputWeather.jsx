import React from 'react'

export default function InputWeather(props) {
    return(<div>
        <form onSubmit={props.weatherMethod}>
            <input type="text" name="city" placeholder="Город"/>
            <button>Получить погоду</button>
        </form>
    </div>)
}