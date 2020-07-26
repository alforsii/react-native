import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function CustomFlatList() {
  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "bowser", id: "7" },
  ]);

  const handleTouch = (id) => {
    const updatePeople = people.filter((item) => item.id != id);
    setPeople(updatePeople);
  };
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleTouch(item.id)}>
            <Text style={styles.text}> {item.name} </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    margin: 20,
    backgroundColor: "pink",
    fontSize: 72,
  },
});
