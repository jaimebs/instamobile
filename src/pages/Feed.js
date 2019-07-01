import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import api from '../services/api';

import camera from '../assets/camera.png';

export default class Feed extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('New')}>
        <Image source={camera} />
      </TouchableOpacity>
    )
  });

  state = {
    feeds: []
  };

  async componentDidMount() {
    const posts = await api.get('posts');
    this.setState({ feeds: posts.data });
    //this.registerToSocket();
    console.log(posts.data);
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.feeds}
          keyExtractor={post => post._id}
          renderItem={({ item }) => <Text>{item.author}</Text>}
        />
      </View>
    );
  }
}
