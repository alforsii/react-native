import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function ScrollViews() {
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
    console.log(id);
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
      {/* <ScrollView>
        {people.map((person) => (
          <Text style={styles.text} key={person.id}>
            {" "}
            {person.name}{" "}
          </Text>
        ))}
      </ScrollView> */}
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
