import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
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
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
});
