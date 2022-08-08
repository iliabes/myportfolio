import axios from 'axios'

export default function getWether(){
     return axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=57.83&units=metric&lon=60.60&lang=ru&exclude=minutely,hourly&appid=2607112734128ccb8b24ee86e9d33c4f')
 }