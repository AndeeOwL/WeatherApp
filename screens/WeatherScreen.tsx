import { Button, Center, Spinner, Text, View, VStack } from "native-base";
import { useEffect, useState } from "react";
import CurrentWheather from "../components/CurrentWheather";
import SearchBar from "../components/Searchbar";
import WeekWheather from "../components/WeekWheather";
import { getWeatherInfo } from "../services/fetchingService";
import { WeatherScreenProps } from "../types/navigationTypes";
import { useSelector, useDispatch } from "react-redux";
import { addInfo } from "../redux/slices/fetchedWeatherInfo";

function WheatherScreen({ route, navigation }: WeatherScreenProps) {
  const [currentCity, setCurrentCity] = useState(route.params.city);
  const [city, setCity] = useState("");
  const { fetchedWeatherInfo } = useSelector(
    (state: any) => state.fetchedWeatherInfo
  );
  const dispatch = useDispatch();

  const inputHandler = (enteredText: string) => {
    setCity(enteredText);
  };

  const weatherInfo = async () => {
    const weather = await getWeatherInfo(route.params.lat, route.params.lon);
    if (weather !== null) {
      dispatch(addInfo(weather));
    }
  };

  useEffect(() => {
    weatherInfo();
  }, [currentCity]);

  const loadCityInformation = () => {
    if (city !== "") {
      setCurrentCity(city);
    }
  };
  const navigateToLocation = () => {
    navigation.navigate("LocationScreen", {
      city: currentCity,
      lat: route.params.lat,
      lon: route.params.lon,
    });
  };

  if (fetchedWeatherInfo[0] !== "empty") {
    return (
      <Center
        _dark={{ bg: "blue.700" }}
        _light={{ bg: "blue.200" }}
        px={4}
        flex={1}
      >
        <VStack marginY={50} alignItems='center' flex={1}>
          <Text testID='cityName' fontSize='4xl'>
            {currentCity}
          </Text>
          <CurrentWheather weather={fetchedWeatherInfo} />
          <Button size='md' marginTop={15} onPress={navigateToLocation}>
            NAVIGATE
          </Button>
          <View testID='scrollable' marginY={50} flex={1}>
            <WeekWheather weather={fetchedWeatherInfo} />
          </View>
          <SearchBar title={"Check other city ?"} onChangeText={inputHandler} />
          <Button size='sm' onPress={loadCityInformation}>
            SEARCH
          </Button>
        </VStack>
      </Center>
    );
  } else return <Spinner />;
}

export default WheatherScreen;
