import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import HeaderLeft from '../../../components/topikComponents/Exam/infoExam/HeaderLeft';
import ListenInfo from '../../../components/topikComponents/Exam/infoExam/ListeningInfo';
import ReadingInfo from '../../../components/topikComponents/Exam/infoExam/ReadingInfo';
import WritingInfo from '../../../components/topikComponents/Exam/infoExam/WritingInfo';
import {
  handleCloseModal,
  handleConfrmModal,
  handleOpenModal,
} from '../../../components/topikComponents/Exam/modalInfo/HandleModal';
import LoadingModal from '../../../components/topikComponents/Exam/Modal/LoadingModal';
import {getInfoExam} from '../../../Service/topikService/axiosTopik';
import ExitModalContent from '../../../components/topikComponents/Exam/modalInfo/ExitModalContent';
import {getNameSectionByType} from '../../../util/topik/getNameSectionByType';
import {getData, storageData} from '../../../util/topik/AsyncStorage';
import {InfoExamType} from '../../../util/GlobalType';
const screenHeight = Dimensions.get('window').height;
const modalHeight = 200;
const InfoExam = ({route}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-500)).current;
  const navigation = useNavigation<any>();
  const [dataInfo, setDataInfo] = useState<InfoExamType>();
  const [isLoading, setIsLoading] = useState(false);
  const {idInfoExam} = route.params;
  const keyStore =
    dataInfo?.data.groupId +
    '' +
    getNameSectionByType(parseInt(dataInfo?.data?.typeSectionNow + ''));
  useEffect(() => {
    storageData(keyStore, 0);
    setIsLoading(true);
    getInfoExam(idInfoExam)
      .then(rs => {
        setIsLoading(false);
        setDataInfo(rs);
      })
      .catch(err => console.log(err));
  }, []);
  useFocusEffect(
    useCallback(() => {
      setIsLoading(true);
      getInfoExam(idInfoExam)
        .then(rs => {
          setIsLoading(false);
          setDataInfo(rs);
        })
        .catch(err => console.log(err));
    }, []),
  );
  const handleOpenModalInfo = () => {
    handleOpenModal({
      modalHeight,
      screenHeight,
      slideAnim,
      handleState() {
        setModalVisible(true);
      },
    });
  };
  const handleCloseModalInfo = () => {
    handleCloseModal({
      slideAnim,
      handleState() {
        setModalVisible(false);
      },
    });
  };
  const handleRoute = () => {
    getData(keyStore).then(rs => {
      if (rs) {
        const data = JSON.parse(rs);
        navigation.navigate('DoingExam', {
          ieltsId: dataInfo?.data?.ieltsId,
          dataStore: data,
          sectionLength: dataInfo?.data.sections.filter(
            item => item.status !== 4,
          ).length,
        });
      }
    });
  };
  const handleExitModal = () => {
    const params = {idCourse: dataInfo?.data.groupId};
    const routeName = 'DetailCourse';
    handleConfrmModal({
      slideAnim,
      params,
      handleState() {
        setModalVisible(false);
      },
      routeName,
      navigation,
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoading && <LoadingModal isLoading={isLoading} />}
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <HeaderLeft handleOpen={handleOpenModalInfo} />
          <View style={{flex: 1}}></View>
          <View style={{flex: 3, paddingHorizontal: 20}}>
            {dataInfo?.data?.typeSectionNow == 1 && (
              <ListenInfo dataInfo={dataInfo} handleRoute={handleRoute} />
            )}
            {dataInfo?.data?.typeSectionNow == 2 && (
              <ReadingInfo dataInfo={dataInfo} handleRoute={handleRoute} />
            )}
            {dataInfo?.data?.typeSectionNow == 3 && (
              <WritingInfo dataInfo={dataInfo} handleRoute={handleRoute} />
            )}
          </View>
        </View>
        <View style={styles.container}>
          <Modal
            transparent
            visible={modalVisible}
            onRequestClose={handleCloseModalInfo}
            animationType="none">
            <View style={styles.modalBackground}>
              <ExitModalContent
                cancelExit={handleExitModal}
                closeModalExit={handleCloseModalInfo}
                img={require('../../../img/topikImg/modalBack.png')}
                slideAnim={slideAnim}
              />
            </View>
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default InfoExam;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
});
