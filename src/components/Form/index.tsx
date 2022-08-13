import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Form(){
  return (
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
  )
}