import { useContext } from "react";
import { Text, View } from "react-native";
import { Context } from "../../shared/context/Context";
import { styles } from "./styles";

export function TasksHeader(){
  const { tasks } = useContext(Context);
  const tasksAmount = tasks.length;
  const doneTasksAmount = tasks
    .filter(task => task.isDone === true).length;

  return (
    <View style={styles.tasksHeader}>
      <View style={styles.amountContainer}>
        <Text style={styles.created}>
          { tasksAmount === 1
            ? 'Criada'
            : 'Criadas'
          }
        </Text>
        <Text style={styles.taskAmount}>
          { tasksAmount }
        </Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.completed}>
          { doneTasksAmount === 1
            ? 'Concluída'
            : 'Concluídas'
          }
        </Text>
        <Text style={styles.taskAmount}>
          { doneTasksAmount }
        </Text>
      </View>
    </View>
  )
}