import { View, StyleSheet } from 'react-native';

export const Loading = (props) => {

   return (
      <View style={{ ...styles.wrapper, ...props.style }}></View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      width: 155,
      height: 80,
      backgroundColor: '#575757',
      borderRadius: 10
   }
})