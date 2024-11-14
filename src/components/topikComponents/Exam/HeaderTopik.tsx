import React from 'react';
import {View} from 'react-native';
import SearchBox from './SearchBox';
import Strick from './Strick';

const HeaderTopik = () => {
  const infoTopikMaster = {
    countStrickText: 'Đã luyện thi ',
    strickText: 'Luyện thi mỗi ngày để tiến bộ hơn',
    url: 'https://i.pinimg.com/564x/ed/c1/14/edc1149e1cbbd0e80b1c52e28214cb4e.jpg',
  };
  return (
    <View>
      {/* search */}
      <SearchBox />
      {/* strick */}
      <Strick info={infoTopikMaster} />
    </View>
  );
};

export default HeaderTopik;
