import React, {useRef} from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    Animated,
    useWindowDimensions,
  } from 'react-native';

const BucketList = props => {
  const {buckets} = props;

  
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Buckets</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginLeft: 16,
  },
  textTitle: {
    fontSize: 30,
  }
});

export default BucketList;