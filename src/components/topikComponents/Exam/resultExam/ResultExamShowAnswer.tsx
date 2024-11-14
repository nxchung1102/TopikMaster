import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type ResultExamShowAnswerType = {
  section: any[];
};

const ResultExamShowAnswer = (props: ResultExamShowAnswerType) => {
  const {section} = props;
  const sectionLength = section.length;
  const handleRout = () => {};
  return (
    <View style={sectionLength > 1 ? styles.manyContainer : styles.container}>
      <View style={sectionLength > 1 ? styles.headItems : styles.headItem}>
        <Text></Text>
      </View>
      {section.map((item, i) => {
        return (
          <View style={styles.item} key={i}>
            <View style={styles.answerContainer}>
              <Text style={styles.textTitleAnswer}>
                {item.typeSection === 1
                  ? 'Nghe'
                  : item.typeSection === 2
                  ? 'Đọc'
                  : 'Viết'}
              </Text>
            </View>
            <View style={styles.answerContainer}>
              <TouchableOpacity
                style={styles.btnCheckAnswer}
                onPress={handleRout}>
                <Text style={styles.textBtnCheckAnswer}>Xem đáp án</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ResultExamShowAnswer;

const styles = StyleSheet.create({
  manyContainer: {borderColor: '#D5DCE5', borderWidth: 0.2, flex: 3},
  container: {borderColor: '#D5DCE5', borderWidth: 0.2, flex: 3},
  headItems: {
    borderWidth: 0.2,
    borderColor: '#D5DCE5',
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8.5,
  },
  headItem: {
    borderWidth: 0.2,
    borderColor: '#D5DCE5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    maxHeight: '20%',
  },
  item: {
    borderWidth: 0.2,
    borderColor: '#D5DCE5',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCheckAnswer: {
    backgroundColor: '#F1F4FC',
    padding: 8,
    borderRadius: 5,
  },
  textBtnCheckAnswer: {
    color: '#7985FF',
    fontWeight: '400',
  },
  answerContainer: {
    display: 'flex',
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginBottom: 15,
  },

  textTitleAnswer: {
    fontWeight: 'bold',
    color: 'black',
  },
});
