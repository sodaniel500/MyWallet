import React from 'react'
import { Text, View, ImageBackground, } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export const CircleBtn = () => {
    return (
        <ImageBackground
        source={require('../assets/L.webp')}
        style={{width: 100, height: 100}}
        imageStyle={{borderRadius: 50}}
        />
    )
}

export const Btn = ({ currency, amount, type, }) => {
    return (
        <View style={{ paddingTop: 15, paddingBottom: 39,paddingLeft: 70}}>
            <MaterialIcons name="account-balance-wallet" size={24} color="black" style={{left: 40}} />
            <Text style={{color: 'gray', right: 57, fontSize: 18 }}>{currency}</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', right: 57}}>{amount}</Text>
            <Text style={{color: 'gray', top: 20, right: 57,fontSize: 18}}>{type}</Text>
        </View>
    )
}

export const Meter = () => {
    return (
        <View>
            
        </View>
    )
}