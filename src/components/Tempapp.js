import React, { useState } from 'react';
import './styleApp.css';
import { FaSearch } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Wavify from 'react-wavify';

const Tempapp = () => {

    const [city, setCity] = useState('');

    const [weather, setWeather] = useState();
    const [error, setError] = useState('');

    const API_KEY = "YOUR_API_KEY";

    const apiUri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;


    const handleChange = (e) =>{
        setCity(e.target.value);
        console.log(e.target.value);
    }

    const fetchData = async() =>{
        try {
            let response = await fetch(apiUri);
            let jsonOutput = await response.json();
            if(response.ok){
                setWeather(jsonOutput);
                setError('');
                console.log(jsonOutput);
            } else {
                setError('No data found');
                setWeather(null);
            }
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='container'>
        <div className="cityName">
            <input type="text" value={city} onChange={handleChange} name="" id="" placeholder='Enter City'/>
             <button onClick={fetchData}>
                <FaSearch></FaSearch>
             </button>
        </div>
        {
            error && !weather && <p className="errorMsg">{error}</p>
        }
        {
            weather && weather.weather && 
            <div className="cont">
                 


                <div className="img">
                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                    <h1 className="main">{weather.weather[0].description}</h1>

                </div>
                <div className="temp">
                    <h2>Temp : </h2>
                    <h2>{weather.main.temp}<span>&deg;C</span></h2>
                </div>
                <div className="cityLocation">
                    <div className="location">
                        <MdLocationOn></MdLocationOn>
                    </div>
                    <p>{weather.name},<span>{weather.sys.country}</span></p>
                </div>

                <div className="weather-stats">
                    <div className="temp-min">
                        <h3 className="min-heading">Min Temp</h3>
                        <h3 className="min-value">
                            {weather.main.temp_min} <span>&deg;C</span> 
                        </h3>
                    </div>
                    <div className="temp-max">
                        <h3 className="max-heading">Max Temp</h3>
                        <h3 className="max-value">
                            {weather.main.temp_max}<span>&deg;C</span>
                        </h3>
                    </div>
                </div>
                <Wavify 
                    fill="#40a2e3"
                    options={{
                        height: 20,
                        amplitude: 40,
                        speed: 0.15,
                        points: 3
                    }}
                    className="waves"
                />
                
            </div>
            
        }
    </div>
  )
}
export default Tempapp;
