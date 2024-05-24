import { API } from "../utils/api";

const fetchWeatherData=async(city)=>{
  const API_KEY = "37b981f10e209f814fab9a1054f42201";

    // const url = `https://api.openweathermap.org/data/2.5/weather?q=jodhpur&appid=${API_KEY}`


    try{
        let url =`data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
     if(city){
         const res = await API.get(url)
        console.log("from fetchWeather.js....",res.data)
        return res.data
        // console.log("from fetchWeather.js....",res.data.weather)
        // return res.data.weather
      
     }
       
    }
    catch(e){
        console.log(e.message)
    }
   
}
export {fetchWeatherData}