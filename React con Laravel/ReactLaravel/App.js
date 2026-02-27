import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

export default function App() {

  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const datos = { name: name, password: password }

  function getData() {
    fetch('http://172.20.10.2:8000/api/users/')
      .then(response => response.json())
      .then(data => {
        setData(data)
        console.log(data)
      })
      .catch(error => console.log('Error:', error))
  }

  function enviarDatos() {
    fetch('http://172.20.10.2:8000/api/user/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    })
      .then(response => response.json())
      .then(() => {
        setName('')
        setPassword('')
        getData()
      })
      .catch(error => console.log('Error:', error))
  }

  useEffect(getData, [])

  return (
    <View style={styles.container}>

      <Text>
        {data?.name ? data.name : 'Cargando usuarios...'}, 
      </Text>

      <TextInput
        style={styles.input}
        placeholder='Ingresar nombre'
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder='Ingresar contraseña'
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
      />

      <Pressable 
        onPress={enviarDatos} 
        style={({ pressed }) => [
          styles.button,
        ]}
      >
        <Text style={styles.buttonText}>
          Enviar dato
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6F8'
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333'
  },

  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#FFF',
    fontSize: 16
  },

  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3
  },

  buttonPressed: {
    backgroundColor: '#357ABD'
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600'
  }

})