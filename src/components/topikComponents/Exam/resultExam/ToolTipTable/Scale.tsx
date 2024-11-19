import {View, Text, StyleSheet} from 'react-native';
import {LightGray, Dark} from '../../../../../util/Theme/ThemeGlobal';

const Scale = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          width: 140,
          borderWidth: 1,
          borderColor: LightGray,
          padding: 5,
          justifyContent: 'center',
        }}>
        <Text style={{color: Dark}}>TOPIK I </Text>
        <Text style={{color: Dark}}> (thang điểm 200)</Text>
      </View>
      <View
        style={{
          width: 70,
        }}>
        <View style={styles.cell}>
          <Text style={{textAlign: 'center', color: Dark}}>1</Text>
        </View>
        <View style={styles.cell}>
          <Text style={{textAlign: 'center', color: Dark}}>2</Text>
        </View>
      </View>
      <View style={{width: 120}}>
        <View style={styles.cell}>
          <Text style={{color: Dark}}> {'>'} 80 điểm </Text>
        </View>
        <View style={styles.cell}>
          <Text style={{color: Dark}}> {'>'} 140 điểm </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cell: {borderWidth: 1, borderColor: LightGray, flex: 1},
});
export default Scale;
