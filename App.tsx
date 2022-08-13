import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar 
        backgroundColor='#0D0D0D'
      />
      <Home />
    </>
  );
}
