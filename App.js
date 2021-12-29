import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions,StatusBar } from 'react-native';
const { height, width } = Dimensions.get('screen')
const wallets = () => {
    return (
        <ScrollView style={styles.container}>
             <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fff" translucent={false} />
            <View>
                <View style={styles.TopView}>
                    <Text style={styles.TopViewText}>Drala Wallet</Text>
                    <Image source={require('./assets/wallets/Setting.png')} style={styles.setting} />
                </View>
                <View style={styles.vectorView}>
                    <Image source={require('./assets/wallets/Vector.png')} style={styles.vector} />
                    <View style={styles.vectorSideView}>
                        <Text style={styles.balence}>Drala Balence</Text>
                        <Text style={styles.balenceNo}>105</Text>
                        <Text style={styles.balenceDoller}>$43.56</Text>
                    </View>

                </View>
                <View style={styles.addressView}>
                    <View style={styles.qrAddress}>
                        <Image source={require('./assets/wallets/ic_sharp-qr-code-2.png')} style={styles.qrcode} />
                        <View style={styles.qrcodesideView}>
                            <Text style={styles.addressText}>Your Address</Text>
                            <Text style={styles.address}>0xf48...0mb0</Text>

                        </View>
                        <Image source={require('./assets/wallets/akar-icons_copy.png')} style={styles.copyIcon} />
                    </View>

                </View>
                <View style={styles.addressView}>
                    <View style={styles.balenceChartView}>
                        <Text style={styles.dollerText}>$0.004561</Text>
                        <Text style={styles.precent}>+1.25%</Text>
                        <Image source={require('./assets/wallets//image1.png')} style={styles.balenceChart} />
                    </View>
                </View>
                <View style={styles.sendReceiveView}>
                    <View style={styles.view1}>
                        <Image source={require('./assets/wallets/fluent_send-copy-24-filled.png')} />
                        <Text style={styles.sendReceiveText}>send</Text>
                    </View>
                    <View style={styles.view1}>
                        <Image source={require('./assets/wallets/eva_download-outline.png')} />
                        <Text style={styles.sendReceiveText}>Receive</Text>
                    </View>
                </View>
                <Text style={styles.RecentTransactionText}>Recent Transactions</Text>
                <View style={styles.transactionsView}>
                    <Text style={styles.noTransactionText}>No Transactions</Text>
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',

    },
    TopView: {
        width: width,
        height: 70,
        flex:1,        
        alignItems: 'center',
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.70,
        shadowRadius: 6.27,
        elevation: 3,
        marginBottom:5,
        bottom:5,
        
    },
    TopViewText: {
        fontSize: 25,
        marginTop:10,
        color: '#454545',
        alignSelf: 'center'

    },
    setting: {
        alignSelf: 'flex-end',
        marginRight: 15,
        bottom: 20,
        height: 25,
        width: 25
    },
    vectorView: {
        marginLeft: 10,

        flexDirection: 'row'

    },
    vector: {
        marginLeft: 10
    },
    vectorSideView: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    balence: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#454545'
    },
    balenceNo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#454545'
    },
    balenceDoller: {
        fontWeight: '600',
        fontSize: 20,
        color: '#C4C4C4'
    },
    qrAddress: {
        flexDirection: 'row',
    },
    addressView: {
        alignSelf: 'center',
        backgroundColor: '#E5E5E5',
        width: '85%',
        marginTop: 30,
        borderRadius: 5
    },
    qrcode: {
        height: 30,
        width: 30,
        margin: 10
    },
    addressText: {
        color: '#454545',
        fontSize: 14,
        fontWeight: '400'

    },
    address: {
        color: '#C4C4C4'
    },
    qrcodesideView: {
        justifyContent: 'center',
        width: '70%',

    },
    copyIcon: {
        alignSelf: 'center',
        marginLeft: 10
    },
    balenceChartView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50
    },
    dollerText: {
        marginLeft: 10,
        color: '#454545',
        fontSize: 14,
        fontWeight: '500'
    },
    precent: {
        color: '#62DD01',
        marginLeft: 10,
        fontSize: 14,
        fontWeight: '500'
    },
    balenceChart: {
        width: '52%',
        height: 30,
        marginLeft: 10
    },
    sendReceiveView: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        alignItems: 'center',
    },
    view1: {
        height: 65,
        width: 95,
        backgroundColor: '#E5E5E5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    sendReceiveText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#454545',
        marginTop: 3
    },
    RecentTransactionText: {
        fontWeight: '400',
        fontSize: 16,
        color: '#454545',
        marginTop: 20,
        marginLeft: 20
    },
    transactionsView: {
        flex: 1,
        width: width,
        height: height / 2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    noTransactionText: {
        fontSize: 35,
        fontWeight: '700',
        color: '#C4C4C4'
    }

});

export default wallets;