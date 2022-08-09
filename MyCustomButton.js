import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MyCustomButton(props) {
  return (
    <TouchableOpacity 
        style={[styles.button, props.style]} 
        onPress={props.onPress} >
      <Text style={styles.buttonText}>{props.title} </Text>
    </TouchableOpacity>
  );
}

export default MyCustomButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 12,
    borderRadius: 12,
    margin:6,
    alignItems: "center",
    width: 150,
  },
  buttonText: {
    fontSize: 20,
    color: "black",
  },
});
