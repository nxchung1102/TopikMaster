import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {ExamContext} from '../../../Context/Topik/Exam/DoingExamProvider';
import {useNavigation} from '@react-navigation/native';
import {findQuestion} from '../../../../util/topik/findQuestion';
import {getIdxByQuestion} from '../../../../util/topik/getIdxByCurrQuestion';
import {storageData} from '../../../../util/topik/AsyncStorage';
import {getNameSectionByType} from '../../../../util/topik/getNameSectionByType';

interface ExitModalContentProps {
  handleCloseModal?: () => void;
  slideAnim: Animated.Value;
  img?: any;
}
const ExitModalContent = (props: ExitModalContentProps) => {
  const {handleCloseModal, slideAnim, img} = props;
  const {examData, idxPart, idxQuestion} = useContext(ExamContext);
  const currentQ = findQuestion(examData, idxPart, idxQuestion);
  let typeSection = parseInt(examData?.data?.typeSection + '');
  const keyStore =
    examData?.data.groupId + '' + getNameSectionByType(typeSection);
  const navigation = useNavigation<any>();

  const closeExit = () => {
    Animated.timing(slideAnim, {
      toValue: -500,
      duration: 500,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start(handleCloseModal);
  };
  const confirmExit = () => {
    Animated.timing(slideAnim, {
      toValue: -500,
      duration: 500,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start(handleCloseModal);
    if (typeSection !== 1) {
      storageData(keyStore, currentQ);
    }
    navigation.navigate('DetailCourse', {
      idCourse: examData?.data?.groupId,
    });
  };
  return (
    <View style={styles.modalBackground}>
      <Animated.View
        style={[styles.modalContent, {transform: [{translateY: slideAnim}]}]}>
        <Image
          source={img}
          resizeMode="contain"
          style={{width: '30%', height: '30%'}}
        />
        <Text style={styles.modalTitle}> Thoát ra ngoài </Text>
        <Text style={styles.modalText}>
          Câu trả lời của bạn sẽ được lưu lại.
        </Text>
        <Text style={styles.modalText}>Bạn chắc chắn muốn thoát ra ngoài?</Text>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFF2F1',
              padding: 5,
              paddingHorizontal: 25,
              borderRadius: 20,
              marginHorizontal: 10,
            }}
            onPress={closeExit}>
            <Text style={[styles.closeText, {color: '#FF5F7A'}]}>Ở lại</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FF5F7A',
              padding: 5,
              paddingHorizontal: 20,
              borderRadius: 20,
              marginHorizontal: 10,
            }}
            onPress={confirmExit}>
            <Text style={[styles.closeText, {color: '#fff'}]}>Thoát</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default ExitModalContent;

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
