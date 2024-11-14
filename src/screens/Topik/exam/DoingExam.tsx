import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {DoingExamProvider} from '../../../components/Context/Topik/Exam/DoingExamProvider';
import BodyExam from '../../../components/topikComponents/Exam/Body/BodyExam';
import FooterExam from '../../../components/topikComponents/Exam/Footer/FooterExam';
import HeaderExam from '../../../components/topikComponents/Exam/Header/HeaderExam';

const DoingExam = ({route}: any) => {
  const {ieltsId, dataStore, sectionLength} = route.params;
  return (
    <DoingExamProvider>
      <SafeAreaView style={{flex: 1}}>
        <HeaderExam sectionLength={sectionLength} />
        <BodyExam ieltsId={ieltsId} dataStore={dataStore} />
        <FooterExam />
      </SafeAreaView>
    </DoingExamProvider>
  );
};

export default DoingExam;

const styles = StyleSheet.create({});
