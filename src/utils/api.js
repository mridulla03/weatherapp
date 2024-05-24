import axios from 'axios'
// const Base_URL='https://api.openweathermap.org/data/2.5/weather?q=jodhpur&appid=37b981f10e209f814fab9a1054f42201'
const Base_URL='https://api.openweathermap.org/'


const API =  axios.create({
    baseURL:Base_URL
})
export {API}