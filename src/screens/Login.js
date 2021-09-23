import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import firebase from '../Firebase/firebaseConfig';

import styles from '../components/styles';
import { Zocial, FontAwesome, Ionicons } from '@expo/vector-icons';



const Login = ({ navigation, container, spacer, goToSignUp, loginText, inputBox }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signIn = async () => {
        try {

            firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('Home')
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row' }}>

                <Input
                    leftIcon={
                        <Zocial name="email" size={30} color='black' />
                    }
                    leftIconContainerStyle={{ marginRight: 5 }}
                    placeholder="Email Address"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}

                />

            </View>
            <View>
                <Input
                    leftIcon={
                        <FontAwesome name="lock" size={30} color="black" />
                    }
                    leftIconContainerStyle={{ marginRight: 10, marginLeft: 5 }}
                    secureTextEntry
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

            </View>


            <View style={styles.spacer}>
                <Button title="Sign In" onPress={() => signIn()} />
            </View>

            <View style={styles.goToSignUp}>
                <Text style={{ fontSize: 18 }}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.loginText}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};


export default Login;