import { Button, Center, VStack } from "native-base";
import { useState } from "react";
import Logo from "../components/Logo";
import SearchBar from "../components/Searchbar";
import ToggleDarkMode from "../components/ToggleDarkMode";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigationTypes";
import { StackNavigationProp } from "@react-navigation/stack";
import { getCity } from "../services/fetchingService";
import { cityType } from "../types/cityType";

function HomeScreen() {
  const [city, setCity] = useState("");
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [fetchedCity, setFetchedCity] = useState<cityType[]>();

  const loadCityInformation = async () => {
    if (city !== "") {
      const cityInfo = await getCity(city);
      if (cityInfo !== null) {
        setFetchedCity(cityInfo);
        if (fetchedCity) {
          navigation.navigate("WheatherScreen", {
            city: city,
            lat: fetchedCity[0].lat,
            lon: fetchedCity[0].lon,
          });
        }
      }
    }
  };

  const inputHandler = (enteredText: string) => {
    setCity(enteredText);
  };

  return (
    <>
      <Center
        _dark={{ bg: "blue.700" }}
        _light={{ bg: "blue.100" }}
        px={4}
        flex={1}
      >
        <Logo />
        <SearchBar title={"What`s the wheather"} onChangeText={inputHandler} />
        <VStack space={5} alignItems='center'>
          <Button size='sm' onPress={loadCityInformation}>
            SEARCH
          </Button>
        </VStack>
        <VStack margin={10} space={5} alignItems='center'>
          <ToggleDarkMode />
        </VStack>
      </Center>
    </>
  );
}

export default HomeScreen;
