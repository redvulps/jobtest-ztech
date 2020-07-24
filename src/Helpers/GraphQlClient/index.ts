import fetch from "cross-fetch";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: "https://api.code-challenge.ze.delivery/public/graphql",
    fetch,
  }),
});

export default client;
