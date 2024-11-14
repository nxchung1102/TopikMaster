import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import TableTooltip from './TableTooltip';
import {Light, TransparentTheme} from '../../../../../util/Theme/ThemeGlobal';
interface TooltipProps {
  handleHideTooltip: () => void;
}
export default function Tooltip(props: TooltipProps) {
  const {handleHideTooltip} = props;
  return (
    <Pressable style={styles.content} onPress={handleHideTooltip}>
      <TableTooltip />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: TransparentTheme,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
