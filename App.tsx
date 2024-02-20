import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  useColorScheme,
} from "react-native";

const App = (): JSX.Element => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={isDarkMode ? styles.darkText : styles.lightText}>
          Hello World Nimesh 24
        </Text>
        <Text>Hello World Nimesh 24</Text>
        <Text>Hello World Nimesh 24</Text>
      </View>
      <View>
        <TextInput>Enter something here...</TextInput>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  darkText: {
    color: "white",
  },

  lightText: {
    color: "blue",
  },
});

export default App;
