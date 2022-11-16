import { render } from "@testing-library/react-native";
import { fireEvent } from "@testing-library/react-native/build";
import WeatherScreen from "../screens/WeatherScreen";

describe("Tests WeatherScreen component", () => {
  test("renders correctly", () => {
    const tree = render(<WeatherScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("it should render right amount of elements", () => {
    const { getAllByText, getByTestId, getAllByPlaceholderText } = render(
      <WeatherScreen />
    );
    const cityName = getByTestId("cityName");
    expect(cityName).toHaveLength(1);
    const temp = getByTestId("temp");
    expect(temp).toHaveLength(1);
    const weatherIcon = getByTestId("weatherIcon");
    expect(weatherIcon).toHaveLength(1);
    const feelsLike = getByTestId("feelsLike");
    expect(feelsLike).toHaveLength(1);
    const weatherDescription = getByTestId("weatherDescription");
    expect(weatherDescription).toHaveLength(1);
    const humidity = getByTestId("humidity");
    expect(humidity).toHaveLength(1);
    const pressure = getByTestId("pressure");
    expect(pressure).toHaveLength(1);
    const windSpeed = getByTestId("windSpeed");
    expect(windSpeed).toHaveLength(1);
    const forecastTitle = getAllByText("5-DAY FORECAST");
    expect(forecastTitle).toHaveLength(1);
    const forecast = getByTestId("forecast");
    expect(forecast).toHaveLength(5);
    const searchTitle = getAllByText("Check other city ?");
    expect(searchTitle).toHaveLength(1);
    const searchbar = getAllByPlaceholderText("Search City");
    expect(searchbar).toHaveLength(1);
    const button = getAllByText("SEARCH");
    expect(button).toHaveLength(1);
  });
  test("it should scroll forecast", () => {
    const { getByTestId } = render(<WeatherScreen />);
    const scrollable = getByTestId("scrollable");
    fireEvent.scroll(scrollable);
  });
  test("it should change data when press search button", () => {
    const { getAllByText, getAllByPlaceholderText } = render(<WeatherScreen />);
    const cityName = getByTestId("cityName");
    const searchbar = getAllByPlaceholderText("Search City");
    const searchButton = getAllByText("SEARCH");
    fireEvent.changeText(searchbar, "London");
    fireEvent.press(searchButton);
    expect(cityName).toEqual("London");
  });
});
