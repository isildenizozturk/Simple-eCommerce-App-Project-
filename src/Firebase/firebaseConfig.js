import React from 'react';
import { View, Text } from 'react-native';

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD8AXcrZPIsd7AbIqrVzE0o_O_oI5jW8SU",
    authDomain: "ecommerce-aliexpress.firebaseapp.com",
    projectId: "ecommerce-aliexpress",
    storageBucket: "ecommerce-aliexpress.appspot.com",
    messagingSenderId: "374571899962",
    appId: "1:374571899962:web:71bb26fd042c21b478a903"
};

// Initialize Firebase

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;