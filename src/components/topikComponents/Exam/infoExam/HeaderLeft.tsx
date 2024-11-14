import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

type HeaderLeftType = {
  handleOpen: () => void;
};

const HeaderLeft = (props: HeaderLeftType) => {
  const {handleOpen} = props;
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        maxHeight: '10%',
        flex: 1,
        backgroundColor: '#FF5F7A',
      }}>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 5,
        }}
        onPress={handleOpen}>
        <AntDesign name="close" color="#fff" size={20} />
        <Text>Thoát</Text>
      </Pressable>
    </View>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({});
