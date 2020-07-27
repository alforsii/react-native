import ApolloClient, { InMemoryCache, HttpLink } from "apollo-boost";

export const makeApolloClient = () => {
  // create an inmemory cache instance for caching graphql data
  const cache = new InMemoryCache();
  // instantiate apollo client with apollo link instance and cache instance
  const client = new ApolloClient({
    uri: `http://localhost:3001/graphql`,
    cache,
  });
  return client;
};
