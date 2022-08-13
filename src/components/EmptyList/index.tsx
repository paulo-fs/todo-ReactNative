import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyList(){
  return (
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
  )
}