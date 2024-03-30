import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ContentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Content Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e5e5e5',
    flex: 1,
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
