import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const contacts = [
  {
    uid: 1,
    name: "Ivonne",
    status:
      "Lorem ipsum, dolor setur adipisicing elit. Aperiam quos recusandae facere.",
    image_url: "http://dummyimage.com/240x245.png/dddddd/000000",
  },
  {
    uid: 2,
    name: "Pacorro",
    status:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam quos recusandae facere.",
    image_url: "http://dummyimage.com/217x239.png/5fa2dd/ffffff",
  },
  {
    uid: 3,
    name: "Germana",
    status: "sit amet consectetur a quos recusandae facere.",
    image_url: "http://dummyimage.com/222x242.png/cc0000/ffffff",
  },
  {
    uid: 4,
    name: "Werner",
    status:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam quos recusandae facere.",
    image_url: "http://dummyimage.com/211x242.png/dddddd/000000",
  },
  {
    uid: 5,
    name: "Adina",
    status: "Lorem ipsum, dolopisicing elit. Aperiam quos recusandae facere.",
    image_url: "http://dummyimage.com/204x212.png/cc0000/ffffff",
  },
  {
    uid: 6,
    name: "Norean",
    status:
      "Lorem ipsumsectetur adipisicing elit. Aperiam quos recusandae facere.",
    image_url: "http://dummyimage.com/233x244.png/dddddd/000000",
  },
  {
    uid: 7,
    name: "Torrin",
    status:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam quos .",
    image_url: "http://dummyimage.com/206x225.png/cc0000/ffffff",
  },
];

export default function ContactList() {
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, image_url }) => {
          return (
            <View key={uid} style={styles.userCard}>
              <Image
                source={{
                  uri: image_url,
                }}
                style={styles.userImage}
              />
              <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },

  container: {
    paddingHorizontal: 16,
    marginBottom: 6,
  },

  userCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
    backgroundColor: "purple",
    padding: 8,
    borderRadius: 6,
  },

  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 15,
  },

  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },

  userStatus: {
    fontSize: 12,
    color: "#fff",
  },
});
