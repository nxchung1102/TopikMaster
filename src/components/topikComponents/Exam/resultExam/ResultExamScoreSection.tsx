import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
type ResultExamScoreSectionType = {
  section: any[];
};
const ResultExamScoreSection = (props: ResultExamScoreSectionType) => {
  const {section} = props;
  const sectionLength = section && section?.length;
  return (
    <View style={sectionLength > 1 ? styles.manyContainer : styles.container}>
      <View style={sectionLength > 1 ? styles.headItems : styles.headItem}>
        <Text style={{color: 'black'}}>Điểm</Text>
      </View>
      {section.map((item, i) => {
        return (
          <View style={styles.item} key={i}>
            <Text style={{color: 'black'}}>
              {item.totalScore}/{item.scoreSection}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default ResultExamScoreSection;

const styles = StyleSheet.create({
  manyContainer: {borderColor: '#D5DCE5', borderWidth: 0.2, flex: 2},
  container: {borderColor: '#D5DCE5', borderWidth: 0.2, flex: 1.5},
  headItem: {
    borderWidth: 0.2,
    borderColor: '#D5DCE5',
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '40%',
  },
  headItems: {
    borderWidth: 0.2,
    borderColor: '#D5DCE5',
    flex: 1.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    borderWidth: 0.2,
    borderColor: '#D5DCE5',
    flex: 4.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
