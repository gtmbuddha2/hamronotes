import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Framework</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>React Js</Text>
          <Text style={styles.cardLabel}>Js, Web Framework</Text>
          <Text style={styles.cardDescription}>
            A fontend web framework for javascript for building UI Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Possimus quos quidem.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            provident cumque distinctio corrupti culpa molestias...
          </Text>
        </View>
        <Text style={styles.cardFooter}>2020, Aug 24</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },

  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },

  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    alignSelf: "center",
  },

  cardElevated: {
    backgroundColor: "#FFFFFF",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },

  cardImage: {
    height: 150,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 24,
  },

  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },

  cardTitle: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
  },
  cardLabel: {
    color: "#000000",
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: "#242B2E",
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: "#000000",
    fontSize: 8,
    fontWeight: "bold",
    padding: 10,
  },
});
