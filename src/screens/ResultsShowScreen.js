import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
 
const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;
 
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
 
  if (!result) {
    return null;
  }
 
  return (
    <View style={{flex: 1}}>
      <Text style={styles.headerText}>{result.name}</Text>
      <Text style={styles.Text}>{result.location.country}, {result.location.city}, {result.location.address1}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.imageStyle} source={{ uri: item }} />
        }}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
  },
  headerText:{
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 35
  },
  Text:{
    fontSize: 14,
    marginLeft: 35,
    marginBottom: 10,
  }
});
 
export default ResultsShowScreen;
