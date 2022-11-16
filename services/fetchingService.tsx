import { Alert } from "react-native";
import { fetchCityInformation, fetchWeatherInformation } from "../util/http";

export async function getCity(city: string) {
  try {
    const fetchCity = await fetchCityInformation(city);
    return fetchCity;
  } catch (e) {
    console.log(e);
    Alert.alert(
      "Oops,something went wrong",
      "unable to fetch city information!"
    );
  }
}

export async function getWeatherInfo(lat: string, lon: string) {
  try {
    const weatherInfo = await fetchWeatherInformation(lat, lon);
    if (weatherInfo !== null) {
      return weatherInfo;
    }
  } catch (e) {
    console.log(e);
    Alert.alert(
      "Oops,something went wrong",
      "unable to fetch wheather information!"
    );
  }
}
