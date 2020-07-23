import React from "react";
import { View, Button, Text } from "react-native";
// Using Formik
import { Formik } from "formik";

import Input from "../Input";
import { formStyles } from "./styles";
import { globalStyles } from "../../global/styles/globalStyles";

export default function ReviewForm() {
  return (
    <View style={{ height: "100%" }}>
      <Formik
        initialValues={{ title: "", rating: "", comment: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={globalStyles.alignCenter}>
            <Text style={globalStyles.text}>Review form</Text>
            <Input
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
              placeholder="Review itle"
            />
            <Input
              onChangeText={handleChange("rating")}
              onBlur={handleBlur("rating")}
              value={values.rating}
              keyboardType="numeric"
              placeholder="Rating(1-5)"
              maxLength={5}
            />
            <Input
              multiline
              column={3}
              onChangeText={handleChange("comment")}
              onBlur={handleBlur("comment")}
              value={values.comment}
              placeholder="Comments..."
            />
            <View>
              <Button onPress={handleSubmit} title="Submit" />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}
