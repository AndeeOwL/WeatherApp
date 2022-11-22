import { Button, Center, Text, View, VStack } from "native-base";
import { LocationProps } from "../types/navigationTypes";
import MapViewDirections from "react-native-maps-directions";
import MapView, { Marker } from "react-native-maps";
import { API_KEY } from "@env";
import { Dimensions, StyleSheet } from "react-native";

function LocationScreen({ route, navigation }: LocationProps) {
  const currentCity = route.params.city;
  const ASPECT_RATIO = 400 / 400;
  const LATITUDE = Number(route.params.lat);
  const LONGITUDE = Number(route.params.lon);
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const origin = {
    latitude: Number(route.params.uLat),
    longitude: Number(route.params.uLon),
  };
  const destination = {
    latitude: Number(route.params.lat),
    longitude: Number(route.params.lon),
  };

  const navigate = () => {
    navigation.navigate("HomeScreen");
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  return (
    <Center
      _dark={{ bg: "blue.700" }}
      _light={{ bg: "blue.200" }}
      px={4}
      flex={1}
    >
      <VStack testID='route_screen' marginTop={75} alignItems='center' flex={1}>
        <Text fontSize='4xl'>Route to {currentCity}</Text>
        <View
          backgroundColor='#fff'
          alignItems='center'
          justifyContent='center'
          marginY={50}
          marginX={25}
          width={windowWidth - 25}
          height={windowHeight - 500}
        >
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: LATITUDE,
              longitude: LONGITUDE,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
          >
            <Marker coordinate={origin} />
            <Marker coordinate={destination} />
            <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={API_KEY}
              strokeWidth={3}
              strokeColor='hotpink'
            />
          </MapView>
        </View>
        <Button testID='home_button' size='md' onPress={navigate}>
          SEARCH FOR OTHER CITY
        </Button>
      </VStack>
    </Center>
  );
}

export default LocationScreen;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
