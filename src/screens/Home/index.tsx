import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";


export function Home() {
  return (
    <>
      <View style={styles.header}>
        <Image 
          source={require('../../../assets/Logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.form}>
          <TextInput 
            style={styles.input} 
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
          />
          <TouchableOpacity style={styles.buttonAdd}>
              <Image 
                source={require('../../../assets/plus.png')}
              />
          </TouchableOpacity>
        </View>

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

        { true && 
          <View style={styles.emptyList}>
            <Image 
              source={require('../../../assets/clipboard.png')}
              style={styles.clipboard}
            />
            <Text style={styles.emptyListTextBold}>
              Você ainda não tem taferas cadastradas
            </Text>
            <Text style={styles.emptyListNormal}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>  
        }
        
      </View>
    </>
  )
}