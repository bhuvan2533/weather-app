// http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=533e480119cec6158ac1f37bff37a8b7&units=metric
// <!-- Author : Bhuvan S,
// Deployed on : Netlify on 18oct/2021, -->
import React, { useState } from "react";
// import Input from "./Input";
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

import c01d from "../Images/01d.png";
import c01n from "../Images/01n.png";
import c02d from "../Images/02d.png";
import c02n from "../Images/02n.png";
import c03d from "../Images/03d.png";
import c03n from "../Images/03n.png";
import c04d from "../Images/04d.png";
import c04n from "../Images/04n.png";
import c09d from "../Images/09d.png";
import c09n from "../Images/09n.png";
import c10d from "../Images/10d.png";
import c10n from "../Images/10d.png";
import c11d from "../Images/11d.png";
import c11n from "../Images/11n.png";
import c50d from "../Images/50d.png";
import c50n from "../Images/50n.png";
import unknown from "../Images/unknown.png";

import humidity from "../Images/humidity.svg";
import sunrise from "../Images/sunrise.svg";
import pressure from "../Images/pressure.svg";
import wind from "../Images/wind.svg";

export const weatherBackground = {
  Clear: Clear,
  Haze: Haze,
  Clouds: Clouds,
  Drizzle: Drizzle,
  Mist: Mist,
  Rain: Rain,
  Smoke: Smoke,
  Thunderstorm: Thunderstorm,
};
// importing icons
export const weatherIcons = {
  "01d":c01d,
  "01n":c01n,
  "02d":c02d,
  "02n":c02n,
  "03d":c03d,
  "03n":c03n,
  "04d":c04d,
  "04n":c04n,
  "09d":c09d,
  "09n":c09n,
  "10d":c10d,
  "10n":c10n,
  "11d":c11d,
  "11n":c11n,
  "50d":c50d,
  "50n":c50n,
  "01x":unknown
};
const Weather = ({ sunRiseStatus, weatherData, mainData, city, logo }) => {
  const date = new Date();
  const todaysDate = date.toLocaleDateString();
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <section>
      <video
        src={
          !city
            ? sunRiseStatus
              ? DayTime
              : NightTime
            : weatherBackground[mainData.weather.main]
        }
        className="video"
        autoplay="true"
        loop="true"
        muted
      ></video>
      {city ? (
        <div className="container">
          <p className="date">Updated on: {todaysDate}</p>
          <div className="centerText">
            <h1 className="temp">
              {mainData.main.temp}
              <small>
                <sup> 0</sup>
              </small>
              C
            </h1>
            <h2>
              {weatherData.name} ,{mainData.sys.country}
            </h2>
            <p className="weatherDesc">{mainData.weather.description}</p>
          </div>
          <img
            className="weather-logo"
            src={
              mainData.weather.icon
                ? weatherIcons[mainData.weather.icon]
                : weatherIcons["01x"]
            }
            alt=""
          />

          <div className="weather_more">
            <div className="block-1">
              <div className="weather__data">
                <img
                  className="weather__data__pic  sunrise "
                  src={sunrise}
                  alt="Sunrise"
                />
                <div className="wrapper">
                  <p className="weather__data__info">
                    {sunRiseStatus
                      ? getTime(mainData.sys.sunset)
                      : getTime(mainData.sys.sunrise)}
                  </p>
                  <p className="weather__data__name">
                    {sunRiseStatus ? "Sunset" : "Sunrise"}
                  </p>
                </div>
              </div>
              <div className="weather__data">
                <img
                  className="weather__data__pic wind"
                  src={wind}
                  alt="Wind"
                />
                <div className="wrapper">
                  <p className="weather__data__info">{mainData.wind.speed}</p>
                  <p className="weather__data__name">
                    Wind &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
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
                  <p className="weather__data__info">
                    {mainData.main.humidity}
                  </p>
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
                  <p className="weather__data__info">
                    {mainData.main.pressure}
                  </p>
                  <p className="weather__data__name">Pressure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="noCity">
          <h3 style={{ color: sunRiseStatus ? "black" : "white" }}>
            Enter a valid city name{" "}
          </h3>
        </div>
      )}
    </section>
  );
};
export default Weather;
