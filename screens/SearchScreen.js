import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

const API_KEY = "b9bd48a6";
const BASE_URL = "http://www.omdbapi.com/"

class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
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
        console.log(this.state.movieDetails);
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
      <View>
        <Text style={styles.appTitle}>Find movies</Text>
        <View style={styles.inputContainer}>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </View>
        <FlatList
          data={this.state.movies}
          renderItem={itemData => <MovieCard movie={itemData} onMoviePress={() => this.getMovieDetails(itemData)} />}
          keyExtractor={itemData => itemData.imdbID}
        ></FlatList>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  loadingSpinner: {
    flex: 1,
    justifyContent: "center"
  },
  appTitle: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20
  }
});
 
export default SearchScreen;