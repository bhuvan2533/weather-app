// http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=533e480119cec6158ac1f37bff37a8b7&units=metric

import React,{useState} from "react";
import Input from "./Input";
import Clear from "../videos/Clear.mp4";
import Clouds from "../videos/Clouds.mp4";
import DayTime from "../videos/DayTime.mp4";
import Drizzle from "../videos/Drizzle.mp4";
import Haze from "../videos/Haze.mp4";
import Mist from "../videos/Mist.mp4";
import NightTime from "../videos/NightTime.mp4";
import Rain from "../videos/Rain.mp4";
import Smoke from "../videos/Smoke.mp4";
import Thunderstorm from "../videos/Thunderstorm.mp4";

import humidity from "../Images/humidity.svg";
import sunrise from "../Images/sunrise.svg";
import pressure from "../Images/pressure.svg";
import wind from "../Images/wind.svg";

const Weather = (props) => {
    const date = new Date();
    const todaysDate = date.toLocaleDateString();
  
  return (
    <section>
      <video
        src={props.sunRiseStatus ? DayTime : NightTime}
        className="video"
        // autoplay="true"
        muted
      ></video>
      <div className="container">
        <p className="date">Updated on: {todaysDate}</p>
        <div className="centerText">
          <h1 className="temp">
            {props.temp} <small><sup>0</sup></small>C
          </h1>
          {/* <h2>Mumbai ,IN</h2> */}
          <h2>{props.city}, {props.count}</h2>
          <p>Overcast Clouds</p>
        </div>
        <img className="weather-logo" src={props.logo} alt="" />

        <div className="weather_more">
          <div className="block-1">
            <div className="weather__data">
              <img
                className="weather__data__pic  sunrise "
                src={sunrise}
                alt="Sunrise"
              />
              <div className="wrapper">
                <p className="weather__data__info">6:30</p>
                <p className="weather__data__name">Sunrise</p>
              </div>
            </div>
            <div className="weather__data">
              <img className="weather__data__pic wind" src={wind} alt="Wind" />
              <div className="wrapper">
                <p className="weather__data__info">{props.wind}</p>
                <p className="weather__data__name">Wind &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              </div>
            </div>
          </div>

          <div className="block-2">
            <div className="weather__data">
              <img
                className="weather__data__pic humidity"
                src={humidity}
                alt="Humidity"
              />
              <div className="wrapper">
                <p className="weather__data__info">{props.humidity}</p>
                <p className="weather__data__name">Humidity</p>
              </div>
            </div>
            <div className="weather__data">
              <img
                className="weather__data__pic pressure"
                src={pressure}
                alt="pressure"
              />
              <div className="wrapper">
                <p className="weather__data__info">{props.pressure}</p>
                <p className="weather__data__name">Pressure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Weather;
