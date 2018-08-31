import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
    uri: 'http://localhost:8085'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

const App = () => <div>THIS IS IT</div>;

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById("root"
));