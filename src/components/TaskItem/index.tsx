import { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Context } from "../../shared/context/Context";
import { TaskType } from "../../shared/interfaces/tasks";
import { styles } from "./styles";

interface PropTypes{
  task: TaskType
}

export function TaskItem({task}: PropTypes){
  const { deleteTask, checkTask } = useContext(Context);
  const {message, isDone, id} = task;

  function handleDeleteTask(){
    deleteTask(id);
  }

  function handleCheckTask() {
    const alteredTask = {...task, isDone: !isDone}
    checkTask(alteredTask)
  }

  return (
    <View 
        style={ isDone
          ? styles.taskChecked
          : styles.task
        }
        >

        { isDone
          ? <TouchableOpacity 
              style={styles.checkedContainer}
              onPress={handleCheckTask}
            >
              <Image source={require('../../../assets/check.png')} style={styles.checked} />
            </TouchableOpacity>
          : <TouchableOpacity 
              style={styles.unchecked}
              onPress={handleCheckTask}
            >
            </TouchableOpacity>
        }
        

        <Text 
          style={ isDone
            ? styles.descriptionChecked
            : styles.descriptionUnchecked
          }
        >
          {message}
        </Text>

        <TouchableOpacity 
          style={styles.trashButton}
          onPress={handleDeleteTask}
        >
          <Image 
            source={require('../../../assets/trash.png')} 
            style={styles.trash}
          />
        </TouchableOpacity>
      </View>
  )
}