import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');
const week = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

type StrickProps = {
  url: string;
  countStrickText: string;
  strickText: string;
};
const Strick = ({info}: {info: StrickProps}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.strick}>
      {/* hint */}
      <Pressable
        style={{position: 'absolute', top: 5, right: 15}}
        onPress={() => {
          setModalVisible(true);
        }}>
        <MaterialIcons name="error-outline" color="#E7EBF0" size={18} />
      </Pressable>
      {/* count day */}
      <View style={styles.countDay}>
        <View>
          <Image
            resizeMode="contain"
            style={{width: 48, height: 48}}
            source={{uri: info.url}}
          />
        </View>
        <View style={styles.stricktitle}>
          <View style={styles.countStrick}>
            <Text style={styles.countStrickText}> {info.countStrickText} </Text>
            <Text style={styles.countStrickDay}>0 ngày </Text>
          </View>
          <Text style={styles.strickText}>{info.strickText}</Text>
        </View>
      </View>

      {/* modal */}
      <Modal
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={{width, height}}>
          <Pressable
            style={styles.centeredView}
            onPressOut={() => {
              setModalVisible(false);
            }}>
            <TouchableWithoutFeedback>
              <View
                style={{
                  backgroundColor: '#D5DCE5',
                  borderRadius: 3,
                  padding: 2,
                  marginBottom: '70%',
                  marginLeft: '25%',
                }}>
                <Text
                  style={{
                    color: '#324357',
                    fontSize: 12,
                    fontWeight: '700',
                    textAlign: 'center',
                  }}>
                  Kết quả làm bài trên 20% được tính là 1 streak
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </Pressable>
        </View>
      </Modal>

      {/* week */}
      <View style={styles.weeks}>
        {week.map((day, index) => (
          <View style={styles.day} key={index}>
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Strick;

const styles = StyleSheet.create({
  strick: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginVertical: 20,
    position: 'relative',
  },
  countDay: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stricktitle: {
    display: 'flex',
    marginLeft: 10,
    flexDirection: 'column',
  },
  countStrick: {flex: 1, display: 'flex', flexDirection: 'row'},
  weeks: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 25,
  },
  day: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#C9DABF',
  },
  dayText: {
    color: 'black',
  },
  countStrickText: {color: 'black', fontWeight: 'bold', fontSize: 18},
  countStrickDay: {color: '#FF5F7A', fontWeight: 'bold', fontSize: 18},
  strickText: {flex: 1, color: 'black'},

  //modal
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
