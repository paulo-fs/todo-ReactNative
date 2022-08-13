import { useContext, useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { Context } from "../../shared/context/Context";
import { styles } from "./styles";

export function Form(){
  const {addNewTask} = useContext(Context);
  const [message, setMessage] = useState('');

  function handleAddNewTask(){
    const newTask = {
      id: new Date().getTime(),
      message: message,
      isDone: false
    }
    setMessage('');
    addNewTask(newTask)
  }

  return (
    <View style={styles.form}>
      <TextInput 
        style={styles.input} 
        placeholder='Adicione uma nova tarefa'
        placeholderTextColor='#808080'
        value={message}
        onChangeText={setMessage}
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