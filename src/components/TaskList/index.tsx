import { Image, Text, TouchableOpacity, View } from "react-native";
import { TaskItem } from "../TaskItem";
import { styles } from "./styles";

export function TaskList(){
  const tasks = ['task1', 'task2', 'task3'];
  
  return (
    <View style={styles.container}>
      <TaskItem />
    </View>
  )
}