import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

const API_KEY = "b9bd48a6";
const BASE_URL = "http://www.omdbapi.com/"

class SearchScreen extends Component {
  state = { movies: [], movieDetails: "", isLoading: false };

  onSearchSubmit = searchTerm => {
    this.setState({ isLoading: true });
    return fetch(`${BASE_URL}?apikey=${API_KEY}&s=${searchTerm}&type=movie`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ movies: responseJson.Search, isLoading: false });
        return responseJson.Search;
      })
      .catch(error => {
        console.error(error);
      });
  };

  getMovieDetails = itemData => {
    this.setState({ isLoading: true });
    return fetch(`${BASE_URL}?apikey=${API_KEY}&i=${itemData.item.imdbID}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ movieDetails: responseJson, isLoading: false });
        this.props.navigation.navigate('Details', {movieDetails: this.state.movieDetails});
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  render() { 
    if (this.state.isLoading) {
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.loadingSpinner}>
            <ActivityIndicator size="large" color="#135a91" />
          </View>
        </SafeAreaView>
      );
    }
    return ( 
      <SafeAreaView style={styles.container}>
        <Text style={styles.searchTitle}>Title</Text>
        <View style={styles.inputContainer}>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </View>
        <FlatList
          data={this.state.movies}
          renderItem={itemData => <MovieCard movie={itemData} onMoviePress={() => this.getMovieDetails(itemData)} />}
          keyExtractor={(item, index) => index.toString()}
        ></FlatList>
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
  searchTitle: {
    marginTop: 10,
    marginBottom: 5
  }
});
 
export default SearchScreen;