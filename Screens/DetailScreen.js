import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView } from 'react-native'
import React from 'react'

import { CircleBtn, Btn } from '../Components/Buttons'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')


const DetailScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#222831', paddingTop: 19 }}>
            <ScrollView style={styles.scrollView}>

                <View style={styles.top}>
                    <View style={styles.icon}>
                        <AntDesign name="arrowleft" size={19} color="white" />
                        <Text style={styles.txt}>My Profile</Text>
                        <MaterialIcons name="bubble-chart" size={24} color="white" />
                    </View>
                </View>

                <View style={styles.container}>
                    <CircleBtn />
                    <Text style={styles.txxt}>Janice Butler</Text>
                    <Text style={styles.txxxt}>My Wallet Lever 7+</Text>
                </View>

                <View style={{ alignItems: 'center', width: width, paddingTop: 30 }}>
                    <View style={styles.btnContainer}>
                        <View style={styles.btn}>
                            <Btn
                                currency='EUR'
                                amount={195.45}
                                type='Savings'
                                style={{ backgroundColor: '#fff' }}
                            />
                        </View>
                        <View style={styles.btn}>
                            <Btn
                                currency='USD'
                                amount={999.21}
                                type='Income'
                            />
                        </View>
                    </View>
                    <View style={{ ...styles.btnContainer, paddingTop: 5 }}>
                        <View style={styles.btn}>
                            <Btn
                                currency='USD'
                                amount={320.46}
                                type='Expense'
                            />
                        </View>
                        <View style={styles.btn}>
                            <Btn
                                currency='USD'
                                amount={425.35}
                                type='Expense'
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.iconBtn}>
                    <View style={styles.bottom}>
                        <MaterialIcons name="house" size={24} color="white" />
                        <AntDesign name="pluscircle" size={70} color="white" 
                        style={{ bottom: 40}}/>
                        <AntDesign name="user" size={24} color="white" />
                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: ,
    },
    top: {
        width: width,
        alignItems: 'center',
        paddingBottom: 23,
        paddingTop: 10
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
    txxt: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff'
    },
    txxxt: {
        fontSize: 17,
        color: 'gray',
        fontWeight: '50'
    },
    btnContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        padding: 7
    },
    btn: {
        backgroundColor: '#fff',
        borderRadius: 20
    },
    iconBtn: {
        alignItems: 'center',
        paddingVertical: 40,
        top: 10

    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignItems: 'center',
        backgroundColor: 'gray',
        paddingHorizontal: 25,
        borderRadius: 30,
    }
})