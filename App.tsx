import { SafeAreaView, StyleSheet, ScrollView, Text, View } from "react-native";
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevatedCards";
import FancyCards from "./components/FancyCards";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <FlatCards />
          <ElevatedCards />
          <FancyCards />
          <ActionCard />
          <ContactList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
