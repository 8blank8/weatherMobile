import { View, TextInput, StyleSheet } from 'react-native';
import { TextLight } from '../ui/TextLight';

import { EvilIcons } from '@expo/vector-icons';

export const AddCityModal = () => {
   return (
      <View style={styles.wrapper}>
         <View >
            <View style={styles.wrapperInput} />
            <TextInput style={styles.input} placeholder='Введите город' />
         </View>
         <View>
            <View style={styles.citys} />
            <View style={styles.city}>
               <TextLight style={styles.cityText}>Novosibirsk</TextLight>
            </View>
         </View>
         <View style={styles.addCity}>
            <EvilIcons name='close' size={40} color={'#fff'} />
            <TextLight>Добавить город</TextLight>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      paddingTop: 40
   },
   wrapperInput: {
      backgroundColor: '#9775A5',
      borderRadius: 15,
      height: 50,
      paddingHorizontal: 30,
      justifyContent: 'center',
      opacity: 0.5
   },
   input: {
      fontFamily: 'helvetica-light',
      fontSize: 14,
      color: '#fff',
      position: 'absolute',
      top: '25%',
      left: 30
   },
   addCity: {
      alignItems: 'center',
      marginTop: 10
   },
   citys: {
      height: '80%',
      backgroundColor: '#9775A5',
      borderRadius: 15,
      marginTop: 10,
      paddingVertical: 15,
      paddingHorizontal: 30,
      opacity: 0.5
   },
   city: {
      position: 'absolute',
      top: 30,
      left: 30
   },
   cityText: {
      fontSize: 16
   }
})