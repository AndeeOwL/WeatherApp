import {
  Box,
  FlatList,
  HStack,
  Image,
  Progress,
  Text,
  VStack,
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

function WeekWheather(props: any) {
  return (
    <VStack
      width={400}
      backgroundColor='blue.300'
      borderRadius={15}
      borderBottomColor='gray.600'
      borderBottomWidth={5}
      borderRightColor='gray.600'
      borderRightWidth={5}
    >
      <HStack
        borderBottomColor='black'
        borderBottomWidth={2}
        borderBottomRadius={40}
        padding={15}
      >
        <Icon name='calendar' size={20} />
        <Text color='black'> 5-DAY FORECAST</Text>
      </HStack>
      <FlatList
        data={props.weather}
        renderItem={({ item }: { item: any }) => (
          <VStack
            testID='forecast'
            borderBottomColor='black'
            borderBottomWidth={2}
            borderBottomRadius={40}
            margin={5}
            justifyContent='center'
          >
            <HStack alignItems='center'>
              <Text color='black' fontSize='xl' marginX={3}>
                {item.dt}
              </Text>
              <Image
                source={{
                  uri: `https://openweathermap.org/img/wn/${item.icon}@2x.png`,
                }}
                alt='icon'
                size='xs'
              />
              <Text color='black' fontSize='xl' marginX={3}>
                {item.lowTemp}°
              </Text>
              <Box w='90%' maxW='100'>
                <Progress value={45} />
              </Box>
              <Text color='black' fontSize='xl' marginX={3}>
                {item.highTemp}°
              </Text>
            </HStack>
            <HStack alignItems='center' justifyContent='center'>
              <Text color='black' fontSize='xl'>
                H:{item.humidity}%{" "}
              </Text>
              <Text color='black' fontSize='xl'>
                P:{item.pressure}hPa{" "}
              </Text>
              <Text color='black' fontSize='xl'>
                WS:{item.windSpeed}km/h
              </Text>
            </HStack>
            <HStack alignItems='center' justifyContent='center'>
              <Text color='black' fontSize='xl'>
                sunrise:{item.sunrise}{" "}
              </Text>
              <Text color='black' fontSize='xl'>
                sunset:{item.sunset}
              </Text>
            </HStack>
          </VStack>
        )}
        keyExtractor={(item) => Math.random().toString()}
      />
    </VStack>
  );
}

export default WeekWheather;
