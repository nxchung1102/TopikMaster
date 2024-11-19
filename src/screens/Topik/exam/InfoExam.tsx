import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import HeaderLeft from '../../../components/topikComponents/Exam/Header/HeaderLeft';
import LoadingModal from '../../../components/topikComponents/Exam/Modal/LoadingModal';
import {getInfoExam} from '../../../Service/topikService/axiosTopik';
import {InfoExamType} from '../../../util/GlobalType';
import {getData, storageData} from '../../../util/topik/AsyncStorage';
import {getNameSectionByType} from '../../../util/topik/getNameSectionByType';
import ListenInfo from '../../../components/topikComponents/Exam/infoExam/ListeningInfo';
import ReadingInfo from '../../../components/topikComponents/Exam/infoExam/ReadingInfo';
import WritingInfo from '../../../components/topikComponents/Exam/infoExam/WritingInfo';
const screenHeight = Dimensions.get('window').height;
const modalHeight = 200;
const InfoExam = ({route}: any) => {
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
      } else {
        navigation.navigate('DoingExam', {
          ieltsId: dataInfo?.data?.ieltsId,
          sectionLength: dataInfo?.data.sections.filter(
            item => item.status !== 4,
          ).length,
        });
      }
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoading && <LoadingModal isLoading={isLoading} />}
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              maxHeight: '10%',
              flex: 1,
              backgroundColor: '#FF5F7A',
            }}>
            <HeaderLeft
              modalHeight={modalHeight}
              screenHeight={screenHeight}
              slideAnim={slideAnim}
            />
          </View>
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
        <View style={styles.container}></View>
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
