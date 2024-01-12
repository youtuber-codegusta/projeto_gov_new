import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, BackHandler, TextInput, Button, TouchableOpacity } from 'react-native';
import API_URL from '../../utils/url';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}users`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const UserComponent = ({ user, handleAccept, handleDeny, navigateToDetails }) => {
  const { _id, name, status } = user;

  return (
    <View key={_id} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', flexDirection: "row", justifyContent: 'space-between' }}>
      <TouchableOpacity onPress={() => navigateToDetails(user)}>
        <Text>ID: {_id}</Text>
        <Text>Nome: {name}</Text>
      </TouchableOpacity>

      {status === "pendente" ? (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <Button title="Aceitar" color="green" onPress={() => handleAccept(_id)} />
        <Button title="Negar" color="orange" onPress={() => handleDeny(_id)} />
      </View>
      ) : (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: status === "aceito" ? "green" : "orange" }}>{status}</Text>
        </View>
      )}
    </View>
  );
};


const ViewAdmin = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [updateId, setUpdateId] = useState('');
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    fetchData().then(data => setUsers(data));
  }, []);

  useEffect(() => {
    if (updateId) {
      handleUpdate(updateId, isAccepted);
    }
  }, [updateId, isAccepted]);

  const filterUsers = (searchText) => {
    setUsers(users.filter(user => user.name && user.name.includes(searchText)));
  };

  const handleUpdate = async (id, isAccepted) => {
    const token = await AsyncStorage.getItem('token')
    const userdata = {
      status: isAccepted.toLowerCase()
    };
    const response = await axios.put(`${API_URL}users/${id}`, userdata, { headers: { 'x-auth-token': token }});
    if(response.status === 200){
      fetchData().then(data => setUsers(data));
    } else {
      console.log("erro")
    }
  };

  const handleAccept = (id) => {
    setIsAccepted('aceito');
    setUpdateId(id);
  };
  
  const handleDeny = (id) => {
    setIsAccepted('negado');
    setUpdateId(id);
  };
  

  const navigateToDetails = (user) => {
    navigation.navigate('Datails', { user });
  };

  return (
    <ScrollView>
    <View>
      <TextInput
        value={searchText}
        onChangeText={text => setSearchText(text)}
        placeholder="Pesquisar usuário"
      />
      <Button title="Filtrar" onPress={() => filterUsers(searchText)} />
      <View>
        {users.map(user => (
          <UserComponent 
            key={user._id} 
            user={user} 
            handleAccept={handleAccept} 
            handleDeny={handleDeny} 
            navigateToDetails={navigateToDetails} 
          />
        ))}
      </View>
      <Button title="FINALIZAR E SAIR" onPress={() => BackHandler.exitApp()} />
    </View>
    </ScrollView>
  );
};

export default ViewAdmin;