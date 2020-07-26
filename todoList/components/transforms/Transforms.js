import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
} from "react-native";
import { transforms } from "./data";
import FocusAwareStatusBar from "../FocusedStatusBar";

export const TransformsExample = () => {
  return (
    <SafeAreaView>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#fff" />
      <SectionList
        contentContainerStyle={styles.list}
        sections={transforms}
        keyExtractor={(item) => item.title}
        renderItem={({ item, section }) => (
          <View
            style={[
              styles.box,
              {
                transform: item.transform,
              },
            ]}
          >
            <Text>{section.title}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.listHeader}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  list: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginVertical: 50,
    backgroundColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 8,
    color: "#000",
  },
  listHeader: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: "#999",
    fontSize: 16,
    marginBottom: 10,
    textTransform: "uppercase",
  },
});

export default TransformsExample;
