import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oeb0jr1ydg01xrh62md1q8/master',
  cache: new InMemoryCache(),
})
