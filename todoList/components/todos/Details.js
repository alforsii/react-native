import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import ReviewForm from "../forms/ReviewForm";
import Reviews from "./Reviews";
import Modal from "../Modal";

import { globalStyles } from "../../global/styles/globalStyles";

export default function Details(props) {
  const { title, completed } = props.route.params;
  const [reviews, setReviews] = useState([
    {
      name: "ashraf",
      rating: 5,
      comment: "It's perfecto...",
      date: "Yesterday",
    },
    {
      name: "sam",
      rating: 4,
      comment: "It's okasasa asas asas asasa ",
      date: "Yesterday",
    },
    { name: "Bob", rating: 3, comment: "It's not ok...", date: "Yesterday" },
  ]);

  return (
    <View>
      <Text style={globalStyles.text}>Details page</Text>
      <Text> Title: {title} </Text>
      <Text> Completed: {completed ? "Yes" : "No"} </Text>
      <Modal
        component={ReviewForm}
        title="Leave feedback"
        titleStyle={{
          color: "dodgerblue",
          fontSize: 20,
          position: "absolute",
          right: 10,
        }}
        setReviews={setReviews}
      />
      <Reviews reviews={reviews} />
    </View>
  );
}

const styles = StyleSheet.create({});
