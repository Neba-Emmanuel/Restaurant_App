import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ResultsShowScreen = () => {
    return (
        <View>
            <Text>Results</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default useNavigation(ResultsShowScreen);