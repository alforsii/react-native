import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Divider from "../Divider";

export default function Reviews({ reviews }) {
  return (
    <View style={styles.container}>
      <Text>Reviews</Text>
      <Divider />
      <View style={styles.listHeader}>
        <Text>Name: </Text>
        <Text>Rating: </Text>
        <Text>Comment:</Text>
        <Text>Date:</Text>
      </View>
      <Divider />
      <ScrollView>
        {reviews.map((review, i) => (
          <View style={styles.listItem} key={i}>
            <Text style={styles.listText}>{review.name}</Text>
            <Text style={styles.listText}> {review.rating}</Text>
            <Text style={styles.listText}>{review.comment}</Text>
            <Text style={styles.listText}> {review.date}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  listItem: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  listText: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxWidth: 100,
  },
});
