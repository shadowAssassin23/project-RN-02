import React from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{padding: 16}}>
          <FlatCards />
          <ElevatedCards />
          <FancyCards />
          <ActionCard />
          <ContactList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
