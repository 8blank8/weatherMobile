import { Modal, StyleSheet, View } from "react-native";

import { Navbar } from "./Navbar";
import { AddCityModal } from "./AddCityModal";
import { BlurView } from 'expo-blur';



export const ModalWeather = ({ modalVisible }) => {
   return (
      <Modal
         animationType="fade"
         transparent={true}
         visible={modalVisible}
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
      paddingHorizontal: 20,
      paddingTop: 17,
   },
   blurView: {
      flex: 1,
      backgroundColor: "#3E3644",
   }
})