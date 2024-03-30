import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Navigator} from './src/navigator/Navigator';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});

function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        <Navigator />
      </SafeAreaView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
