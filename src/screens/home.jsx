import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Dashbaord")}>
        <Text>Home screen</Text>
      </TouchableOpacity>
    </View>
  );
}
