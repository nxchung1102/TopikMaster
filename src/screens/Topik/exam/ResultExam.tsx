import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ResultExamBanner from '../../../components/topikComponents/Exam/resultExam/ResultExamBanner';
import ResultExamHeaderRight from '../../../components/topikComponents/Exam/resultExam/ResultExamHeaderRight';
import ResultExamLevel from '../../../components/topikComponents/Exam/resultExam/ResultExamLevel';
import ResultExamScoreSection from '../../../components/topikComponents/Exam/resultExam/ResultExamScoreSection';
import ResultExamShowAnswer from '../../../components/topikComponents/Exam/resultExam/ResultExamShowAnswer';
import ResultExamTotalScore from '../../../components/topikComponents/Exam/resultExam/ResultExamTotalScore';
import Tooltip from '../../../components/topikComponents/Exam/resultExam/Table/Tooltip';
import {getResultCourse} from '../../../Service/topikService/axiosTopik';

export default function ResultExam({route}: any) {
  const [showTooltip, setShowTooltip] = useState(false);
  const {idCourse} = route.params;
  const navigation = useNavigation<any>();
  const [dataResult, setDataResult] = useState<any>(null);
  const sections = dataResult?.data?.sections;
  const sectionLength = sections?.length;

  useEffect(() => {
    getResultCourse(idCourse)
      .then(rs => {
        setDataResult(rs);
      })
      .catch(e => console.log(e));
  }, []);

  const handleShowTooltip = () => {
    setShowTooltip(true);
  };
  const handleHideTooltip = () => {
    setShowTooltip(false);
  };
  return (
    dataResult && (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff2f1'}}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 10,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <AntDesign name="close" color="gray" size={16} />
          </TouchableOpacity>
          <ResultExamHeaderRight handleShowTooltip={handleShowTooltip} />
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.content}>
            <ResultExamBanner />
            <View style={sectionLength > 1 ? styles.sections : styles.section}>
              <ResultExamShowAnswer section={sections} />
              <ResultExamScoreSection section={sections} />
              <ResultExamTotalScore
                sectionLength={sectionLength}
                dataResult={dataResult}
              />
              <ResultExamLevel
                sectionLength={sectionLength}
                dataResult={dataResult}
              />
            </View>
          </View>
          <View style={styles.stuffing}></View>
          <Modal
            transparent
            visible={showTooltip}
            onRequestClose={() => {
              setShowTooltip(false);
            }}
            style={{flex: 1}}>
            <Tooltip handleHideTooltip={handleHideTooltip} />
          </Modal>
        </ScrollView>
      </SafeAreaView>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF2F1',
    display: 'flex',
  },
  header: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: '10%',
    backgroundColor: '#FFF2F1',
  },
  content: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: 'center',
    display: 'flex',
    flex: 2.5,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  stuffing: {flex: 3, height: 50},

  sections: {
    display: 'flex',
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'center',
    borderWidth: 0.6,
    borderColor: '#D5DCE5',
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'center',
    borderWidth: 0.6,
    borderColor: '#D5DCE5',
    maxWidth: '80%',
  },
});
