import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {InfoExamType} from '../../../../util/GlobalType';
type WritingInfoType = {
  dataInfo: InfoExamType;
  handleRoute: () => void;
};

const WritingInfo = ({dataInfo, handleRoute}: WritingInfoType) => {
  return (
    <View>
      {dataInfo.data.typeSectionNow === 3 && (
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
          Phần thi: Viết
        </Text>
      )}
      <View style={styles.containerTable}>
        {/* row1 */}
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.txtTable}>Thời gian</Text>
          </View>
          <View style={styles.col}>
            {dataInfo.data.typeSectionNow === 3 && (
              <Text style={styles.txtTable}>
                {dataInfo?.data.sectionWriting?.duration} phút
              </Text>
            )}
          </View>
        </View>
        {/* row2 */}
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.txtTable}>Số câu hỏi</Text>
          </View>
          <View style={styles.col}>
            {dataInfo.data.typeSectionNow === 3 && (
              <Text style={styles.txtTable}>
                {dataInfo?.data.sectionWriting?.totalQuestion} câu
              </Text>
            )}
          </View>
        </View>
        {/* row3 */}
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.txtTable}>Tổng điểm</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.txtTable}>100 điểm</Text>
          </View>
        </View>
      </View>
      <Text style={{color: 'black', fontWeight: 'bold'}}>
        Hướng dẫn làm bài
      </Text>
      {dataInfo.data.typeSectionNow === 3 && (
        <>
          <Text style={{color: 'black', marginVertical: 5}}>
            Trong phần thi này, bạn có thể tự chọn câu hỏi, và chuyển câu trước
            hoặc câu sau.
          </Text>
        </>
      )}

      <Pressable
        style={{
          backgroundColor: '#FF5F7A',
          width: '30%',
          padding: 8,
          alignSelf: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          marginVertical: 5,
        }}
        onPress={handleRoute}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#fff'}}>
          Tiếp tục
        </Text>
      </Pressable>
    </View>
  );
};

export default WritingInfo;

const styles = StyleSheet.create({
  containerTable: {borderWidth: 0.5, marginVertical: 10},
  row: {flexDirection: 'row', borderWidth: 0.5},
  col: {flex: 1, borderWidth: 0.5, padding: 5},
  txtTable: {color: 'black'},
});
