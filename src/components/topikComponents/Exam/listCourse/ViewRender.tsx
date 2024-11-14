import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {CourseDataType} from '../../../../util/GlobalType';
type ViewRenderType = {
  res: CourseDataType;
  handleSelectId: () => void;
  selectedId: string;
  handleRoute: () => void;
};
const ViewRender = ({
  res,
  handleRoute,
  handleSelectId,
  selectedId,
}: ViewRenderType) => {
  return (
    <TouchableWithoutFeedback onPress={handleSelectId}>
      <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <View
          style={
            selectedId === res.idConfig
              ? styles.shadowHover
              : styles.shadowNoneHover
          }>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              source={{
                uri: 'https://english-resource.onluyen.vn/thumbnail/exam/2024/660cd4d0ff73a0a8e3162d59/66139f3c4953a8051526c23a.png',
              }}
              resizeMode="contain"
              style={{width: 48, height: 48, marginEnd: 15}}
            />
            <Text
              style={
                selectedId === res.idConfig
                  ? {
                      fontWeight: 'bold',
                      fontSize: 16,
                      color: '#FF5F7A',
                    }
                  : {
                      fontWeight: 'bold',
                      fontSize: 16,
                      color: '#324357',
                    }
              }>
              {res.name}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            {res.isSkillTest ? (
              <TouchableOpacity>
                <View
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: '#FF5F7A',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 10,
                  }}>
                  <Image
                    source={require('../../../../img/topikImg/headPhone.jpg')}
                    resizeMode="contain"
                    style={{width: 16, height: 16}}
                  />
                </View>
              </TouchableOpacity>
            ) : (
              <></>
            )}

            <Pressable
              style={
                res.status === 0
                  ? {
                      backgroundColor: '#FF5F7A',
                      width: 80,
                      height: 32,
                      borderRadius: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }
                  : res.status === 1
                  ? {
                      backgroundColor: '#FFC700',
                      width: 80,
                      height: 32,
                      borderRadius: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }
                  : res.status === 2
                  ? {
                      backgroundColor: '#5685FF',
                      width: 80,
                      height: 32,
                      borderRadius: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }
                  : {}
              }
              onPress={handleRoute}>
              <Text
                style={{fontWeight: 'bold', fontSize: 14, color: '#FFFFFF'}}>
                {res.status === 0
                  ? 'Thi thử'
                  : res.status === 1
                  ? 'Tiếp tục'
                  : res.status === 2
                  ? 'Kết quả'
                  : ''}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ViewRender;

const styles = StyleSheet.create({
  shadowHover: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF5F7A',
    shadowRadius: 50,
    elevation: 15,
  },
  shadowNoneHover: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
