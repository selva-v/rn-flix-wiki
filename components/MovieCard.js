import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

class MovieCard extends Component {
  state = {  };
  
  render() { 
    const {Poster, Title, Year} = this.props.movie.item;
    return ( 
      <View style={styles.movieCardContainer}>
        <TouchableOpacity activeOpacity={0.6} style={styles.movieCard} onPress={this.props.onMoviePress}>
          <View style={styles.poster}>
            <Image style={styles.posterImage} source={{uri: Poster}} />
          </View>
          <View style={styles.details}>
            <Text style={styles.movieTitle}>{Title}</Text>
            <Text style={styles.movieYear}>{Year}</Text>
          </View>
        </TouchableOpacity>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  movieCardContainer: {
    width: "100%",
    marginBottom: 20,
    borderColor: '#fff',
    borderWidth: 0,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  movieCard: {
    flexDirection: "row",
  },
  poster: {
    width: "27%"
  },
  details: {
    width: "73%"
  },
  posterImage: {
    width: 90,
    height: 110,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
    
  },
  movieYear: {
    fontSize: 18,
  }
});
 
export default MovieCard;