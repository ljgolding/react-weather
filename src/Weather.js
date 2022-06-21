import React from "react"
export default function Weather(props){


function handleResponse(response){
alert(`The Eather in New York is ${response.data.main.temp}°C`);}

let apiKey = "f3dfa8d7baf16dece455736a2124255f";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(url).then(handleResponse);



    return ("Hello World")
}