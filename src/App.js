// <!-- Author : Bhuvan S,
// Deployed on : Netlify on 18oct/2021, -->

import React, { useState, useEffect } from "react";
import Weather from "./components/Weather";
import axios from "axios";

const App = () => {
  let sunRise;
  const date = new Date();
  const time = date.getHours();
  if (time < 18 && time > 6) {
    sunRise = true;
  } else if (time > 18 && time < 6) {
    sunRise = false;
  }
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState([]);

  const [mainData, setMainData] = useState({
    main: "",
    sys: "",
    weather: "",
    wind: "",
  });

  console.log(mainData.main.temp);
  const fetchApi = async () => {
    try {
      const data = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=533e480119cec6158ac1f37bff37a8b7&units=metric`
      );
      setWeatherData(data.data);
      setMainData({
        main: data.data.main,
        sys: data.data.sys,
        weather: data.data.weather[0],
        wind: data.data.wind,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [city]);

  return (
    <div>
      <div className="inputField">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input
          type="text"
          className={sunRise ? "darkMode" : "lightMode"}
          placeholder="Enter City Name"
          onChange={(event) => {
            setCity(event.target.value);
          }}
          value={city}
        />
        <i className="fas fa-arrow-right"></i>
      </div>

      <Weather
        sunRiseStatus={sunRise}
        weatherData={weatherData}
        mainData={mainData}
        city={city}
      />
    </div>
  );
};

export default App;
