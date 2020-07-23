import React from "react";
import { View, Button, Text } from "react-native";
// Using Formik
import { Formik } from "formik";
import * as yup from "yup";

import Input from "../Input";
import { globalStyles } from "../../global/styles/globalStyles";

const reviewSchema = yup.object().shape({
  name: yup.string().required().min(4),
  rating: yup.string().required().min(4),
  comment: yup.string().required().min(4),
  date: yup.string(),
});
export default function ReviewForm({ setOpenModal, setReviews }) {
  return (
    <View style={{ height: "100%" }}>
      <Formik
        initialValues={{ name: "", rating: "", comment: "", date: "Today" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          console.log("ReviewForm -> values", values);
          setReviews((prevState) => [values, ...prevState]);
          actions.resetForm();
          setOpenModal(false);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={globalStyles.alignCenter}>
            <Text style={globalStyles.text}>Review form</Text>
            <Input
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              placeholder="Your name"
            />
            <Text> {errors.name && errors.name} </Text>
            <Input
              onChangeText={handleChange("rating")}
              onBlur={handleBlur("rating")}
              value={values.rating}
              keyboardType="numeric"
              placeholder="Rating(1-5)"
              maxLength={5}
            />
            <Text> {errors.rating && errors.rating} </Text>
            <Input
              multiline
              onChangeText={handleChange("comment")}
              onBlur={handleBlur("comment")}
              value={values.comment}
              placeholder="Comments..."
            />
            <Text> {errors.comment && errors.comment1} </Text>
            <View>
              <Button onPress={handleSubmit} title="Submit" />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
