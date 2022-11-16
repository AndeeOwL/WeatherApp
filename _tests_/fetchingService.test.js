import axios from "axios";
import { getCity, getWeatherInfo } from "../services/fetchingService";

jest.mock("axios");

describe("Return the right arrays of objects", () => {
  test("should return Plovdiv and the righ lat and lon in object", async () => {
    const expectedReturn = [
      {
        lat: "42.1418541",
        lon: "24.7499297",
      },
    ];
    axios.get.mockResolvedValue({
      data: [
        {
          lat: "42.1418541",
          lon: "24.7499297",
        },
      ],
    });
    const result = await getCity("Plovdiv");
    expect(result).toEqual(expectedReturn);
  });

  test("should return right values", async () => {
    const actual = await getWeatherInfo(42.1418541, 24.7499297);
    const expectedReturn = [
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
    expect(actual).toEqual(expectedReturn);
  });
});
