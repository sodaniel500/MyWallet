import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions} from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window')

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Transaction = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

            <View style={styles.top}>
                    <View style={styles.icon}>
                        <AntDesign name="arrowleft" size={19} color="white" />
                        <Text style={styles.txt}>My Wallet</Text>
                        <MaterialIcons name="bubble-chart" size={24} color="white" />
                    </View>
                </View>

                <View style={{...styles.top, padding: 30}}>
                    <View style={styles.icon}>
                    <Text style={{}}>March</Text>
                    <Text style={styles.txt}>April</Text>
                    <Text style={{}}>May</Text>
                    </View>
                </View>

            <View style={styles.amount}>
                <Text style={styles.txxt}>$3,500,85</Text>
                <Text style={{fontSize: 20, color: 'gray'}}>Balance</Text>
            </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Transaction

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222831',
        paddingTop: 19,
        flex: 1
    },
    top: {
        width: width,
        alignItems: 'center',
        paddingBottom: 23,
        paddingTop: 10,
       
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    txt: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    amount: {
        alignItems: 'center',

    },
    txxt: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    }
})