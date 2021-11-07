/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import Cabecera from './src/components/cabecera';
import BucketList from './src/components/buckets/bucketList';

const buckets = [
  {
    id: 1,
    title: "Ilustration",
    background: "#9EEFAF",
  },
  {
    id: 2,
    title: "Interface",
    background: "#5EA4FF",
  },
  {
    id: 3,
    title: "Web UI",
    background: "#FABF88",
  },
];

const App = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        <Cabecera/>
        <BucketList buckets={buckets}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
