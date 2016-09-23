import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

const App = () => (
    <View>
      <Header headerText='Albums!'/>
      <AlbumList />
    </View>
  );


AppRegistry.registerComponent('albums', () => App);
