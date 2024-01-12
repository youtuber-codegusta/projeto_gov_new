import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, Vibration } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style'
import axios from 'axios'
import API_URL from './../../utils/url';

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      // Quando a tela perde o foco (o usuário sai da tela), limpa os campos
      setEmail('');
      setPassword('');
    });

    return unsubscribe;
  }, [navigation]);

  const handleLogin = async () => {
    if (!email || !password) {
      Vibration.vibrate();
      Alert.alert('Erro', 'Por favor, preencha o email e a senha.');
      return;
    }
    const data = {
      email: email,
      password: password
    };

    try {

      // aqui de novo vou dar um response pra enviar minha informação
      const response = await axios.post(`${API_URL}api/signin`, data);

      if(response.status === 200){
        // o usuario e criado e captura o token pra sempre entrar direto

        await AsyncStorage.setItem('token', response.data.token);
        navigation.navigate('Form');
      }
    } catch (error) {
      // se nao for ele captura o erro 
      if (error.response.status === 400) {
        Alert.alert('Erro', error.response.data.msg);
      } 
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/imagemgov.png')}
      />
      <Text style={styles.actionText}>REALIZE O LOGIN OU REGISTRE-SE</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#808080"
        value={email}
        onChangeText={setEmail}
        color="#000000"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#808080"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        color="#000000"
      />
      <View style={{ height: 20 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
  <TouchableOpacity 
    style={[styles.button, { marginRight: 30 }]}
    onPress={handleLogin}
  >
    <Text style={styles.buttonText}>Login</Text>
  </TouchableOpacity>
  <TouchableOpacity 
    style={[styles.button, { marginRight: 5 }]}
    onPress={() => navigation.navigate('Register')}
  >
    <Text style={styles.buttonText}>Registrar</Text>
  </TouchableOpacity>
</View>
      <TouchableOpacity 
        style={styles.button2}
        onPress={() => navigation.navigate('Adm')}
      >
        <Text style={styles.buttonText}>Sou Administrador</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;