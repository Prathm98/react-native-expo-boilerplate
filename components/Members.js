import * as React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
} from 'react-native'
import { useEffect, useState } from 'react'
import { addMember, getMembers, getStatus } from '../services/SampleServices'

export default function About() {
  // Component states for holding different data
  const [status, setStatus] = useState(null)
  const [members, setMembers] = useState([])
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    //   Call to Status and get members methods
    getStatus().then((result) => {
      setStatus(result)
      fetchMembers()
    })
    // eslint-disable-next-line
  }, [])

  //   Call get members
  const fetchMembers = () => {
    getMembers().then((members) => {
      if (members && members.Members)
        setMembers(members.Members.map((m) => ({ key: m })))
    })
  }

  //   Handles add member action
  const onSubmit = () => {
    if (name.length > 0) {
      setError('')
      addMember(name).then((result) => {
        if (!result || !result.Members) {
          setError('Something went wrong. Please try again!')
        } else {
          setMembers(result.Members.map((m) => ({ key: m })))
          setName('')
        }
      })
    } else {
      setError('Name is required!')
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>REACT JS KICKSTART TEMPLATE</Text>
      <Text style={styles.text1}>POST METHOD DEMO</Text>
      {status ? (
        <View>
          <TextInput style={styles.input} onChangeText={setName} value={name} />
          <Button title='Add Member' onPress={onSubmit} />
          <Text style={{ color: 'red' }}>{error}</Text>

          {/* Iterate through members list */}
          <View style={styles.margin}>
            <Text style={styles.text2}>AVAILABLE MEMEBERS:</Text>
            {members.length > 0 ? (
              <FlatList
                data={members}
                renderItem={({ item }) => (
                  <Text style={styles.text2}>{item.key}</Text>
                )}
              />
            ) : (
              <Text>No members present.</Text>
            )}
          </View>
        </View>
      ) : (
        <Text>Backend is not Running!</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  text: {
    color: '#00205b',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  margin: {
    marginTop: 20,
  },
  text1: {
    color: '#00205b',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  text2: {
    color: '#00205b',
    fontSize: 18,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
