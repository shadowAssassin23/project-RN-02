import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 16}}>
          <FlatCards />
          <ElevatedCards />
          <FancyCards />
          <FancyCards />
          <FancyCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
