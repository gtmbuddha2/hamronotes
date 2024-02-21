import { SafeAreaView, StyleSheet, ScrollView, Text, View } from "react-native";

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
