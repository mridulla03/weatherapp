import { useEffect, useState } from "react";
import "../components/style.css";
import { FaSearch } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { TbReload } from "react-icons/tb";

import { FaLocationDot } from "react-icons/fa6";
import { fetchWeatherData } from "../service/fetchWeather";

function Weather() {
  const [city, setCity] = useState("Jodhpur");
  const [weather, setWeather] = useState();
  const[loading,setLoading]=useState(false)
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`.......basic
  // const url='https://api.openweathermap.org/data/2.5/weather?q=jodhpur&appid=37b981f10e209f814fab9a1054f42201'.....for jodhpur with weatherApp api key
  //
useEffect(()=>{
  setLoading(true)
  fetchWeatherData(city).then((res)=>{
    const details=res
    console.log(res)
      setWeather(details)
      setLoading(false)


    
  })
},[])
if(loading){
  return <span className="loading"><TbReload /></span>
}
  return (
    <>
   
      <div className="container">
        <div className="city">
          <input
            type="text"
            value={city}
            placeholder="Enter city name here"
            onChange={(e) => {
              console.log(e.target.value);
              setCity(e.target.value);
            }}
          />
          <button
            onClick={() => {
              fetchWeatherData(city);
              console.log("button clicked");
              fetchWeatherData(city).then((res) => {
                const details = res;
                setWeather(details);
              });
            }}
          >
            <FaSearch />
          </button>
        </div>
        <div>
        </div>
        
        {weather ? (
          <>
            <div className="description">
              <div className="descIcon">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt=""
                />
              </div>
              <div className="descData">{weather.weather[0].main}</div>
            </div>
            <div className="temp">{weather.main.temp}&deg;C</div>
            <div className="location">
              <div className="locIcon">
                <FaLocationDot />
              </div>
              <div className="locData">
                {weather.name},{weather.sys.country}
              </div>
            </div>
            <div className="lastCards">
              <div className="windSpeed">
                <div className="windIcon">
                  <FaWind />
                </div>
                <div className="windData">{weather.wind.speed}km/h</div>
                <div className="wind">WIND SPEED</div>
              </div>
              <div className="humidity">
                <div className="humiIcon">
                  <WiHumidity />
                </div>
                <div className="humiData">{weather.main.humidity}%</div>
                <div className="humi">HUMIDITY</div>
              </div>
            </div>
          </>
        ):
        <div className="errMsg">No data found in our directory. Please enter valid city name</div>
        }
        
      </div>
    </>
  );
}
export default Weather;
