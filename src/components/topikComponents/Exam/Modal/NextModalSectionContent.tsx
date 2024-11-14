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
import {findQuestion} from '../../../../util/topik/findQuestion';
import {getNameSectionByType} from '../../../../util/topik/getNameSectionByType';
import {ExamContext} from '../../../Context/Topik/Exam/DoingExamProvider';
import {clearData, storageData} from '../../../../util/topik/AsyncStorage';
import {useNavigation} from '@react-navigation/native';

interface NextModalSectionContentProps {
  slideAnim: Animated.Value;
  img?: any;
  handleCloseModal?: () => void;
}

const NextModalSectionContent = (props: NextModalSectionContentProps) => {
  const {slideAnim, img, handleCloseModal} = props;
  const {examData, setStopStorage, resAnwser, reqAnwser} =
    useContext(ExamContext);
  let typeSection = parseInt(examData?.data?.typeSection + '');
  const keyStore =
    examData?.data.groupId + '' + getNameSectionByType(typeSection);
  const navigation = useNavigation<any>();
  const closeNextSection = () => {
    Animated.timing(slideAnim, {
      toValue: -500,
      duration: 500,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start(handleCloseModal);
    setStopStorage(true);
  };
  const confirmFinish = () => {
    Animated.timing(slideAnim, {
      toValue: -500,
      duration: 500,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start(handleCloseModal);
    storageData(keyStore, 0);
    navigation.navigate('InfoExam', {
      idCourse: examData?.data.idConfig,
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
        <Text style={styles.modalTitle}>Hoàn thành phần thi</Text>
        <Text style={styles.modalText}>
          Bạn chắc chắn muốn hoàn thành phần thi?
        </Text>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <TouchableOpacity
            style={styles.btnCloseSubmit}
            onPress={closeNextSection}>
            <Text style={[styles.closeText, {color: '#FF5F7A'}]}>Ở lại</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSubmit} onPress={confirmFinish}>
            <Text style={[styles.closeText, {color: '#fff'}]}>Hoàn thành</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default NextModalSectionContent;

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
  btnCloseSubmit: {
    backgroundColor: '#FFF2F1',
    padding: 5,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  btnSubmit: {
    backgroundColor: '#FF5F7A',
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
