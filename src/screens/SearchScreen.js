import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar';
import searchHook from '../components/searchHook';



const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
    const [searchApi, results] = searchHook();

    return (
        <View>
            <SearchBar
                name={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            <FlatList
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
                                    <Text style={styles.newPrice}>{item.app_sale_price} $ </Text>
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

    );

};

SearchScreen.navigationOptions = {
    title: 'Search',
    tabBarIcon: <Feather name="search" size={25} color="black" />
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
        flexWrap: "wrap"
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

export default SearchScreen