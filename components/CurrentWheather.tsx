import { HStack, Image, Text, VStack } from "native-base";

function CurrentWheather(props: any) {
  return (
    <>
      <HStack alignItems='center'>
        <Text testID='temp' fontSize='4xl'>
          {props.weather[0].temp}°
        </Text>
        <Image
          testID='weatherIcon'
          source={{
            uri: `https://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`,
          }}
          alt='icon'
          size='md'
        />
      </HStack>
      <VStack>
        <Text testID='feelsLike' fontSize='2xl'>
          Feels like:{props.weather[0].feelsLike}°
        </Text>
        <Text testID='weatherDescription' fontSize='2xl'>
          {props.weather[0].weatherDescription}
        </Text>
      </VStack>
      <HStack>
        <Text testID='humidity' fontSize='xl'>
          H:{props.weather[0].humidity}%{" "}
        </Text>
        <Text testID='pressure' fontSize='xl'>
          P:{props.weather[0].pressure}hPa{" "}
        </Text>
        <Text testID='windSpeed' fontSize='xl'>
          WS:{props.weather[0].windSpeed}km/h
        </Text>
      </HStack>
    </>
  );
}

export default CurrentWheather;
