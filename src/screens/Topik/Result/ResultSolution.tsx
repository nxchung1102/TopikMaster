import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Solution from '../../../components/topikComponents/Exam/resultExam/Solution/Body/Solution';
import FooterSolution from '../../../components/topikComponents/Exam/resultExam/Solution/Footer/FooterSolution';
import HeaderSolution from '../../../components/topikComponents/Exam/resultExam/Solution/Header/HeaderSolution';
import {getResultCourse} from '../../../Service/topikService/axiosTopik';
import {
  ResultExamProvider,
  useDataResult,
} from '../../../components/Context/Topik/Result/ResultExamProvider';

const ResultSolution = ({route}: any) => {
  const {idConfig, typeSection} = route.params;

  return (
    <ResultExamProvider>
      <ResultContent currTypeSection={typeSection} idConfig={idConfig} />
    </ResultExamProvider>
  );
};

interface ResultContentProps {
  idConfig: string;
  currTypeSection: number;
}
const ResultContent = (props: ResultContentProps) => {
  const {idConfig, currTypeSection} = props;
  const {setTypeSection, setData} = useDataResult();
  const [sections, setSections] = useState<any[]>([]);

  useEffect(() => {
    setTypeSection(currTypeSection);
    getResultCourse(idConfig)
      .then(rs => {
        const data = rs.data.sections.find(
          (item: {typeSection: any}) => item.typeSection === currTypeSection,
        );
        setData(data);
        setSections(rs.data.sections);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderSolution sections={sections} />
      <Solution />
      <FooterSolution />
    </SafeAreaView>
  );
};

export default ResultSolution;

const styles = StyleSheet.create({});
