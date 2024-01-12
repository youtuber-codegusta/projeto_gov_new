import React, { useEffect, useState } from 'react';
import { ImageBackground, TouchableOpacity, Text } from 'react-native';
import styles from './style'

function Home ({ navigation }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000); // Navega para a página de login após 3 segundos para nao aparecer o botao quando entrar pela primeira vez no app

    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 3500); // Mostra o botão após 3.5 segundos

    return () => {
      clearTimeout(timer); // Limpa o timer se o componente for desmontado antes do tempo acabar
      clearTimeout(buttonTimer); // Limpa o timer do botão
    }
  }, [navigation]);

  return (
    <ImageBackground source={require('../../../assets/bandeira.png')} style={styles.container}>
      {showButton && (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      )}
    </ImageBackground>
  );
}

export default Home;