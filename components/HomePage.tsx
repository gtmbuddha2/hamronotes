import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function HomePage() {
  return (
    <View>
      <View>
        <Image source={{}} style={styles.titleImage} />
        <Text style={styles.titleText}>HAMRO NOTES</Text>
      </View>

      <View style={styles.container}>
        <TextInput style={styles.notebook} multiline={false}>
          Enter Chapter Name ...
        </TextInput>

        <TextInput
          multiline
          numberOfLines={10}
          style={[styles.notebook, styles.notepad]}
        >
          Write Notes Here ...
        </TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleImage: {
    width: 50,
    height: 50,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 60,
  },

  container: {
    flex: 1,
    gap: 15,
  },

  notebook: {
    backgroundColor: "black",
    width: 330,
    color: "white",
    padding: 3,
  },

  notepad: {},
});
