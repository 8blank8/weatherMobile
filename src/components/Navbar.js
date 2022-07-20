import { View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { TextRegular } from '../ui/TextRegular';
import { Menu } from "./Menu";
import { THEME } from '../theme/theme';

export const Navbar = () => {

   const cityName = useSelector(state => state.cityName.city);

   return (
      <View>
         <View style={styles.wrapper}>
            <FontAwesome5 name='map-marker-alt' size={20} color='#fff' >
               <TextRegular style={styles.text}> {cityName}</TextRegular>
            </FontAwesome5 >
            <Menu />
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: THEME.PADDING_HOR
   },
   text: {
      fontSize: THEME.FONT_SIZE,
   }
})
