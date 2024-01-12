import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlayImage: {
      width: 300,
      height: 150,
      marginBottom: 20,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 123, 64, 10)',
      padding: 10,
      marginTop: -150,
      
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: -15,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 15,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 20,
    },
  });

export default styles;