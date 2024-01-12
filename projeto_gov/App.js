import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/componentes/Home';
import LoginScreen from './src/componentes/Login';
import RegisterScreen from './src/componentes/Register';
import RegistrationFormScreen from './src/componentes/Form';
import AdmScreen from './src/componentes/Adm';
import DownloadScreen from './src/componentes/Download';
import ViewAdm from './src/componentes/view';
import Details from './src/componentes/datails';

const Stack = createStackNavigator();

function App() { 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: 'Olá, seja bem-vindo.',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: 'rgba(0, 123, 64, 10)',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Login" 
          component={LoginScreen} 
          options={{
            title: 'Cadastro de Pessoas Carentes',
            headerStyle: {
              backgroundColor: 'rgba(0, 123, 64, 10)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          headerLeft: null,
          }}
        /> 
        <Stack.Screen
          name="Register" 
          component={RegisterScreen} 
          options={{
            title: 'Retornar para login',
            headerStyle: {
              backgroundColor: 'rgba(0, 123, 64, 10)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Form" 
          component={RegistrationFormScreen} 
          options={{
            title: 'Retornar para login',
            headerStyle: {
              backgroundColor: 'rgba(0, 123, 64, 10)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
        <Stack.Screen
          name="Download" 
          component={DownloadScreen} 
          options={{
            title: 'Brasil, um país de todos!',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: 'rgba(0, 123, 64, 10)',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Adm" 
          component={AdmScreen} 
          options={{
            title: 'Retornar para login',
            headerStyle: {
              backgroundColor: 'rgba(0, 123, 64, 10)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
          <Stack.Screen
          name="View" 
          component={ViewAdm} 
          options={{
            title: 'Retornar para login',
            headerStyle: {
              backgroundColor: 'rgba(0, 123, 64, 10)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
          <Stack.Screen
          name="Datails" 
          component={Details} 
          options={{
            title: 'Retornar para login',
            headerStyle: {
              backgroundColor: 'rgba(0, 123, 64, 10)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
