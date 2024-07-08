import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}`
    });
  }

  function search() {
    let apiKey = "03351b3tc2f7fc9oa83ff4ea58bed167";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
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
              className="form_control"
              autoFocus="on" 
              onChange={handleCityChange}
              />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
          </div>
        </div>
      </form>
        < WeatherInfo data={weatherData}/ >
      </div>
  );
  } else {
    search()
    return "loading... "
  }
}
