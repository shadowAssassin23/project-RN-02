import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import FlatCards from './components/FlatCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style = {{padding:16}}>
        <FlatCards />
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default App;