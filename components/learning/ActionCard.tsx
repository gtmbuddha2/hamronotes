import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function ActionCard() {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Whats new in Python, 24</Text>
        </View>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/18297041/pexels-photo-18297041/free-photo-of-au-pain-chocolate-new-york.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText} numberOfLines={6}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            accusamus illo harum officia corrupti odio aut culpa aperiam
            aspernatur, maxime dolore consequuntur dolorem iste repellendus
            earum necessitatibus qui amet ipsa quos assumenda quas. Illum error
            iure similique tempore quis corporis aliquid laboriosam, blanditiis
            eligendi doloribus numquam? Corrupti totam rem repellat.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite("http://gautamnimesh.com.np")}
          >
            <Text style={styles.socialLinks} numberOfLines={2}>
              Read More
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => openWebsite("http://facebook.com/gautamnimesh")}
          >
            <Text style={styles.socialLinks} numberOfLines={2}>
              Follow Me
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },

  card: {
    width: 350,
    height: 420,
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
    shadowColor: "#333",
    shadowOpacity: 0.6,
  },

  headingContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    color: "black",
    fontSize: 15,
    fontWeight: "600",
  },

  cardImage: {
    height: 190,
  },

  bodyContainer: {
    padding: 10,
  },

  bodyText: {},
  footerContainer: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  socialLinks: {
    fontSize: 16,
    color: "black",
    backgroundColor: "#FFF7F1",
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 5,
  },
});
