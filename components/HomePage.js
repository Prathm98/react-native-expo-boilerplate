import * as React from 'react'
import { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { getDetails, getStatus } from '../services/SampleServices'
import About from './About'

export default function HomePage({ navigation }) {
  // Status and tech state
  const [status, setStatus] = useState(false)
  const [tech, setTech] = useState(null)

  //   Backend API calls
  useEffect(() => {
    getStatus().then((result) => {
      setStatus(result)

      if (result) {
        getDetails().then((techResult) => {
          setTech(techResult.Stack)
        })
      }
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>REACT JS KICKSTART TEMPLATE</Text>
      <Text>BACKEND STATUS : {status ? 'Running' : 'Pending'}</Text>
      <Text>{status && `BACKEND STACK : ${tech ? tech : 'Unknown'}`}</Text>

      {/* About Component */}
      <About />

      {/* Members navigation */}
      <Text style={styles.button}>
        <Button
          title='Members'
          onPress={() => navigation.navigate('Members')}
        />
      </Text>
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
  button: {
    marginTop: 20,
  },
})
