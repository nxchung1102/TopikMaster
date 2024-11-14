import {DimensionValue, Text} from 'react-native';
import {LightGray, Dark} from '../../../../../util/Theme/ThemeGlobal';

interface HeaderContentProps {
  content?: string;
  space?: DimensionValue;
}

const TableHeader = (props: HeaderContentProps) => {
  const {content, space} = props;
  return (
    <Text
      style={{
        padding: 5,
        borderWidth: 1,
        borderColor: LightGray,
        width: space,
        color: Dark,
        textAlign: 'center',
      }}>
      {content}
    </Text>
  );
};

export default TableHeader;
