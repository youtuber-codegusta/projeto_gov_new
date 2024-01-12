import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ffffff',
    },
    logo: {
      width: 230,
      height: 110,
      alignSelf: 'center',
      marginBottom: 90,
    },
    actionText: {
      fontSize: 18,
      color: 'rgba(0, 123, 64, 10)',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 15, 
      borderRadius: 5,
      margin: 15,
    },
    input: {
      backgroundColor: '#e6e6e6',
      marginBottom: 10,
      borderRadius: 20,
      width: 410,
      height: 40,
      alignSelf: 'center',
      paddingLeft: 15,
    },
    button: {
      alignItems: 'center',
      padding: 10,
      borderRadius: 50,
      marginBottom: 15,
      width: 135,
      alignSelf: 'center',
      backgroundColor: 'rgba(0, 123, 64, 10)',
    },
    button2: {
      alignItems: 'center',
      padding: 10,
      borderRadius: 50,
      marginBottom: 5,
      marginTop: 20,
      width: 160,
      alignSelf: 'center',
      backgroundColor: 'rgba(7, 83, 184, 10)',
    },
    buttonText: {
      color: '#fff',
      fontSize: 13,
    },
  });

export default styles;