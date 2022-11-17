import type { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  HomeScreen: undefined;
  WheatherScreen: { city: string; lat: string; lon: string };
  LocationScreen: {
    city: string;
    uLat: string;
    uLon: string;
    lat: string;
    lon: string;
  };
};

export type WeatherScreenProps = StackScreenProps<
  RootStackParamList,
  "WheatherScreen"
>;

export type LocationProps = StackScreenProps<
  RootStackParamList,
  "LocationScreen"
>;
