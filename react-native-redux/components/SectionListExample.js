import React from "react";
import { StyleSheet, Text, TouchableOpacity, SectionList } from "react-native";

export default function SectionListExample() {
  return (
    <SectionList
      style={styles.list}
      sections={SECTIONS}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.listHeader}>{title}</Text>
      )}
    />
  );
}

const SECTIONS = [
  {
    title: "Predefined animations",
    data: [{ title: "Bounce" }, { title: "Ease" }, { title: "Elastic" }],
  },
  {
    title: "Standard functions",
    data: [{ title: "Linear" }, { title: "Quad" }, { title: "Cubic" }],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20232a",
  },
  title: {
    marginTop: 10,
    textAlign: "center",
    color: "#61dafb",
  },
  boxContainer: {
    height: 160,
    alignItems: "center",
  },
  box: {
    marginTop: 32,
    borderRadius: 4,
    backgroundColor: "#61dafb",
  },
  list: {
    backgroundColor: "#fff",
  },
  listHeader: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#f4f4f4",
    color: "#999",
    fontSize: 12,
    textTransform: "uppercase",
  },
  listRow: {
    padding: 8,
  },
});
