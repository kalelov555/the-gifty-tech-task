import {Button} from 'antd-mobile-rn';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App!</Text>
      <Text style={styles.paragraph}>Click to see new page.</Text>
      <Button
        onPressIn={() => navigation.navigate('Content')}
        type="warning"
        style={styles.button}
        size="large">
        {'Page 2 ->'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    marginBottom: 8,
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: '#14213d',
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  button: {
    width: 200,
    display: 'flex',
    alignSelf: 'center',
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
});
