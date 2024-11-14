import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
interface ResultExamHeaderRightProps {
  handleShowTooltip: () => void;
}
const ResultExamHeaderRight = (props: ResultExamHeaderRightProps) => {
  const {handleShowTooltip} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 10,
        flex: 1,
      }}>
      <Pressable
        style={{marginRight: 10, flexDirection: 'row'}}
        onPress={handleShowTooltip}>
        <MaterialIcons name="error-outline" color="#5c6774" size={18} />
        <Text style={{color: '#5c6774', marginRight: 10}}>
          Thang điểm TOPIK
        </Text>
      </Pressable>
      <TouchableOpacity
        style={{
          backgroundColor: '#00C259',
          paddingHorizontal: 15,
          paddingVertical: 7,
          borderRadius: 50,
        }}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Làm lại</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResultExamHeaderRight;

const styles = StyleSheet.create({});
