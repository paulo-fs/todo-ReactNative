import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
import { ContextProvider } from "./src/shared/context/Context";

export default function App() {
  return (
    <ContextProvider>
      <StatusBar 
        backgroundColor='#0D0D0D'
      />
      <Home />
    </ContextProvider>
  );
}
