import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  task: {
    backgroundColor: '#333333',
    width: '100%',
    padding: 16,
    borderRadius: 8,
    borderColor: '#808080',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },

  taskChecked: {backgroundColor: '#333333',
  width: '100%',
  padding: 16,
  borderRadius: 8,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 8
},

  unchecked: {
    width: 17,
    height: 17,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#4EA8DE'
  },

  checkedContainer: {
    width: 17,
    height: 17,
    backgroundColor: '#8284FA',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  checked: {
  },

  descriptionUnchecked: {
    color: '#fff',
    flex: 1,
    fontSize: 15,
    paddingLeft: 16,
    paddingright: 16
  },

  descriptionChecked: {
    color: '#808080',
    textDecorationLine: 'line-through',
    flex: 1,
    fontSize: 15,
    paddingLeft: 16,
    paddingright: 16
  },

  trashButton: {
    padding: 4
  },

  trash: {
    width: 14,
    height: 16
  },
})