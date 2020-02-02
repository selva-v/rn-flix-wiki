import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

class MovieCard extends Component {
  state = {};

  render() {
    const { Poster, Title, Year } = this.props.movie.item;
    return (
      <View style={styles.movieCardContainer}>
        <TouchableOpacity activeOpacity={0.6} style={styles.movieCard} onPress={this.props.onMoviePress}>
          <View style={styles.poster}>
            {Poster === "N/A" ? (
              <Image style={styles.posterImage} source={require("../assets/poster-na.jpg")} />
            ) : (
              <Image style={styles.posterImage} source={{ uri: Poster }} />
            )}
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
    backgroundColor: "#fff",
    marginBottom: 10,
    borderColor: "#fff",
    borderWidth: 0,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1
  },
  movieCard: {
    flexDirection: "row"
  },
  poster: {
    width: "30%"
  },
  details: {
    width: "70%"
  },
  posterImage: {
    width: 90,
    height: 110
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5
  },
  movieYear: {
    fontSize: 18
  }
});

export default MovieCard;
