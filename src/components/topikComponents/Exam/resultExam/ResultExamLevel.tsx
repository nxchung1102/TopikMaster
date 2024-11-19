import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type ResultExamLevelType = {
  sectionLength: number;
  dataResult?: any;
};
const ResultExamLevel = (props: ResultExamLevelType) => {
  const {sectionLength, dataResult} = props;
  return (
    sectionLength &&
    sectionLength > 1 && (
      <View style={styles.container}>
        <View style={styles.titleHead}>
          <Text style={{color: 'black'}}>Trình độ</Text>
        </View>

        <View style={styles.level}>
          <Text style={styles.textLevel}>
            {dataResult.data.isSkillTest ? 'Đạt' : 'Không đạt'}
          </Text>
        </View>
      </View>
    )
  );
};

export default ResultExamLevel;

const styles = StyleSheet.create({
  container: {borderColor: '#D5DCE5', borderWidth: 0.2, flex: 2},
  titleHead: {
    borderWidth: 0.2,
    borderColor: '#D5DCE5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '40%',
  },
  level: {
    borderWidth: 0.2,
    borderColor: '#D5DCE5',
    flex: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLevel: {
    fontWeight: '600',
    color: 'black',
  },
});
