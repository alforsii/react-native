import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import TopTabs from "./TopTabs";
import BottomTabs from "./BottomTabs";
import Heder from "../../components/Header";
import { CustomButton } from "../../components/CustomButton";
const Stack = createStackNavigator();

export const TabStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        options={({ navigation }) => ({
          headerTitle: (props) => (
            <Heder navigation={navigation} title="Tabs" />
          ),
        })}
        component={Tabs}
      />
      <Stack.Screen name="TopTabs" component={TopTabs} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

function Tabs({ navigation }) {
  return (
    <View>
      <CustomButton
        title="Top Tabs"
        onPress={() => navigation.navigate("TopTabs")}
      />
      <CustomButton
        title="Bottom Tabs"
        onPress={() => navigation.navigate("BottomTabs")}
      />
    </View>
  );
}

export default TabStacks;
