import React, {useEffect, useState} from 'react'
import './App.css';
import Header from "./components/Header/Header";
import {useForm} from "react-hook-form";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import Weather from "./components/Weather/Weather";
import InputWeather from "./components/Weather/InputWeather";
import Example from "./components/Example";

// https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=d22fff70cc4eb5eb10003ae85dd67467&units=metric

function App() {
    const API_key = "d22fff70cc4eb5eb10003ae85dd67467";
    const cityN = "Kiev"

    const [weatherState, setWeather] = useState([])
    const [city, setCity] = useState('Moscow')

    let weatherMethod = (e) => {
        e.preventDefault();
        setCity(e.target.elements.city.value)
    }

    console.log(city)


    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
            .then(response => {
                setWeather(response.data)
            })

    }, [city])

    console.log(weatherState)
    console.log(weatherState.name)

    return (
        <div className="app-wrapper">
            <Header/>


            <InputWeather weatherMethod={weatherMethod}/>

            <Weather weatherState={weatherState}/>


            {/*<Footer/>*/}
        </div>
    );
}

export default App;
