import React, { useState } from "react";
import axios from 'axios';

export default function SearchEngine() {
  let [city, showCity] = useState(null);
  let [temp1, setTemp] = useState(null);
  let [description1, setDescription] = useState(null);
  let [humidity1, setHumidity] = useState(null);
  let [wind1, setWind] = useState(null);
  let [icon1, setIcon] = useState(null);
  let [temp, showTemp] = useState(null);
  let [descripttion, showDescription] = useState(null);
  let [humidity, showHumidity] = useState(null);
  let [wind, showWind] = useState(null);
  let [icon, showIcon] = useState(null);
  function showForecast(response) {
    showTemp(Math.round(response.data.main.temp));
    showDescription(response.data.weather[0].description);
    showHumidity(response.data.main.humidity);
    showWind(response.data.wind.speed);
    showIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c4ad9b60233c41a45662c2acb7b1ef5&units=metric`;
  axios.get(url).then(showForecast);
  function searchCity(event) {
    event.preventDefault();
    setTemp(<li>Temperature: {temp}°C</li>);
    setDescription(<li>Description: {descripttion}</li>);
    setHumidity(<li>Humidity: {humidity}%</li>);
    setWind(<li>Wind: {wind}km/h</li>);
    setIcon(
      <li>
        <img src={icon} alt={icon} />
      </li>
    );
  }
  function submitInfo(event) {
    showCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={searchCity}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={submitInfo}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      <ul>
        {temp1}
        {description1}
        {humidity1}
        {wind1}
        {icon1}
      </ul>
    </div>
  );
}
