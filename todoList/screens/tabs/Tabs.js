import React from "react";
import { ScrollView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import TopTabs from "./TopTabs";
import BottomTabs from "./BottomTabs";
import BottomMaterialTab from "./BottomMaterialTab";
import Heder from "../../components/Header";
import { CustomButton } from "../../components/buttons/CustomButton";
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
      <Stack.Screen name="BottomMaterialTab" component={BottomMaterialTab} />
    </Stack.Navigator>
  );
};

function Tabs({ navigation }) {
  return (
    <ScrollView>
      <CustomButton
        title="Top Tabs"
        onPress={() => navigation.navigate("TopTabs")}
        style={{ backgroundColor: "#ddd", shadowColor: "#777" }}
        textStyle={{ color: "#333" }}
      />
      <CustomButton
        title="Bottom Tabs"
        onPress={() => navigation.navigate("BottomTabs")}
        style={{ backgroundColor: "#ddd", shadowColor: "#777" }}
        textStyle={{ color: "#333" }}
      />
      <CustomButton
        title="Bottom Material Tab"
        onPress={() => navigation.navigate("BottomMaterialTab")}
        style={{ backgroundColor: "#ddd", shadowColor: "#777" }}
        textStyle={{ color: "#333" }}
      />
    </ScrollView>
  );
}

export default TabStacks;
