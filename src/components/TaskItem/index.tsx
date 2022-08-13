import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function TaskItem(){
  const check =  false;

  return (
    <View 
        style={ check
          ? styles.taskChecked
          : styles.task
        }
        >

        { check
          ? <TouchableOpacity style={styles.checkedContainer}>
              <Image source={require('../../../assets/check.png')} style={styles.checked} />
            </TouchableOpacity>
          : <TouchableOpacity style={styles.unchecked}>
            </TouchableOpacity>
        }
        

        <Text 
          style={ check
            ? styles.descriptionChecked
            : styles.descriptionUnchecked
          }
        >
          Integer urna interdum massa libero auctor neque turpis turpis semper.
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