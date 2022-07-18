import { Text, StyleSheet } from "react-native";

export const TextLight = props => {
   return (
      <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
   )
}

const styles = StyleSheet.create({
   text: {
      fontFamily: 'helvetica-light',
      color: '#fff',
   }
})