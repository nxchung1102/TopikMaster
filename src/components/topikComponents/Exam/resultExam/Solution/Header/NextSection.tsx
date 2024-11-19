import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {DarkPink, Light} from '../../../../../../util/Theme/ThemeGlobal';
import {useDataResult} from '../../../../../Context/Topik/Result/ResultExamProvider';

interface NextSectionProps {
  data?: any[];
}
const NextSection = (props: NextSectionProps) => {
  const {data} = props;
  const {setTypeSection, typeSection, setData, setIdxPart, setIdxQuestion} =
    useDataResult();
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Light,
        paddingVertical: 3,
        borderRadius: 8,
      }}>
      {data?.map((item, i) => {
        return (
          <Pressable
            key={i}
            style={[
              {
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 8,
                marginHorizontal: 3,
              },
              item.typeSection === typeSection ? {backgroundColor: Light} : {},
            ]}
            onPress={() => {
              setTypeSection(item.typeSection);
              setData(item);
              setIdxPart(0), setIdxQuestion(0);
            }}>
            <Text
              style={[
                {fontSize: 16},
                item.typeSection === typeSection ? {color: DarkPink} : {},
              ]}>
              {item.typeSection === 1
                ? 'Nghe'
                : item.typeSection === 3
                ? 'Viết'
                : 'Đọc'}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default NextSection;

const styles = StyleSheet.create({});
