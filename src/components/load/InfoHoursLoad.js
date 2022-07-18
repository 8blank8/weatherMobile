import { View, StyleSheet } from 'react-native';

import { THEME } from '../../theme/theme';

import { TextRegular } from '../../ui/TextRegular';
import { TextLight } from '../../ui/TextLight';

export const InfoHoursLoad = props => {

   return (
      <View style={styles.wrapper}>
         <View>
            <TextRegular style={styles.textDay}>-, - -</TextRegular>
            <View style={styles.wrapperTemperature}>
               <TextLight style={{ fontSize: 100 }}>-</TextLight>
               <TextLight style={{ fontSize: 30, paddingTop: 15 }}>°C</TextLight>
            </View>
            <TextLight style={{ fontSize: 14 }}>-</TextLight>
         </View>
         <View style={styles.containerTwo}>
            <TextRegular style={styles.textCharacters}>Осадки: -%</TextRegular>
            <TextRegular style={styles.textCharacters}>Влажность: -%</TextRegular>
            <TextRegular style={styles.textCharacters}>Ветер: - м/с</TextRegular>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between'
   },
   textDay: {
      opacity: 0.5,
      fontSize: THEME.FONT_SIZE
   },
   wrapperTemperature: {
      flexDirection: 'row',
      alignItems: 'flex-start'
   },
   containerTwo: {
      justifyContent: 'flex-end'
   },
   textCharacters: {
      fontSize: THEME.FONT_SIZE,
      paddingTop: 5
   }
})