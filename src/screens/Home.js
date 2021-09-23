import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text, FlatList, ScrollView, Image, Dimensions, TouchableNativeFeedbackBase, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Api from '../api/Api';
import ProductList from '../components/ProductList';
import resultHook from '../components/resultHook';



const Home = ({ navigation }) => {
    const [aliExpressApi, results] = resultHook();
    const [term, setTerm] = useState('');
    const { width, height } = Dimensions.get('window')

    const filterResultsByCategoryName = (first_level_category_name) => {
        // return if the results first_level_category_name is equal to the one that passed in.
        return results.filter(result => {
            return result.first_level_category_name === first_level_category_name;
        });
    }

    const filterResultsByDiscountRate = () => {
        return results.filter(result => {
            return result.discount_rate >= 50;
        });
    }

    return (
        <View style={{ flex: 1 }}>

            <ScrollView>
                <ProductList
                    results={filterResultsByDiscountRate()}
                    title="Super Deals"
                />
                <ProductList
                    results={filterResultsByCategoryName("Hair Extensions & Wigs")}
                    title="Hair Extensions and Wigs"
                />
                <ProductList
                    results={filterResultsByCategoryName("Women's Clothing")}
                    title="Women's Clothing"
                />
                <ProductList
                    results={filterResultsByCategoryName("Watches")}
                    title="Watches"
                />
                <ProductList
                    results={filterResultsByCategoryName("Tools")}
                    title="Tools"
                />
                <ProductList
                    results={filterResultsByCategoryName("Toys & Hobbies")}
                    title="Toys and Hobbies"
                />
                <ProductList
                    results={filterResultsByCategoryName("Sports & Entertainment")}
                    title="Sports and Entertainment"
                />
                <ProductList
                    results={filterResultsByCategoryName("Home & Garden")}
                    title="Home and Garden"
                />

            </ScrollView>



        </View >
    );
};

Home.navigationOptions = {
    title: 'Shop',
    tabBarIcon: <FontAwesome5 name="home" size={25} color="black" />
};


const styles = StyleSheet.create({


});
export default Home;