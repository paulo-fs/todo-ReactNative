import { useContext } from "react";
import { View } from "react-native";

import { Context } from "../../shared/context/Context";
import { TaskItem } from "../TaskItem";

import { styles } from "./styles";

export function TaskList(){
  const {tasks} = useContext(Context);
  
  return (
    <View style={styles.container}>
      {
        tasks.map(task => {
          return <TaskItem 
            key={task.id}
            task={task}
          />
        })
      }
      {/* <TaskItem /> */}
    </View>
  )
}