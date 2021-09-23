import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const ProductList = ({ navigation, title, results }) => {

    if (!results.length) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>{title}</Text>
            <View style={styles.card}>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={true}
                    data={results}
                    keyExtractor={(item) => item.product_id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ItemDetail', { product_id: item.product_id })}>
                                    <Image style={styles.image}
                                        source={{ uri: item.product_main_image_url }}
                                    />
                                    <Text style={styles.productTitle}>{item.product_title}</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                        <Text style={styles.oldPrice}>{item.original_price} $ </Text>
                                        <Text style={styles.newPrice}>{item.sale_price} $ </Text>
                                    </View>
                                    <View >
                                        <TouchableOpacity onPress={() => navigation.navigate('Cart', { product_id: item.product_id })}
                                            style={{ flexDirection: 'row', margin: 15 }}
                                        >
                                            <Text style={styles.button}> Add to Cart</Text>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
        color: '#b22222',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    },
    productTitle: {
        fontSize: 18,

    },
    container: {
        marginBottom: 10,
        marginTop: 15
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 5,
        borderColor: '#c0c0c0',
        borderWidth: 2,
        borderRadius: 5
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 3,
        alignItems: 'center',
        padding: 10,
        width: 400,
        height: 450,
    },
    oldPrice: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        textDecorationColor: '#a9a9a9',
        fontSize: 20,
        color: '#a9a9a9',
        marginRight: 25
    },
    newPrice: {
        fontSize: 22,
        marginLeft: 25,
        fontWeight: 'bold',
        color: 'red'
    },
    button: {
        fontSize: 20,
        color: 'blue',
        fontWeight: 'bold',
        marginRight: 5,
        textDecorationLine: 'underline',
    }
});

export default withNavigation(ProductList);