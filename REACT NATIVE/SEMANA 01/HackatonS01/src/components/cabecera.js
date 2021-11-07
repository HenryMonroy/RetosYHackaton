import React from "react";
import {Text, View, StyleSheet, Button, Image, } from 'react-native';

const Cabecera = () => {
    return(
        <View style={styles.container}>
            <View style={styles.imgProfile}>
                <Image 
                    source={{uri:"https://i1.wp.com/lechatmagazine.com/wp-content/uploads/2020/05/tiktok-egirl-portada.jpg?fit=1013%2C757&ssl=1"}} 
                    style={styles.profileImg}/>
            </View>
            <View style={styles.detProfile}>
                <View style={styles.topDetail}>
                    <View>
                        <Text style={[styles.h2, styles.text]}>Marry</Text>
                        <Text style={[styles.p, styles.text]}>China Bejing</Text>
                    </View>
                    <Button
                        title="Follow"
                        style={styles.buttonFollow}/>
                </View>
                <View style={styles.topDetail}>
                    <View style ={styles.numbersDetail}>
                        <Text style={[styles.h3, styles.text]}>648</Text>
                        <Text style={[styles.p, styles.text]}>Follow</Text>
                    </View>
                    <View style ={styles.numbersDetail}>
                        <Text style={[styles.h3, styles.text]}>7</Text>
                        <Text style={[styles.p, styles.text]}>Bucket</Text>
                    </View>
                    <View style ={styles.numbersDetail}>
                        <Text style={[styles.h3, styles.text]}>1046</Text>
                        <Text style={[styles.p, styles.text]}>Followers</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        flexDirection: "row",
        flex: 1,
        backgroundColor: "#B954FA",
    },
    imgProfile: {
        alignItems: "center",
        flex: 0.25,
        marginVertical: 20,
    },
    profileImg: {
        width: 80,
        height: 80,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
    },
    detProfile: {
        flex: 0.75,
        flexDirection: "column",
        padding: 16,
    },
    topDetail: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 16,
    },
    h2: {
        fontSize: 30,
        fontWeight: "bold",
    },
    h3: {
        fontSize: 24,
        marginBottom: 8,
    },
    p: {
        fontSize: 12,
    },
    text: {
        color: "#fff",
    },
    buttonFollow: {
        
    },
    numbersDetail: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Cabecera;