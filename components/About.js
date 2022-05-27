import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function About() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text1}>ABOUT US</Text>
      <Text style={styles.text2}>
        Created by BitByBit team and maintained with ❤️ by an amazing team of
        developers.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text1: {
    color: '#00205b',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
    fontWeight: 'bold',
  },
  text2: {
    color: '#00205b',
    fontSize: 18,
    textAlign: 'center',
  },
})
