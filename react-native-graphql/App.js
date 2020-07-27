import React from "react";
import { AsyncStorage, Text } from "react-native";
import MyRootComponent from "./MyRootComponent";
import { ApolloProvider } from "react-apollo";

import { makeApolloClient } from "./ApolloBoost";
// import makeApolloClient from "./ApolloClient";

// const uri = process.env.REACT_APP_BASE_URL;

export default function App() {
  const [client, setClient] = React.useState(null);
  const fetchSession = async () => {
    // // fetch session
    // const session = await AsyncStorage.getItem("@todo-graphql:session");
    // const sessionObj = JSON.parse(session);
    // const { token, id } = sessionObj;
    // const client = makeApolloClient(token);
    const client = makeApolloClient();
    setClient(client);
  };
  React.useEffect(() => {
    fetchSession();
  }, []);
  if (!client) {
    return <Text>Loading...</Text>;
  }
  return (
    <ApolloProvider client={client}>
      <MyRootComponent />
    </ApolloProvider>
  );
}
