import {Animated, StyleSheet, Text, View} from 'react-native';
import React from 'react';
interface EndTimeModalContentProps {
  slideAnim: Animated.Value;
  timeRemaining: number;
}
const EndTimeModalContent = (props: EndTimeModalContentProps) => {
  const {slideAnim, timeRemaining} = props;
  return (
    <View style={styles.modalBackground}>
      <Animated.View
        style={[styles.modalContent, {transform: [{translateY: slideAnim}]}]}>
        <Text style={{color: '#FF5F7A', fontWeight: 'bold', fontSize: 50}}>
          {timeRemaining}
        </Text>
        <Text style={styles.modalTitle}> Hết giờ làm bài </Text>
        <Text style={styles.modalText}>
          Hệ thống sẽ tự chuyển sang phần tiếp theo sau 5 giây.
        </Text>
      </Animated.View>
    </View>
  );
};

export default EndTimeModalContent;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: '15%',
    alignItems: 'center',
    height: '33.333%',
  },
  modalTitle: {
    color: '#333',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
  },
  modalText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  closeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
