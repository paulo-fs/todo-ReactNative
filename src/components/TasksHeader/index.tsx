import { Text, View } from "react-native";
import { styles } from "./styles";

export function TasksHeader(){
  return (
    <View style={styles.tasksHeader}>
      <View style={styles.amountContainer}>
        <Text style={styles.created}>
          Criadas
        </Text>
        <Text style={styles.taskAmount}>
          0
        </Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.completed}>
          Concluídas
        </Text>
        <Text style={styles.taskAmount}>
          0
        </Text>
      </View>
    </View>
  )
}