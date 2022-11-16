import HomeScreen from "../screens/HomeScreen";
import { render } from "@testing-library/react-native";
import { fireEvent } from "@testing-library/react-native/build";
import WeatherScreen from "../screens/WeatherScreen";

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe("Tests HomeScreen component", () => {
  test("renders correctly", () => {
    const tree = render(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("it should render right amount of elements", () => {
    const { getAllByText, getByTestId } = render(<HomeScreen />);
    const logo = getByTestId("logo");
    expect(logo).toHaveLength(1);
    const text = getAllByText("What`s the weather");
    expect(text).toHaveLength(1);
    const toggleTextOne = getAllByText("Dark");
    expect(toggleTextOne).toHaveLength(1);
    const toggleTextTwo = getAllByText("Light");
    expect(toggleTextTwo).toHaveLength(1);
    const toggle = getByTestId("toggle");
    expect(toggle).toHaveLength(1);
    const searchButton = getAllByText("SEARCH");
    expect(searchButton).toHaveLength(1);
  });
  test("it should navigate right when press search button", () => {
    const { getAllByText, getAllByPlaceholderText } = render(<HomeScreen />);
    const searchbar = getAllByPlaceholderText("Search City");
    const searchButton = getAllByText("SEARCH");
    fireEvent.changeText(searchbar, "Plovdiv");
    fireEvent.press(searchButton);
    expect(mockedNavigate).toHaveBeenCalledWith(WeatherScreen);
  });
});
