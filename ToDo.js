import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";
import { appStyles as styles } from "./style";

function ToDo() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleAddTask = () => {
    setTasks([...tasks, text]);
    // State içerisinde bulunan diğer ifadeler çağrıldı(...tasks), yeni ifade eklendi(text)
    setText("");
  };

  const handleDeleteTask = (index) =>{
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>My Tasks : {text}</Text>
        <Text style={styles.subTitle}>
          Enter your tasks in the text box below and press the "Add" button to
          add.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your task here"
          onChangeText={setText}
          value={text}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleAddTask}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>

        <View style={styles.divider}/>

        <FlatList 
        data={tasks}
        renderItem={(({item}) => 
        <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity 
                style={styles.taskDelete} 
                onPress={(index) => handleDeleteTask(index)}
            >
                <Text style={styles.taskDeleteText}>
                    X
                </Text>
            </TouchableOpacity>
        </View>)}
        keyExtractor={(item)=> item+ Date.now()+ Math.random() }
        />
      </View>
    </SafeAreaView>
  );
}

export default ToDo;
