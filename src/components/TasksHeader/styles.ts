import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tasksHeader: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#333333',
    borderBottomWidth: 1,
    paddingBottom: 21
  },

  amountContainer: {
    flexDirection: 'row',
  },

  created: {
    color: '#4EA8DE',
    fontWeight: 'bold',
  },

  completed: {
    color: '#8284FA',
    fontWeight: 'bold',
  },

  taskAmount: {
    backgroundColor: '#333333',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 25,
    height: 19,
    marginLeft: 8,
    paddingBottom: 3,
    borderRadius: 16
  },
})