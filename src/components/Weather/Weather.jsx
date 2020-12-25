import React from 'react'

export default function Weather(props) {

    //let date = new Date(props.weatherState.sys.sunset * 1000);
    // let hours = date.getHours(); // Minutes part from the timestamp
    // let minutes = "0" + date.getMinutes(); // Seconds part from the timestamp
    //
    //
    // let sunset_date = hours + ':' + minutes.substr(-2);


    return (<div>
        { props.weatherState.name &&
        <div>
            <p>Местоположение: {props.weatherState.name}, {props.weatherState.sys.country}</p>
            <p>Температура: {props.weatherState.main.temp}°C</p>
            <p>Давление: {props.weatherState.main.pressure} hPa</p>
            {/*<p>Заход солнца в: {sunset_date}</p>*/}
        </div>
        }

    </div>)

}
