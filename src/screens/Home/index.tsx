import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { EmptyList } from "../../components/EmptyList";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { TasksHeader } from "../../components/TasksHeader";
import { styles } from "./styles";


export function Home() {
  return (
    <>
      <Header />
      <View style={styles.bodyContainer}>
        <Form />
        <TasksHeader />

        { true && 
          <EmptyList />
        }
        
      </View>
    </>
  )
}