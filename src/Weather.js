import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      date: "Saturday, 12:56",
      iconUrl: "http://shecodes-assests.s3.amazonaws.com/api/weather/icons/scattered-clouds"
    });
  
  }

  if (weatherData.ready) {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input 
              type="search" 
              placeholder="Enter a city ..."
              className="form_control"
              autoFocus="on" 
              />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>{weatherData.date}</li>
        <li className="text-capitalize">{weatherData.description}</li>        
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img 
            src={weatherData.iconUrl}
            alt={weatherData.description} 
            className="float-left"/>
            <div className="float-right">
              <span className="temperature">{Math.round(weatherData.temperature)}</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
  } else {
    let apiKey = "03351b3tc2f7fc9oa83ff4ea58bed167";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading... "
  }
}
