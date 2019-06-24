import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bem vindo Jaime!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9326c1'
  },
  welcome: {
    fontSize: 28,
    color: '#fdfdfd',
    textAlign: 'center',
    margin: 10
  }
});
