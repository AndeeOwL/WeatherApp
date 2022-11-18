import axios from "axios";
import { ENV_VAR } from "@env";

export async function fetchCityInformation(city: string) {
  const response = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=f631fd357c75163a46154773a513dd64`
  );
  const cityInfo = [];
  for (const key in response.data) {
    const cityObj = {
      cityName: response.data[key].name,
      lat: response.data[key].lat,
      lon: response.data[key].lon,
    };
    cityInfo.push(cityObj);
  }
  return cityInfo;
}

export async function fetchWeatherInformation(lat: string, lon: string) {
  // const response = await axios.get(
  //   `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=alerts&appid=${ENV_VAR}`
  // );

  // console.log(response.data);
  // const wheatherInfo = [];

  // for (const key in response.data) {
  //   const wheatherObj = {
  //     sunrise: response.data[key].sunrise,
  //     sunset: response.data[key].sunset,
  //     temp: response.data[key].temp,
  //     feelsLike: response.data[key].feels_like,
  //     pressure: response.data[key].pressure,
  //     humidity: response.data[key].humidity,
  //     clouds: response.data[key].clouds,
  //     wind_speed: response.data[key].wind_speed,
  //     weatherDescription: response.data[key].description,
  //     icon: response.data[key].icon,
  //   };
  //   console.log(wheatherObj);
  //   wheatherInfo.push(wheatherObj);
  // }
  // console.log(wheatherInfo);
  const weatherInfo = [
    {
      dt: "Monday",
      lowTemp: 6,
      highTemp: 17,
      sunrise: "05:30",
      sunset: "18:00",
      temp: 14,
      feelsLike: 10,
      pressure: 1014,
      humidity: 65,
      clouds: 40,
      windSpeed: 8.75,
      weatherDescription: "scattered clouds",
      icon: "03d",
    },
    {
      dt: "Tuesday",
      lowTemp: 8,
      highTemp: 20,
      sunrise: "05:40",
      sunset: "18:30",
      temp: 17,
      feelsLike: 14,
      pressure: 1084,
      humidity: 80,
      clouds: 70,
      windSpeed: 17.3,
      weatherDescription: "Rainy clouds",
      icon: "10d",
    },
    {
      dt: "Wednesday",
      lowTemp: 6,
      highTemp: 17,
      sunrise: "05:30",
      sunset: "18:00",
      temp: 14,
      feelsLike: 10,
      pressure: 1014,
      humidity: 65,
      clouds: 40,
      windSpeed: 8.75,
      weatherDescription: "scattered clouds",
      icon: "03d",
    },
    {
      dt: "Thursday",
      lowTemp: 8,
      highTemp: 20,
      sunrise: "05:40",
      sunset: "18:30",
      temp: 17,
      feelsLike: 14,
      pressure: 1084,
      humidity: 80,
      clouds: 70,
      windSpeed: 17.3,
      weatherDescription: "Rainy clouds",
      icon: "10d",
    },
    {
      dt: "Friday",
      lowTemp: 8,
      highTemp: 20,
      sunrise: "05:40",
      sunset: "18:30",
      temp: 17,
      feelsLike: 14,
      pressure: 1084,
      humidity: 80,
      clouds: 70,
      windSpeed: 17.3,
      weatherDescription: "Rainy clouds",
      icon: "10d",
    },
  ];
  return weatherInfo;
}
