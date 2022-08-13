import { useContext } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { Context } from "../../shared/context/Context";
import { styles } from "./styles";

export function Form(){
  const {addNewTask} = useContext(Context);

  function handleAddNewTask(){
    const newTask = {
      id: new Date().getTime(),
      message: 'teste',
      isDone: false
    }
    addNewTask(newTask)
  }

  return (
    <View style={styles.form}>
      <TextInput 
        style={styles.input} 
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor='#808080'
      />
      <TouchableOpacity 
        style={styles.buttonAdd}
        onPress={handleAddNewTask}
      >
          <Image 
            source={require('../../../assets/plus.png')}
          />
      </TouchableOpacity>
    </View>
  )
}