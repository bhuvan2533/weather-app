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
  "01d":
    "https://cdn1.bbcode0.com/uploads/2021/10/17/c238cf321ca1f12446037e0b22b99cd9-full.png",
  "01n":
    "https://cdn1.bbcode0.com/uploads/2021/10/17/b70152928f0f1353f1b9678b11e4e143-full.png",
  "02d":
    "https://cdn1.bbcode0.com/uploads/2021/10/17/e352028844abdee3c13dbad2539ac9bd-full.png",
  "02n":
    "https://cdn1.bbcode0.com/uploads/2021/10/17/8202e39260f245b90f0675002f3ab0ed-full.png",
  "03d":
    "https://cdn1.bbcode0.com/uploads/2021/10/17/a643cca92e4d37c33ba087b740e1ac68-full.png",
  "03n":
    "https://cdn1.bbcode0.com/uploads/2021/10/17/dfc0e48a0db6301efb2981fb6af7dc82-full.png",
  "04d":
    "https://cdn1.bbcode0.com/uploads/2021/10/17/163e8a5f8a631d5afa9c5c9fe59561d9-full.png",
  "04n":
    "https://cdn1.bbcode0.com/uploads/2021/10/17/c953de8cbf53fb9e22a11f34788b8186-full.png",
  "09d":
    "https://cdn1.bbcode0.com/uploads/2021/10/17/11e1558eea5e773bbc4a1847d34e7949-full.png",
  "09n":
    "https://cdn1.bbcode0.com/uploads/2021/10/17/c7ad021b16230e51e47530077dbb987b-full.png",
  "10d":
    "https://cdn1.bbcode0.com/uploads/2021/10/17/b02235ab434638777a465a4619c7440e-full.png",
  "10n":
    "https://cdn1.bbcode0.com/uploads/2021/10/17/b02235ab434638777a465a4619c7440e-full.png",
  "11d":
    "https://cdn1.bbcode0.com/uploads/2021/10/17/516f19fd49a0ff1bc6656c6b613a3353-full.png",
  "11n":
    "https://cdn1.bbcode0.com/uploads/2021/10/17/6fdadc7ac191e9b0c7854b88a672a340-full.png",
  "50d": "http://openweathermap.org/img/wn/50n@2x.png",
  "50n": "http://openweathermap.org/img/wn/50d@2x.png",
  "01x":
    "https://cdn1.bbcode0.com/uploads/2021/10/17/1a92947adb3e5d3d455862c4038af627-full.png",
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
