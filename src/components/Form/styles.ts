import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
})