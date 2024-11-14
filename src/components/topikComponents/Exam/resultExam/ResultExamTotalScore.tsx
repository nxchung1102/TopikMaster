import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
type ResultExamTotalScoreType = {
  sectionLength: number;
  dataResult: any;
};
const ResultExamTotalScore = (props: ResultExamTotalScoreType) => {
  const {sectionLength, dataResult} = props;
  return (
    sectionLength > 1 && (
      <View style={styles.container}>
        <View style={sectionLength > 1 ? styles.titleHeades : styles.titleHead}>
          <Text style={{color: 'black'}}>Tổng điểm</Text>
        </View>

        <View style={styles.totalScore}>
          <Text style={styles.textScore}>
            {dataResult.data.totalScore}/{sectionLength * 100}
          </Text>
        </View>
      </View>
    )
  );
};

export default ResultExamTotalScore;

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
  titleHeades: {
    borderWidth: 0.2,
    borderColor: '#D5DCE5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalScore: {
    borderWidth: 0.2,
    borderColor: '#D5DCE5',
    flex: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textScore: {
    fontWeight: '600',
    color: 'black',
  },
});
