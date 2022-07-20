import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/actionWeather';

export const Menu = () => {
   const dispatch = useDispatch();
   const modal = useSelector(state => state.modal);

   return (
      <TouchableOpacity style={styles.wrapper} onPress={() => dispatch(setModal(!modal))}>
         <View style={styles.circle} />
         <View style={styles.circle} />
         <View style={styles.circle} />
      </TouchableOpacity>
   )
}



const styles = StyleSheet.create({
   wrapper: {
      width: 35,
      height: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 10,
      zIndex: 1
   },
   circle: {
      width: 6,
      height: 6,
      backgroundColor: '#fff',
      borderRadius: 4,
   },
   a: {
      width: 35,
      height: 20,
      borderColor: 'red',
      borderWidth: 1,
   }
})