import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-paper';

const HeaderRight = () => {
  return (
    <View style={styles.profile}>
      <Avatar.Image
        size={43}
        source={{
          uri: 'https://i.pinimg.com/736x/f3/ae/c6/f3aec6aa1b19b982035d6905ec0ec392.jpg',
        }}
      />
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({profile: {marginRight: 10}});
