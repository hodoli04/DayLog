import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

function FeedsScreen({navigation}) {
  return (
    <View style={styles.block}>
      <Text>Feeds</Text>
      <Button
        title="go to WriteScreen"
        onPress={() => navigation.push('Write')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  block: {},
});

export default FeedsScreen;
