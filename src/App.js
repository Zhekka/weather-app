import React, {useEffect, useState} from 'react'
import './App.css';
import Header from "./components/Header/Header";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import Weather from "./components/Weather/Weather";
import InputWeather from "./components/Weather/InputWeather";

//API: https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=d22fff70cc4eb5eb10003ae85dd67467&units=metric

function App() {
    const API_key = "d22fff70cc4eb5eb10003ae85dd67467";

    const [weatherState, setWeather] = useState([])
    const [city, setCity] = useState('Kiev')

    let weatherMethod = (e) => {
        e.preventDefault();
        setCity(e.target.elements.city.value)
    }

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
            .then(response => {
                setWeather(response.data)
            })

    }, [city])

    return (
        <div className="app-wrapper">
            <Header/>

            <div className="app-wrapper-content">
            <InputWeather weatherMethod={weatherMethod}/>
            <Weather weatherState={weatherState}/>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
