import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Alert, BackHandler } from 'react-native';
import styles from './style'
import * as FileSystem from 'expo-file-system';
import API_URL from '../../utils/url';
import { shareAsync } from 'expo-sharing';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const handleButtonPress = async () => {


  const token = await AsyncStorage.getItem('token');


  const gerarpdf = await axios.get(`${API_URL}generate-pdf`, {
    headers: {
        'x-auth-token': token
    }
}, );
if(gerarpdf){
  const filename = "cadastro.pdf";
  const response = await fetch(`${API_URL}download`,);
  const { uri } = await FileSystem.downloadAsync(
    response.url,
    FileSystem.documentDirectory + filename
  );

  console.log('File downloaded to:', uri);
  save(uri)
  }else{
    Alert.alert("pdf nao gerado")
  }
}
  const save = (uri) =>  {
    shareAsync(uri);
  }
function Download({ navigation }) {
  

  return ( 
    <ImageBackground source={require('../../../assets/bandeiranova.png')} style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={handleButtonPress}> 
        <Text style={styles.buttonText}>BAIXAR FORMULÁRIO</Text>
      </TouchableOpacity>
      <View style={styles.buttonRow}>
        <TouchableOpacity 
          activeOpacity={0.5} 
          style={styles.buttonInicio} 
          onPress={() => navigation.navigate('Login')}
        > 
          <Text style={styles.buttonText}>INÍCIO</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          activeOpacity={0.5} 
          style={styles.buttonSair} 
          onPress={() => BackHandler.exitApp()}
        > 
          <Text style={styles.buttonText}>SAIR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default Download;