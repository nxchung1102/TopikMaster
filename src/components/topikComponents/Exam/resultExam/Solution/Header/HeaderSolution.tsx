import {StyleSheet, View} from 'react-native';
import {DarkPink} from '../../../../../../util/Theme/ThemeGlobal';
import CloseSolution from './CloseSolution';
import NextSection from './NextSection';
import {useDataResult} from '../../../../../Context/Topik/Result/ResultExamProvider';
interface HeaderSolutionProps {
  sections: any[];
}
const HeaderSolution = (props: HeaderSolutionProps) => {
  const {sections} = props;
  const {setIsShow} = useDataResult();

  return (
    <View
      style={{
        backgroundColor: DarkPink,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
      }}
      onTouchEnd={() => {
        setIsShow(false);
      }}>
      <CloseSolution />
      <NextSection data={sections} />
    </View>
  );
};

export default HeaderSolution;

const styles = StyleSheet.create({});
