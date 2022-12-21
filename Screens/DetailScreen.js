import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

import { CircleBtn, Btn } from '../Components/Buttons'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')


const DetailScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#222831', paddingTop: 19 }}>
            <ScrollView style={styles.scrollView}>

                <View style={styles.top}>
                    <View style={styles.icon}>
                        <AntDesign name="arrowleft" size={19} color="white" />
                        <Text style={styles.txt}>My Wallet</Text>
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
                        <TouchableOpacity style={{ ...styles.btn, backgroundColor: '#00FA9A' }}>
                            <Btn
                                currency='EUR'
                                amount={195.45}
                                type='Savings'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.btn, backgroundColor: '#4169E1' }}
                        onPress={() => navigation.navigate('Transaction')}
                        >
                            <Btn
                                currency='USD'
                                amount={999.21}
                                type='Income'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ ...styles.btnContainer, paddingTop: 5 }}>
                        <TouchableOpacity style={{ ...styles.btn, backgroundColor: '#FF7F50' }}>
                            <Btn
                                currency='USD'
                                amount={320.46}
                                type='Expense'
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ ...styles.btn, backgroundColor: '#FFA500' }}>
                            <Btn
                                currency='USD'
                                amount={425.35}
                                type='Expense'
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.iconBtn}>
                    <View style={styles.bottom}>
                        <TouchableOpacity>
                        <MaterialIcons name="house" size={24} color="white" />
                        </TouchableOpacity>
                       <TouchableOpacity>
                       <AntDesign name="pluscircle" size={70} color="white" 
                        style={{ bottom: 40}}/>
                       </TouchableOpacity>
                        <TouchableOpacity>
                        <AntDesign name="user" size={24} color="white" />
                        </TouchableOpacity>
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