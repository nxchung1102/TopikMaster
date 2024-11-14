import React, {useState} from 'react';
import {
  Dimensions,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ReportHeader from '../../components/topikComponents/headerComponents/ReportHeader';
import ProgressReport from '../../components/topikComponents/reportComponents/LatestTestResult';

const {width, height} = Dimensions.get('window');
const Report = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{flex: 1, backgroundColor: '#fff2f1', paddingHorizontal: 15}}>
        {/* header */}
        <ReportHeader />
        {/* title */}
        <Text
          style={{
            color: '#FF5F7A',
            fontSize: 20,
            fontWeight: 'bold',
            marginVertical: 15,
          }}>
          <Feather name="book" color="#FF5F7A" size={30} /> TOPIK Master
        </Text>
        {/* latest test result */}
        <View
          style={{
            padding: 20,
            backgroundColor: '#fff',
            marginVertical: 10,
            flex: 2.5,
            borderRadius: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#324357', fontSize: 18, fontWeight: 'bold'}}>
              Đề thi tiêu chuẩn
            </Text>
            <Pressable
              onPress={() => {
                setModalVisible(true);
              }}>
              <MaterialIcons name="error-outline" color="#E7EBF0" size={18} />
            </Pressable>
          </View>
          <Modal
            visible={modalVisible}
            transparent
            onRequestClose={() => {
              setModalVisible(false);
            }}>
            <View style={{width, height}}>
              <Pressable
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPressOut={() => {
                  setModalVisible(false);
                }}>
                <TouchableWithoutFeedback>
                  <View
                    style={{
                      backgroundColor: '#D5DCE5',
                      borderRadius: 3,
                      marginBottom: '120%',
                      marginLeft: '50%',
                      padding: 2,
                    }}>
                    <Text
                      style={{
                        color: '#324357',
                        fontSize: 11,
                        fontWeight: '700',
                        textAlign: 'center',
                      }}>
                      Kết quả làm bài mới nhất
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </Pressable>
            </View>
          </Modal>
          <View>
            <ProgressReport
              score="0"
              title="Điểm thi"
              type="scale"
              totalScore="200"
            />
            <ProgressReport score="0" title="Trình độ" type="target" />
          </View>
        </View>
        <View
          style={{flex: 7, backgroundColor: '#fff', borderRadius: 20}}></View>
        <View style={{flex: 1}}></View>
      </View>
    </SafeAreaView>
  );
};

export default Report;

const styles = StyleSheet.create({});
