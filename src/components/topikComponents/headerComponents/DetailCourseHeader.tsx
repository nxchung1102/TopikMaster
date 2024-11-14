import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import HeaderRight from '../Exam/HeaderRight';

type DetailCourseHeaderType = {
  handleHeaderPress?:
    | ((event: GestureResponderEvent) => void)
    | null
    | undefined;
  handleBack?: ((event: GestureResponderEvent) => void) | undefined;
};

const DetailCourseHeader = (props: DetailCourseHeaderType) => {
  return (
    <Pressable
      style={{
        backgroundColor: '#fff2f1',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        maxHeight: '10%',
        flex: 1,
      }}
      onPress={props.handleHeaderPress}>
      <TouchableOpacity activeOpacity={1} onPress={props.handleBack}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 5,
          }}>
          <FontAwesome6 name="chevron-left" size={18} color="#324357" />
          <Text style={{color: 'black', fontSize: 16, marginLeft: 5}}>
            Quay lại
          </Text>
        </View>
      </TouchableOpacity>
      <HeaderRight />
    </Pressable>
  );
};

export default DetailCourseHeader;

const styles = StyleSheet.create({});
