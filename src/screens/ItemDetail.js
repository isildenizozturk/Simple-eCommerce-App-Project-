import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import Api from '../api/Api';

const ItemDetail = ({ navigation }) => {

    const [product, setProduct] = useState(null);
    const product_id = navigation.getParam('product_id');

    const getProductDetail = async product_id => {
        try {
            const response = await Api.get(`/product/${product_id}`);
            setProduct(response.data);
        } catch (err) {
            console.log(err);

        }
    };


    useEffect(() => {
        getProductDetail(product_id);
    }, []);

    if (!product) {
        return null;
    }


    return (
        <View>
            <AntDesign name="arrowleft" size={30} color="black"
                onPress={() => { navigation.navigate('Home') }}
                style={{ marginTop: 15, marginLeft: 5 }}
            />
            <View style={styles.container}>
                <Image style={styles.image}
                    source={{ uri: product.product_main_image_url }} />

                <Text style={styles.name}>{product.product_title}</Text>

                <View style={{ flexDirection: 'column', marginTop: 5 }}>
                    <Text style={styles.newPrice}>{product.sale_price} $ </Text>
                    <Text style={styles.oldPrice}>{product.original_price} $ </Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 50 }}>

                    <TouchableOpacity onPress={() => navigation.navigate('Cart', { product_id: product.product_id })}>
                        <Feather name="shopping-cart" size={45} color="black" />
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    );

};


const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        alignItems: 'center'
    },
    image: {
        width: 280,
        height: 280,
        marginBottom: 5,
        borderColor: '#c0c0c0',
        borderWidth: 2,
        borderRadius: 5
    },
    name: {
        fontSize: 18,
        padding: 18,
        textDecorationStyle: 'solid',
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        textDecorationColor: '#a9a9a9',
        fontSize: 24,
        color: '#a9a9a9',
    },
    newPrice: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red'
    },
    button: {
        fontSize: 30,
        color: 'blue',
        marginRight: 120
    }
});


export default ItemDetail;
