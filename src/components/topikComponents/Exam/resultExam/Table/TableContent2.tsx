import {View, Text, StyleSheet} from 'react-native';
import {LightGray, Dark} from '../../../../../util/Theme/ThemeGlobal';

const TableContent2 = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          width: 140,
          borderWidth: 1,
          borderColor: LightGray,
          paddingVertical: 25,
          paddingHorizontal: 5,
          justifyContent: 'center',
        }}>
        <Text style={{color: Dark}}>TOPIK II </Text>
        <Text style={{color: Dark}}> (thang điểm 300)</Text>
      </View>
      <View
        style={{
          width: 70,
        }}>
        <View style={styles.cell}>
          <Text style={{textAlign: 'center', color: Dark}}>3</Text>
        </View>
        <View style={styles.cell}>
          <Text style={{textAlign: 'center', color: Dark}}>4</Text>
        </View>
        <View style={styles.cell}>
          <Text style={{textAlign: 'center', color: Dark}}>5</Text>
        </View>
        <View style={styles.cell}>
          <Text style={{textAlign: 'center', color: Dark}}>6</Text>
        </View>
      </View>
      <View style={{width: 120}}>
        <View style={styles.cell}>
          <Text style={{color: Dark}}> {'>'} 120 điểm </Text>
        </View>
        <View style={styles.cell}>
          <Text style={{color: Dark}}> {'>'} 150 điểm </Text>
        </View>
        <View style={styles.cell}>
          <Text style={{color: Dark}}> {'>'} 190 điểm </Text>
        </View>
        <View style={styles.cell}>
          <Text style={{color: Dark}}> {'>'} 230 điểm </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cell: {borderWidth: 1, borderColor: LightGray, flex: 1},
});
export default TableContent2;
