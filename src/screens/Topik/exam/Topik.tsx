import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import HeaderRight from '../../../components/topikComponents/Exam/HeaderRight';
import HeaderTopik from '../../../components/topikComponents/Exam/HeaderTopik';
import LoadingModal from '../../../components/topikComponents/Exam/Modal/LoadingModal';
import ProductItem from '../../../components/topikComponents/Exam/ProductItem';
import {getAllDataGroup} from '../../../Service/topikService/axiosTopik';
import {ItemProps} from '../../../util/GlobalType';

const Topik = () => {
  const navigation = useNavigation<any>();
  const [data, setData] = useState<ItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getAllDataGroup()
      .then(res => {
        setIsLoading(false);
        setData(res);
      })
      .catch(err => console.log(err));
  }, []);

  useFocusEffect(
    useCallback(() => {
      setIsLoading(true);
      getAllDataGroup()
        .then(res => {
          setIsLoading(false);
          setData(res);
        })
        .catch(err => console.log(err));
      navigation.navigate('MainBottomTab', {unFocus: true});
    }, []),
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff2f1'}}>
      {/* header */}
      {isLoading && <LoadingModal isLoading={isLoading} />}
      <View style={{flex: 1}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 10,
            maxHeight: '10%',
            flex: 1,
          }}>
          <Text
            style={{
              color: '#FF5F7A',
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>
            TOPIK Master
          </Text>
          <HeaderRight />
        </View>
        <View style={styles.body}>
          {/* list item */}
          <FlatList
            ListHeaderComponent={<HeaderTopik />}
            data={data}
            numColumns={2}
            renderItem={({item}: {item: ItemProps}) => (
              <ProductItem item={item} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Topik;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 20,
  },
});
