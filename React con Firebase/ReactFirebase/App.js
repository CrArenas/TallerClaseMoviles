import { View, Text, TextInput, FlatList, Pressable, Alert } from 'react-native'
import React, {useState, useEffect } from 'react'
import {db} from './firebase'
import { ref, push, onValue } from 'firebase/database'

export default function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [nacionality, setNacionality] = useState('')

  const [users, setUsers] = useState([])

  function enviar_datos(){
    push(ref(db, 'usuarios'), {
      age: age,
      name: name,
      nacionality: nacionality
    })
    .then(function(){
      Alert.alert('Los datos se enviaron, el nombre que se envía a la bd es ' + name + ' y la edad es ' + age + ' y la nacionalidad es ' + nacionality)
      setAge('')
      setName('')
      setNacionality('')
    })
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <TextInput
        placeholder='Ingrese el nombre de usuario: '
        value = {name}
        onChangeText = {function (text){
          setName(text)
        }}
      />

      <TextInput
        placeholder='Ingrese la edad del usuario: '
        value = {age}
        onChangeText = {function (text){
          setAge(text)
        }}
        keyboardType = 'numeric'
      />

      <TextInput
        placeholder='Ingrese su nacionalidad: '
        value = {nacionality}
        onChangeText = {function (text){
          setNacionality(text)
        }}
        keyboardType = 'numeric'
      />

      <Pressable
        onPress = {enviar_datos}>
        <Text>Enviar datos a Firebase</Text>
      </Pressable>

    </View>
  )
}