import { Box, Divider, Heading, Input, VStack } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

function SearchBar(props: any) {
  return (
    <VStack
      my='4'
      space={5}
      w='100%'
      maxW='300px'
      divider={
        <Box px='2'>
          <Divider />
        </Box>
      }
    >
      <VStack w='100%' space={5} alignSelf='center'>
        <Heading fontSize='3xl'>{props.title}</Heading>
        <Input
          placeholder='Search City'
          variant='filled'
          width='100%'
          fontSize='xl'
          borderRadius='10'
          textAlign='left'
          onChangeText={props.onChangeText}
          InputLeftElement={<Icon size={30} name='ios-search' />}
        />
      </VStack>
    </VStack>
  );
}

export default SearchBar;
