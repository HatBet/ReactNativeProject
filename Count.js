import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, Image, View } from "react-native";
import MyCustomButton from "./MyCustomButton";


function Count() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
   setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1659380139642-690af1567639?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
          }}
          style={styles.Image}
        />
        <Text style={styles.text}>Conter : {count}</Text>
        <Text style={styles.subText}>Click buttons to change the counter </Text>

        <View style={styles.buttonContainer}>
          <MyCustomButton
            title="Increment +"
            style={{ backgroundColor: "pink", marginEnd: 15 }}
            onPress={handleIncrement}
          />
          <MyCustomButton title="Decrement -" onPress={handleDecrement} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Count;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    fontSize: 30,
  },
  subText: {
    fontSize: 20,
  },
  Image: {
    margin:100,
    height:250,
    alignItems:"center",
    justifyContent:"center"
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
});
