import { Center, Image } from "native-base";

function Logo() {
  return (
    <Center>
      <Image
        testID='logo'
        size={150}
        borderRadius={100}
        source={{
          uri: "https://m.files.bbci.co.uk/modules/bbc-morph-wr-decorative-map-international/3.0.1/img/map-398w.png",
        }}
        alt='Logo'
      />
    </Center>
  );
}

export default Logo;
