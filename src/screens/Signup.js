import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import styles from '../components/styles';
import { Zocial, FontAwesome, Ionicons } from '@expo/vector-icons';
import firebase from '../Firebase/firebaseConfig';

const Signup = ({ navigation, container, spacer, goToSignUp, loginText }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signUp = async () => {
        try {
            if (password.length < 6) {
                alert("Enter at least 6 characters")
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email, password);
            navigation.navigate('Login')
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

            {error ? <Text style={styles.errorMessage}>{error}</Text> : null}

            <View style={styles.spacer}>
                <Button title="Sign Up" onPress={() => signUp()} />
            </View>

            <View style={styles.goToSignUp}>
                <Text style={{ fontSize: 18 }}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Sign in</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};




export default Signup;