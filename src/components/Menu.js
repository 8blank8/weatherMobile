import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export const Menu = () => {


   return (
      <TouchableOpacity style={styles.a} onPress={() => console.log(1)}>
         <View style={styles.wrapper}>
            <View style={styles.circle} />
            <View style={styles.circle} />
            <View style={styles.circle} />
         </View>
      </TouchableOpacity>
   )
}



const styles = StyleSheet.create({
   wrapper: {
      width: 35,
      height: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
   },
   circle: {
      width: 6,
      height: 6,
      backgroundColor: '#fff',
      borderRadius: 4,
   },
   a: {
      // width: 100,
      // height: 100,
      // backgroundColor: '#000'
   }
})