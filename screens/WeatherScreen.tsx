import { Button, Center, Spinner, Text, View, VStack } from "native-base";
import { useEffect } from "react";
import CurrentWheather from "../components/CurrentWheather";
import WeekWheather from "../components/WeekWheather";
import { getWeatherInfo } from "../services/fetchingService";
import { WeatherScreenProps } from "../types/navigationTypes";
import { useSelector, useDispatch } from "react-redux";
import { addInfo } from "../redux/slices/fetchedWeatherInfo";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { Alert } from "react-native";

function WheatherScreen({ route, navigation }: WeatherScreenProps) {
  const { fetchedWeatherInfo } = useSelector(
    (state: any) => state.fetchedWeatherInfo
  );
  const [locationPermissionInformation, requestPermision] =
    useForegroundPermissions();
  const dispatch = useDispatch();

  const weatherInfo = async () => {
    const weather = await getWeatherInfo(route.params.lat, route.params.lon);
    if (weather !== null) {
      dispatch(addInfo(weather));
    }
  };
  useEffect(() => {
    weatherInfo();
  }, []);

  const navigate = () => {
    navigation.navigate("HomeScreen");
  };

  async function verifyPermissions() {
    if (
      locationPermissionInformation?.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermision();
      return permissionResponse.granted;
    }
    if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert("You have to grant permissions to use this service");
      return false;
    }
    return true;
  }

  async function getCurrentLocation() {
    const userLocation = await getCurrentPositionAsync();
    if (userLocation) {
      return userLocation;
    } else {
      return null;
    }
  }

  const navigateToLocation = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const location = await getCurrentLocation();
    if (location !== null) {
      navigation.navigate("LocationScreen", {
        city: route.params.city,
        uLat: location.coords.latitude.toString(),
        uLon: location.coords.longitude.toString(),
        lat: route.params.lat,
        lon: route.params.lon,
      });
    }
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
            {route.params.city}
          </Text>
          <CurrentWheather weather={fetchedWeatherInfo} />
          <Button size='md' marginTop={15} onPress={navigateToLocation}>
            NAVIGATE
          </Button>
          <View testID='scrollable' marginY={50} flex={1}>
            <WeekWheather weather={fetchedWeatherInfo} />
          </View>

          <Button size='md' onPress={navigate} marginY={25}>
            SEARCH FOR OTHER CITY
          </Button>
        </VStack>
      </Center>
    );
  } else return <Spinner />;
}

export default WheatherScreen;
