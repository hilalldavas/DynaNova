import { View, Text } from 'react-native'
import React from 'react'

export default function home() {
  return (
    <View>
      <Image source = {require('./../../src/screen/images/logo.png')}
      className="w-full h-[400px]"/>

    </View>
  )
}