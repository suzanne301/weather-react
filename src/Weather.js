import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from"./WeatherForecast";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

 function search() {
   let apiKey = "ad793a6d772939c31783de5822791acf";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
 }


  if (weatherData.ready) {
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input 
              type="search" 
              placeholder="Enter a city ..."
              className="form-control "
              autoFocus="on" 
              onChange={handleCityChange}
              />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
          </div>
        </div>
      </form>
        < WeatherInfo 
          data={weatherData} 
        />
        <WeatherForecast />
      </div>
  );
  } else {
    search()
    return "loading... "
  }
}
