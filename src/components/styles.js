import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        paddingTop: 20,
        justifyContent: 'center'
    },
    spacer: {
        margin: 15
    },
    goToSignUp: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 15
    },
    login: {
        paddingTop: 40,
    },
    loginText: {
        color: 'blue',
        fontSize: 20,
    },

});