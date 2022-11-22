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
import { useDispatch, useSelector } from "react-redux";
import { changeCity } from "../redux/slices/city";

function HomeScreen() {
  const { city } = useSelector((state: any) => state.city);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const loadCityInformation = async () => {
    const cityInfo = await getCity(city);
    if (cityInfo) {
      navigation.navigate("WheatherScreen", {
        city: cityInfo[0].cityName,
        lat: cityInfo[0].lat,
        lon: cityInfo[0].lon,
      });
    }
  };

  const inputHandler = (enteredText: string) => {
    dispatch(changeCity(enteredText));
  };

  return (
    <>
      <Center
        testID='home_screen'
        _dark={{ bg: "blue.700" }}
        _light={{ bg: "blue.100" }}
        px={4}
        flex={1}
      >
        <Logo />
        <SearchBar title={"What`s the wheather"} onChangeText={inputHandler} />
        <VStack space={5} alignItems='center'>
          <Button
            testID='search_button'
            size='sm'
            onPress={loadCityInformation}
          >
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
