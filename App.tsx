import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: 16 }}>
          <FlatCards />
          <ElevatedCards />
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default App;