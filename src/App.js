import React, { useState, useEffect } from "react";
import Weather from "./components/Weather";
// import Input from "./components/Input.jsx";

import Clear from "../src/videos/Clear.mp4";
import Clouds from "../src/videos/Clouds.mp4";
import DayTime from "../src/videos/DayTime.mp4";
import Drizzle from "../src/videos/Drizzle.mp4";
import Haze from "../src/videos/Haze.mp4";
import Mist from "../src/videos/Mist.mp4";
import NightTime from "../src/videos/NightTime.mp4";
import Rain from "../src/videos/Rain.mp4";
import Smoke from "../src/videos/Smoke.mp4";
import Thunderstorm from "../src/videos/Thunderstorm.mp4";

// importing icons
import code01d from "../src/Images/01d.png";

const App = () => {
  let sunRise;
  const date = new Date();
  const time = date.getHours();
  if (time < 18 && time > 6) {
    sunRise = true;
  } else if (time > 18 && time < 6) {
    sunRise = false;
  }
  const [inputValue, getinputValue] = useState();
  const [click, setClick] = useState();
  const [weatherData, setWeatherData] = useState([{}]);

  
  function keydownEvent(event) {
    if (event.key === "Enter") {
      setClick(inputValue);
    }
  }
  
  function onClickingArrow() {
    setClick(inputValue);
  }
  
  
  
  // Fetching the data from our weather server and sending those values as props
  // http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=533e480119cec6158ac1f37bff37a8b7&units=metric
  let cityName = click;
  let myAPI = "533e480119cec6158ac1f37bff37a8b7";

  useEffect(() => {
    async function weatherDetails(e){
      e.preventDefault();
      const res=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myAPI}&units=metric`);
      const data=await res.json();
      setWeatherData(data);
    };
    weatherDetails();
  }, []);
  
  console.log(weatherData);
  const {main}=weatherData;
  const {temp,pressure,humidity}=main;
  // console.log(name);




  
  return (
    <div>
      {/* <Input inputStyle={sunRise ? "darkMode" : "lightMode"} /> */}
      <div className="inputField">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input
          type="text"
          className={sunRise ? "darkMode" : "lightMode"}
          placeholder="Enter City Name"
          onChange={(event)=>{
            getinputValue(event.target.value);
          }}
          // onKeyDown={keydownEvent}
          value={inputValue}
        />
        <i className="fas fa-arrow-right" onClick={onClickingArrow}></i>
      </div>
      <Weather logo={code01d} sunRiseStatus={sunRise} city={weatherData.name}  />
    </div>
  );
};

export default App;
