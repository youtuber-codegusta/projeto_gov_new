import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'yellow'
    },
    logo: {
      width: 230,
      height: 110,
      alignSelf: 'center',
      marginBottom: 90,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 123, 64, 10)',
      padding: 10,
      marginTop: -100,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    buttonSair: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(7, 83, 184, 10)',
      padding: 10,
      marginTop: 10,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      marginLeft: 0,
    },
    buttonInicio: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(7, 83, 184, 10)',
      padding: 10,
      marginTop: 10,
      borderBottomRightRadius: 15,
      borderBottomLeftRadius: 15,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      marginRight: 10,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 18,
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginBottom: 0,
    },
  });

export default styles;