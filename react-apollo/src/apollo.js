import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/', //fucking localhost graphql
});

export default client;
