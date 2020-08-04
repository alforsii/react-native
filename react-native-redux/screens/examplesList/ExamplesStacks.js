import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Header from "../../components/Header";
import ExamplesList from "./ExamplesList";
import FlatListExample from "../../components/FlatListExample";
import SectionListExample from "../../components/SectionListExample";
import StackExample from "../../components/statusBar/StackExample";
import Modal from "../../components/Modal";
import LoginModal from "../../components/forms/LoginModal";
import ReviewForm from "../../components/forms/ReviewForm";
import OnRefresh from "../../components/onRefresh/onRefresh";
import ActivityIndicators from "../../components/loaders/ActivityIndicators";
import AppState from "../../components/appState/AppState";
import LinkingExample from "../../components/linking/LinkingExample";
import Todos from "../../components/todos/Todos";
import LoadMore from "../../components/LoadMore";
import Switch from "../../components/Switch";
import Share from "../../components/Share";
import DragAndDrop from "../../components/animations/dragAndDrop/DragAndDrop";

import TopTabs from "../tabs/TopTabs";

const Stack = createStackNavigator();

export default function Animations() {
  return (
    <Stack.Navigator initialRouteName="ExamplesList">
      <Stack.Screen
        name="ExamplesList"
        options={({ navigation, route }) => ({
          headerTitle: (props) => (
            <Header navigation={navigation} {...props} title="ExamplesList" />
          ),
        })}
        component={ExamplesList}
      />
      <Stack.Screen name="FlatList Example" component={FlatListExample} />
      <Stack.Screen name="On refresh" component={OnRefresh} />
      <Stack.Screen name="Activity Indicators" component={ActivityIndicators} />
      <Stack.Screen name="SectionList Example" component={SectionListExample} />
      <Stack.Screen name="StatusBar with Stacks" component={StackExample} />
      <Stack.Screen name="StatusBar with Tabs" component={TopTabs} />
      <Stack.Screen name="App State Change example" component={AppState} />
      <Stack.Screen name="Linking Examples" component={LinkingExample} />
      <Stack.Screen name="Scroll Top and Bottom Examples" component={Todos} />
      <Stack.Screen name="LoadMore when scroll down" component={LoadMore} />
      <Stack.Screen name="Switch" component={Switch} />
      <Stack.Screen name="Share" component={Share} />
      <Stack.Screen name="DragAndDrop" component={DragAndDrop} />
      <Stack.Screen
        name="Modal"
        children={() => (
          <>
            <LoginModal />
            <Modal
              component={ReviewForm}
              title="Leave feedback"
              titleStyle={{
                color: "dodgerblue",
                fontSize: 20,
                position: "absolute",
                right: 10,
              }}
            />
          </>
        )}
      />
    </Stack.Navigator>
  );
}
