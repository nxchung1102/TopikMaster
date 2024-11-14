import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ResultExamBanner = () => {
  return (
    <View style={styles.banner}>
      <Image
        source={require('../../../../img/topikImg/star-result.png')}
        resizeMode="contain"
        style={{width: 130, height: 80}}
      />
      <View style={{marginBottom: 5}}>
        <Text style={styles.textTitleBanner}>Hoàn thành bài kiểm tra!</Text>
      </View>
      <View>
        <Text style={styles.textBanner}>
          Chúc mừng bạn đã vượt qua bài kiểm tra.
        </Text>
      </View>
      <View>
        <Text style={styles.textBanner}>
          Để biết đáp án chi tiết, hãy bấm vào Xem đáp án nhé.
        </Text>
      </View>
    </View>
  );
};

export default ResultExamBanner;

const styles = StyleSheet.create({
  banner: {alignItems: 'center', flex: 1.5, paddingBottom: 20},
  textBanner: {
    fontSize: 13,
    color: 'black',
    fontWeight: '300',
  },
  textTitleBanner: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FF5F7A',
  },
});
