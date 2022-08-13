import { Image, Text, TouchableOpacity, View } from "react-native";
import { TaskType } from "../../shared/interfaces/tasks";
import { styles } from "./styles";

interface PropTypes{
  task: TaskType
}

export function TaskItem({task}: PropTypes){
  const {message, isDone} = task

  return (
    <View 
        style={ isDone
          ? styles.taskChecked
          : styles.task
        }
        >

        { isDone
          ? <TouchableOpacity style={styles.checkedContainer}>
              <Image source={require('../../../assets/check.png')} style={styles.checked} />
            </TouchableOpacity>
          : <TouchableOpacity style={styles.unchecked}>
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

        <TouchableOpacity style={styles.trashButton}>
          <Image 
            source={require('../../../assets/trash.png')} 
            style={styles.trash}
          />
        </TouchableOpacity>
      </View>
  )
}