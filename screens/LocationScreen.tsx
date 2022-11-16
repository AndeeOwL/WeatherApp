import { Button, Center, Text, View, VStack } from "native-base";
import { useState } from "react";
import SearchBar from "../components/Searchbar";
import { LocationProps } from "../types/navigationTypes";

function LocationScreen({ route }: LocationProps) {
  const [currentCity, setCurrentCity] = useState(route.params.city);
  const [city, setCity] = useState("");

  const inputHandler = (enteredText: string) => {
    setCity(enteredText);
  };

  const loadCityInformation = () => {
    if (city !== "") {
      setCurrentCity(city);
    }
  };

  return (
    <Center
      _dark={{ bg: "blue.700" }}
      _light={{ bg: "blue.200" }}
      px={4}
      flex={1}
    >
      <VStack marginTop={75} alignItems='center' flex={1}>
        <Text fontSize='4xl'>{currentCity}</Text>
        <View
          backgroundColor='amber.50'
          marginY={50}
          marginX={25}
          width={400}
          height={400}
        >
          <Text fontSize='xl'>NAVIGATION</Text>
        </View>
        <SearchBar title={"Visit other city ?"} onChangeText={inputHandler} />
        <Button size='sm' onPress={loadCityInformation}>
          SEARCH
        </Button>
      </VStack>
    </Center>
  );
}

export default LocationScreen;
