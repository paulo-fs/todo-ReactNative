import { View } from "react-native";

import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { TasksHeader } from "../../components/TasksHeader";
import { EmptyList } from "../../components/EmptyList";
import { TaskList } from "../../components/TaskList";

import { styles } from "./styles";


export function Home() {
  return (
    <>
      <Header />
      <View style={styles.bodyContainer}>
        <Form />
        <TasksHeader />

        { false && 
          <EmptyList />
        }

        { true &&
          <TaskList />
        }
        
      </View>
    </>
  )
}