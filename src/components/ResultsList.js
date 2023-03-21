import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({title,results,navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(result) => result.id}
                data={results}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity>
                            <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    )
                }                   
                }    
            />
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom: 10
    }
});

export default ResultsList;