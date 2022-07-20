import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { TextLight } from '../ui/TextLight';
import { LocationService } from '../services/LocationService';
import { EvilIcons } from '@expo/vector-icons';
import { useEffect } from 'react';
import { useState } from 'react';

export const AddCityModal = () => {
   let time = null;
   const { getCityCoords } = LocationService();
   const [text, setText] = useState('');
   const [citys, setCitys] = useState(null);

   const setInputText = (text) => {
      clearTimeout(time);
      time = setTimeout(() => {
         setText(text);
         if (text.length > 3) {
            getCityCoords(text).then(data => setCitys(data));
         }
      }, 500)
   }

   const content = citys && citys.map(({ city }) => {
      return (
         <TouchableOpacity style={styles.touch} key={Date.now() + Math.random()}>
            <TextLight style={styles.cityText}>{city}</TextLight>
         </TouchableOpacity>
      )
   })

   return (
      <View style={styles.wrapper}>
         <View >
            <View style={styles.wrapperInput} />
            <TextInput style={styles.input} placeholder='Введите город' onChangeText={(e) => setInputText(e)} />
         </View>
         <View>
            <View style={styles.citys} />
            <View style={styles.city}>
               {content}
            </View>
         </View>
         {/* <View style={styles.addCity}>
            <EvilIcons name='close' size={40} color={'#fff'} />
            <TextLight>Добавить город</TextLight>
         </View> */}
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      paddingTop: 40,
      marginHorizontal: 20
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
      left: 30,
      width: '100%'
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
   },
   touch: {
      marginVertical: 5
   }
})