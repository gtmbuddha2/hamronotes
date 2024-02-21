import { SafeAreaView, StyleSheet, ScrollView, Text, View } from "react-native";
import HomePage from "./components/HomePage";

const App = (): JSX.Element => {
  return <SafeAreaView></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    padding: 20,
  },
});

export default App;
