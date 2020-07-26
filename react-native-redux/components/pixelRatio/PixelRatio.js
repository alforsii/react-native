import React from "react";
import {
  Image,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { useTheme } from "@react-navigation/native";

const size = 50;
const cat = {
  uri: "https://reactnative.dev/docs/assets/p_cat1.png",
  width: size,
  height: size,
};

const PixelRationExample = () => {
  const { colors } = useTheme();
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: colors.card,
        height: Dimensions.get("screen").height - 100,
      }}
      style={{ height: Dimensions.get("screen").height }}
    >
      <View style={{ ...styles.container }}>
        <Text style={{ color: colors.text }}>Current Pixel Ratio is:</Text>
        <Text style={styles.value}>{PixelRatio.get()}</Text>
      </View>
      <View style={{ ...styles.container }}>
        <Text style={{ color: colors.text }}>Current Font Scale is:</Text>
        <Text style={styles.value}>{PixelRatio.getFontScale()}</Text>
      </View>
      <View style={{ ...styles.container }}>
        <Text style={{ color: colors.text }}>
          On this device images with a layout width of
        </Text>
        <Text style={styles.value}>{size} px</Text>
        <Image source={cat} />
      </View>
      <View style={{ ...styles.container }}>
        <Text style={{ color: colors.text }}>
          require images with a pixel width of
        </Text>
        <Text style={styles.value}>
          {PixelRatio.getPixelSizeForLayoutSize(size)} px
        </Text>
        <Image
          source={cat}
          style={{
            width: PixelRatio.getPixelSizeForLayoutSize(size),
            height: PixelRatio.getPixelSizeForLayoutSize(size),
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    fontSize: 24,
    marginBottom: 12,
    marginTop: 4,
  },
});

export default PixelRationExample;
