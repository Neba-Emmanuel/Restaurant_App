import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {Feather, EvilIcons} from '@expo/vector-icons';

const SearchBar = () => {
    return(
        <View style={styles.background}>
            <EvilIcons name="search" size={24} color="black" />
            <Text>SearchBar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#FOEEEE',
        height: 50,
        borderRadius: 7,
        marginHorizontal: 20,
    }
});

export default SearchBar;