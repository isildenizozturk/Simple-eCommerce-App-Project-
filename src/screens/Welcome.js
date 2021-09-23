import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Image } from 'react-native-elements';


const logo = { uri: 'https://penji.co/wp-content/uploads/2019/09/02.jpg' };


const Welcome = ({ navigation }) => {
    return (
        <View style={styles.cover}>
            <Image source={logo} style={styles.logo} />
            <Button style={styles.signUpButton} title="Sign Up" onPress={() => navigation.navigate('Signup')} />
            <View style={styles.signInButton}>
                <Text style={{ fontSize: 18 }}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.signInText}>Sign in</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    cover: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 400,
        width: 500,
        resizeMode: 'stretch',
        marginBottom: 20
    },
    signInButton: {
        flexDirection: 'row',
        paddingTop: 40
    },
    signInText: {
        color: 'blue',
        fontSize: 20
    },
    signUpButton: {
        height: 50,
        width: 275,
        marginTop: 25
    },

});

export default Welcome;