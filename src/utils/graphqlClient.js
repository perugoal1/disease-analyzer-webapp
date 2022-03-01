import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api.platform.opentargets.org/api/v4/graphql',
    cache: new InMemoryCache()
});
  
export {
    ApolloProvider,
    client,
    gql,
    useQuery,
}