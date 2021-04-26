import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  PermissionsAndroid,
  TouchableOpacity,
} from "react-native";
import { Constants } from "react-native-unimodules";
import { PhotoManipulator } from "react-native-photo-manipulator";
//console.log(Constants.systemFonts);

export default function App() {
  const [myImage, setMyImage] = useState();

  const image = "https://unsplash.com/photos/qw6qQQyYQpo/download?force=true";
  const texts = [
    {
      position: { x: 200, y: 500 },
      text: "Text 1aaaaaaaaaaa",
      textSize: 100,
      color: "#000000",
    },
    {
      position: { x: 50, y: 30 },
      text: "Text 1aaaaaaaaaaa",
      textSize: 300,
      color: "#FFFFFF",
      thickness: 3,
    },
  ];

  const docrop = () => {
    PhotoManipulator.printText(image, texts)
      .then((path) => {
        console.log(`Result image path: ${path}`);
        setMyImage(path);
      })
      .catch((error) => {
        console.log("error :: " + error);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{
          uri: "https://unsplash.com/photos/qw6qQQyYQpo/download?force=true",
        }}
        style={{ width: 300, height: 300 }}
      />
      <TouchableOpacity onPress={docrop}>
        <Text>Load Image</Text>
      </TouchableOpacity>
      {myImage ? (
        <Image
          source={{ uri: myImage }}
          style={{
            width: 300,
            height: 400,
            borderColor: "black",
            borderWidth: 1,
          }}
          onError={(error) => {
            console.log(error);
          }}
        />
      ) : (
        <Text>Please Load Image!!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
