import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Toolbar = () => {
    return (
        <View style={styles.navBar}>
            <View style={styles.leftContainer}>
                <Icon name="md-menu" size={25} color="#000000" style={styles.iconToolBar}/>
            </View>
            <Text style={styles.middleContainer}>Movie App</Text>
            <View style={styles.rightContainer}>
                <Icon name="md-search" size={25} color="#000000" style={styles.iconToolBar} />
            </View>
        </View>
    )
}

export default Toolbar;

const styles = StyleSheet.create({
    navBar: {
        height: 54,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 1,
    },
    leftContainer: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginLeft: 16,
    },
    middleContainer: {
        flex: 2,
        backgroundColor: 'white',
        flexDirection: 'row',
        fontSize: 18,
        marginLeft: 10,
        marginRight: 10,
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 16,
    },
    iconToolBar: {
        paddingHorizontal: 20,
        resizeMode: 'contain',
        backgroundColor: 'white',
    }
});
