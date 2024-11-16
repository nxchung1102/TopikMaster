import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import {
  GestureHandlerRootView,
  RefreshControl,
} from 'react-native-gesture-handler';
import ViewRender from '../../../components/topikComponents/Exam/listCourse/ViewRender';
import DetailCourseHeader from '../../../components/topikComponents/headerComponents/DetailCourseHeader';
import {getCourseById} from '../../../Service/topikService/axiosTopik';
import LoadingModal from '../../../components/topikComponents/Exam/Modal/LoadingModal';
import {CourseDataType, CourseType} from '../../../util/GlobalType';

const DetailCourse = ({route}: any) => {
  const [course, setCourse] = useState<CourseType>();
  const [selectedId, setSelectedId] = useState('none');
  const [isRefresh, setIsRefresh] = useState(false);
  const {idCourse} = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation<any>();
  useEffect(() => {
    setIsLoading(true);
    getCourseById(idCourse)
      .then(rs => {
        setIsLoading(false);
        setCourse(rs);
      })
      .catch(err => console.log(err));
  }, []);

  useFocusEffect(
    useCallback(() => {
      setIsLoading(true);
      setSelectedId('none');
      getCourseById(idCourse)
        .then(rs => {
          setIsLoading(false);
          setCourse(rs);
        })
        .catch(err => console.log(err));
    }, []),
  );
  const handleRefresh = useCallback(() => {
    setIsRefresh(true);
    getCourseById(idCourse)
      .then(rs => {
        setIsRefresh(false);
        setCourse(rs);
      })
      .catch(err => console.log(err));
  }, [course]);

  const handleRoute = (item: CourseDataType) => {
    setSelectedId(item.idConfig);
    if (item.status === 2) {
      navigation.navigate('ResultExam', {
        idCourse: item.idConfig,
      });
    } else if (item.status === 1) {
      navigation.navigate('InfoExam', {
        idInfoExam: item.idConfig,
      });
    } else if (item.status === 0) {
      navigation.navigate('InfoExam', {
        idInfoExam: item.idConfig,
      });
    } else {
      console.log('detail course err');
    }
  };

  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: '#fff2f1'}}>
      {isLoading && <LoadingModal isLoading={isLoading} />}
      <View style={{flex: 1}}>
        <DetailCourseHeader
          handleBack={() => {
            navigation.goBack();
          }}
          handleHeaderPress={() => {
            setSelectedId('none');
          }}
        />
        <Pressable
          style={{flex: 1}}
          onPress={() => {
            setSelectedId('none');
          }}>
          <View style={styles.body}>
            <FlatList
              data={course?.data}
              renderItem={({item}: {item: CourseDataType}) => (
                <View>
                  <ViewRender
                    res={item}
                    handleRoute={() => handleRoute(item)}
                    handleSelectId={() => {
                      setSelectedId(item.idConfig);
                    }}
                    selectedId={selectedId}
                  />
                </View>
              )}
              refreshControl={
                <RefreshControl
                  refreshing={isRefresh}
                  onRefresh={handleRefresh}
                />
              }
            />
          </View>
        </Pressable>
      </View>
    </GestureHandlerRootView>
  );
};

export default DetailCourse;

const styles = StyleSheet.create({
  body: {backgroundColor: '#fff2f1', flex: 1},
});

//F7D1D7
