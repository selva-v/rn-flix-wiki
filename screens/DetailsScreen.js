import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Movie details',
  };
  
  render() { 
    const { Title, Year, Released, Genre, Poster, Plot, Director, Writer, Actors} = this.props.navigation.state.params.movieDetails;
    return ( 
      <SafeAreaView style={styles.container}>
        <Text style={styles.movieName}>{Title} ({Year})</Text>
        <View style={styles.poster}>
          <Image style={styles.posterImage} source={{uri: Poster}} />
        </View>
        <View style={styles.info}>
          <Text style={styles.infoCard}>{Released}</Text>
          <Text style={styles.infoCard}>{Genre}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.mB15}>{Plot}</Text>
          <Text style={styles.mB15}><Text style={styles.bold}>Directors: </Text>{Director}</Text>
          <Text style={styles.mB15}><Text style={styles.bold}>Writers: </Text>{Writer}</Text>
          <Text style={styles.mB15}><Text style={styles.bold}>Stars: </Text>{Actors}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  loadingSpinner: {
    flex: 1,
    justifyContent: "center"
  },
  movieName: {
    fontSize:20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10
  },
  poster: {
    width: '100%',
    alignItems: "center",
    marginBottom: 10
  },
  posterImage: {
    width: 200,
    height: 300,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 15,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    alignSelf: "center",
    fontWeight: "bold"
  },
  details: {
    width: "100%"
  },
  bold: {
    fontWeight: "bold"
  },
  mB15: {
    marginBottom: 15
  }
});
 
export default DetailsScreen;