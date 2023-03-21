import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultsDetail = ({result}) => {
    return(
        <View style={styles.container}>
            <Image source={{uri: result.image_url}} style={styles.imageStyle}/>
            <Text style={styles.textStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 15,
    },
    textStyle:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    imageStyle:{
        width: 250,
        height: 150,
        borderRadius: 5,
        marginBottom: 5
    }
});

export default ResultsDetail;