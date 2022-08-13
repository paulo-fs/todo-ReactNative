import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 173,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo: {
    width: 110,
    height: 32,
  },

  bodyContainer: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 24,
    // position: 'relative'
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -50,
  },

  input: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    color: '#fff',
    fontSize: 16,
    padding: 16,
    borderRadius: 6
  },

  buttonAdd: {
    backgroundColor: '#1E6F9F',
    width: 52,
    height: 52,
    marginLeft: 8,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

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

  emptyList: {
    flex: 1,
    alignItems: 'center',
    marginTop: 48
  },

  clipboard: {
    width: 56,
    height: 56,
    marginBottom: 16
  },

  emptyListTextBold: {
    color: '#808080',
    fontWeight: 'bold',
    paddingBottom: 4
  },

  emptyListNormal: {
    color: '#808080',
  }
})