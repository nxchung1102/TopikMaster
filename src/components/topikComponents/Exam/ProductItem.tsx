import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DataProps} from '../../../util/GlobalType';

const ProductItem = ({item}: DataProps) => {
  const navigation = useNavigation<any>();

  return (
    <View key={item.id} style={styles.item}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('MainBottomTab', {unFocus: false});
          navigation.navigate('DetailCourse', {
            idCourse: item.id,
          });
        }}>
        <View style={styles.thumbnail}>
          <Image
            source={{
              uri: 'https://english-resource.onluyen.vn/thumbnail/exam/2024/660cd4d0ff73a0a8e3162d59/66139f3c4953a8051526c23a.png',
            }}
            resizeMode="contain"
            style={{width: 120, height: 120, alignItems: 'flex-start'}}
          />
          <View style={{alignItems: 'flex-start'}}>
            <Text style={styles.itemName}>{item.name}</Text>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation.navigate('DetailCourse', {
                  idCourse: item.id,
                });
              }}
              style={styles.itemBtn}>
              <Text
                style={styles.itemBtnText}>{`${item.totalTest} đề thi`}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
    marginBottom: 20,
    marginRight: 20,
    maxWidth: '50%',
  },
  thumbnail: {
    flex: 1,
  },
  itemName: {
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  itemBtn: {
    backgroundColor: '#f1f4fc',
    padding: 10,
    borderRadius: 5,
  },
  itemBtnText: {color: '#5685ff', fontSize: 12, fontWeight: '500'},
});
