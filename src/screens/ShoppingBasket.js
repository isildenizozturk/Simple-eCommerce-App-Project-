
import React, { useState, useEffect, useReducer } from 'react';
import { SectionList, ListItem, View, Image, StyleSheet, FlatList, Button } from 'react-native';
import { Text } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import Api from '../api/Api';



const ShoppingBasket = ({ navigation }) => {

    const [cartItem, setCartItem] = useState([]);
    const product_id = navigation.getParam('product_id');

    const getProduct = async product_id => {
        try {
            const response = await Api.get(`/product/${product_id}`);
            setCartItem(response.data);
        } catch (err) {
            console.log(err);

        }
    };

    useEffect(() => {
        getProduct(product_id);
    }, [product_id]);

    if (!cartItem) {
        return null;
    }


    const CartItems = () => {
        return (
            <View>
                <View style={styles.card}>
                    <Image style={styles.image}
                        source={{ uri: cartItem.product_main_image_url }} />

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.name}>{cartItem.first_level_category_name}</Text>
                        <Text style={styles.newPrice}>{cartItem.sale_price} $ </Text>
                    </View>

                </View>
                <View style={styles.totalSection}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Totals</Text>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ fontSize: 18, color: 'gray', }}>Sub Total</Text>
                        <Text style={styles.price}>{cartItem.sale_price} $ </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ fontSize: 18, color: 'gray', }}>Shipping</Text>
                        <Text style={styles.price}> 0 $ </Text>
                    </View>

                </View>

            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <CartItems />

            <Button title="CHECK OUT" style={styles.button} />

        </View>
    );
};

ShoppingBasket.navigationOptions = {
    title: 'Cart',
    tabBarIcon: <Feather name="shopping-cart" size={25} color="black" />
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginTop: 100,
        marginLeft: 15,
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'gray',
        marginRight: 15,
        justifyContent: 'center'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 15,

    },
    name: {
        fontSize: 20,
        marginBottom: 20

    },
    newPrice: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    },
    price: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center',
        marginLeft: 245

    },
    totalSection: {
        marginTop: 32,
        marginLeft: 15
    },
    button: {
        marginTop: 30,
        alignSelf: 'center',
        paddingHorizontal: 16,
        borderRadius: 30,
        width: 50,
        height: 20,
        backgroundColor: 'green'
    }

});

export default ShoppingBasket;

