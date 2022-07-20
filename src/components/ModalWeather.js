import { Modal, StyleSheet, View } from "react-native";

import { Navbar } from "./Navbar";
import { AddCityModal } from "./AddCityModal";
import { BlurView } from 'expo-blur';
import { useSelector } from "react-redux";


export const ModalWeather = () => {

   const modal = useSelector(state => state.modal);

   return (
      <Modal
         animationType="fade"
         transparent={true}
         visible={modal}
      >
         <BlurView
            tint="dark"
            intensity={80}
            style={styles.blurView}
         >
            <View style={styles.wrapper}>
               <Navbar />
               <AddCityModal />
            </View>
         </BlurView>
      </Modal >
   )
}

const styles = StyleSheet.create({
   wrapper: {
      paddingHorizontal: 0,
      paddingTop: 0,
   },
   blurView: {
      flex: 1,
      backgroundColor: "#3E3644",
   }
})