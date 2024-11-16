import {StyleSheet, View} from 'react-native';
import {DarkPink} from '../../../../../../util/Theme/ThemeGlobal';
import CloseSolution from './CloseSolution';
import NextSection from './NextSection';
interface HeaderSolutionProps {
  sections: any[];
}
const HeaderSolution = (props: HeaderSolutionProps) => {
  const {sections} = props;

  return (
    <View
      style={{
        backgroundColor: DarkPink,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
      }}>
      <CloseSolution />
      <NextSection data={sections} />
    </View>
  );
};

export default HeaderSolution;

const styles = StyleSheet.create({});
