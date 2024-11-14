import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type ProgressReportType = {
  title: string;
  score: string;
  totalScore?: string;
  type: 'scale' | 'target';
};
const ProgressReport = (props: ProgressReportType) => {
  return (
    <View style={{flexDirection: 'row', marginVertical: 5}}>
      <Image
        source={
          props.type === 'scale'
            ? require('../../../img/topikImg/scale.png')
            : require('../../../img/topikImg/target.png')
        }
        resizeMode="contain"
        style={{width: 40, height: 40}}
      />
      <View style={{marginHorizontal: 10}}>
        <Text style={{color: '#324357', fontWeight: '500'}}>{props.title}</Text>

        <Text style={{color: '#E7EBF0', fontSize: 18}}>
          <Text style={{color: '#FF5F7A', fontWeight: 'bold'}}>
            {props.score}
          </Text>
          {props.type === 'scale' ? (
            <Text>\{props.totalScore}</Text>
          ) : (
            <Text></Text>
          )}
        </Text>
      </View>
    </View>
  );
};

export default ProgressReport;

const styles = StyleSheet.create({});
