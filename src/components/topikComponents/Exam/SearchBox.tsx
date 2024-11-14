import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const searchBox = () => {
  return (
    <View style={styles.searchWrapper}>
      <Text style={styles.titleSearch}>Hôm nay bạn muốn học gì?</Text>
      <Text style={styles.textSearch}>
        Nhập mã đề thi hoặc bài học để bắt đầu ngay
      </Text>
      <View style={styles.search}>
        <TextInput
          placeholder="Nhập mã"
          placeholderTextColor="#C9DABF"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.searchBtn} onPress={Keyboard.dismiss}>
          <Text>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default searchBox;

const styles = StyleSheet.create({
  searchWrapper: {
    backgroundColor: '#fff6f6',
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginVertical: 20,
  },
  titleSearch: {
    color: '#FF5F7A',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textSearch: {
    color: '#5c6774',
    marginBottom: 10,
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  searchInput: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FF5F7A',
    width: 235,
    height: 35,
    padding: 10,
  },
  searchBtn: {
    backgroundColor: '#FF5F7A',
    borderRadius: 50,
    width: 100,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
