import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {InfoExamType} from '../../../../util/GlobalType';
type ListenInfoType = {
  dataInfo: InfoExamType;
  handleRoute: () => void;
};

const ListenInfo = ({dataInfo, handleRoute}: ListenInfoType) => {
  return (
    <View>
      {dataInfo.data.typeSectionNow === 1 && (
        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
          Phần thi: Nghe
        </Text>
      )}
      <View style={styles.containerTable}>
        {/* row1 */}
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.txtTable}>Thời gian</Text>
          </View>
          <View style={styles.col}>
            {dataInfo.data.typeSectionNow === 1 && (
              <Text style={styles.txtTable}>
                {dataInfo?.data.sectionListening?.duration} phút
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
            {dataInfo.data.typeSectionNow === 1 && (
              <Text style={styles.txtTable}>
                {dataInfo?.data.sectionListening?.totalQuestion} câu
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
      {dataInfo.data.typeSectionNow === 1 && (
        <>
          <Text style={{color: 'black', marginVertical: 5}}>
            1. Để kiểm tra audio trước khi bắt đầu, hãy bấm{'\n'}
            <Text style={{color: '#5685FF', fontWeight: 'bold'}}>
              Nghe thử audio
            </Text>
            .
          </Text>
          <Text style={{color: 'black', marginVertical: 5}}>
            2. Khi hết thời gian của audio, hệ thống sẽ tự động chuyển sang câu
            tiếp theo. Bạn không thể quay lại câu hỏi trước đó để làm lại.
          </Text>
          <Text style={{color: 'black', marginVertical: 5}}>
            3. Trong phần thi Nghe, bạn không được tự chọn câu hỏi. Hệ thống sẽ
            tự động phát các câu hỏi theo thứ tự.
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

export default ListenInfo;

const styles = StyleSheet.create({
  containerTable: {borderWidth: 0.5, marginVertical: 10},
  row: {flexDirection: 'row', borderWidth: 0.5},
  col: {flex: 1, borderWidth: 0.5, padding: 5},
  txtTable: {color: 'black'},
});
