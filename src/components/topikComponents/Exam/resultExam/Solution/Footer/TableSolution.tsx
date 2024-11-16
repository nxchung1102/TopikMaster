import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {useState} from 'react';
import {
  LightPink,
  DarkPink,
  Light,
  Dark,
} from '../../../../../../util/Theme/ThemeGlobal';

const TableSolution = () => {
  const lstQuestion: any[] = [];
  const [isShowTable, setIsShowTable] = useState(false);
  return (
    <TouchableWithoutFeedback
      onPressOut={() => {
        setIsShowTable(false);
      }}>
      <View
        style={[
          {
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: LightPink,
            padding: 30,
            alignSelf: 'center',
            alignItems: 'center',
            marginBottom: 5,
          },
          isShowTable ? {display: 'flex'} : {display: 'none'},
        ]}>
        {lstQuestion.map((item, i) => {
          return (
            <TouchableWithoutFeedback
              key={i}
              onPressIn={() => {
                // handleSelectQuestion(i)
              }}>
              <View style={{justifyContent: 'center'}}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: DarkPink,
                    minWidth: 40,
                  }}>
                  <Text
                    style={[
                      {
                        textAlign: 'center',
                        padding: 10,
                        fontWeight: 'bold',
                      },
                      // i >= idxStart && i <= idxEnd
                      //   ? {color: Light, backgroundColor: DarkPink}
                      //   : {color: Dark},
                    ]}>
                    {i + 1}
                  </Text>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: DarkPink,
                    backgroundColor: Light,
                    minWidth: 40,
                    paddingVertical: 10,
                  }}>
                  <Text
                    style={{
                      color: Dark,
                      textAlign: 'center',
                      padding: 10,
                      fontWeight: '600',
                    }}>
                    {item.answer !== null &&
                      item.answer !== undefined &&
                      item.answer + 1}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TableSolution;

const styles = StyleSheet.create({});
