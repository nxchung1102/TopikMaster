import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LoadingModal = ({isLoading}: {isLoading: boolean}) => {
  return (
    <Modal visible={isLoading} transparent style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(52, 52, 52, 0.5)',
        }}>
        <Text style={{color: '#BFC3CB', fontWeight: 'bold', fontSize: 25}}>
          Đang tải dữ liệu
        </Text>
      </View>
    </Modal>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({});
