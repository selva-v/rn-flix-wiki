import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator, StatusBar } from "react-native";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

const API_KEY = "b9bd48a6";
const BASE_URL = "http://www.omdbapi.com/";
const TYPE = "movie";

class SearchScreen extends Component {
  state = {
    searchParam: "",
    movies: [],
    movieDetails: "",
    page: "",
    isLoading: false,
    isFetching: false,
    isListEnd: false
  };

  onSearchSubmit = term => {
    this.setState({ searchParam: term, movies: [], page: 1, isLoading: true, isListEnd: false }, () => {
      this.getMovieList();
    });
  };

  getMovieList = () => {
    fetch(`${BASE_URL}?apikey=${API_KEY}&s=${this.state.searchParam}&type=${TYPE}&page=${this.state.page}`)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.Response === "True") {
          this.setState({
            movies: [...this.state.movies, ...responseJson.Search],
            isLoading: false,
            isFetching: false
          });
        } else {
          this.setState({ isListEnd: true, isLoading: false, isFetching: false });
        }
      })
      .catch(error => {
        this.setState({ isLoading: false, isFetching: false });
        console.error(error);
      });
  };

  handleLoadMore = () => {
    this.setState({ page: this.state.page + 1, isFetching: true }, () => {
      this.getMovieList();
    });
  };

  getMovieDetails = itemData => {
    this.setState({ isLoading: true });
    fetch(`${BASE_URL}?apikey=${API_KEY}&i=${itemData.item.imdbID}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ movieDetails: responseJson, isLoading: false });
        this.props.navigation.navigate("Details", { movieDetails: this.state.movieDetails });
      })
      .catch(error => {
        this.setState({ isLoading: false });
        console.error(error);
      });
  };

  renderFooter = () => {
    return (
      <View style={styles.footer}>
        {this.state.isFetching && !this.state.isListEnd ? <ActivityIndicator size="small" color="#135a91" /> : null}
        {this.state.isListEnd ? <Text style={styles.footer}>You're all caught up</Text> : null}
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        {this.state.isLoading ? (
          <View style={styles.loadingSpinner}>
            <ActivityIndicator size="large" color="#135a91" />
          </View>
        ) : null}
        <View style={styles.wrapper}>
          <Text style={styles.searchTitle}>Title</Text>
          <View style={styles.inputContainer}>
            <SearchBar onSubmit={this.onSearchSubmit} />
          </View>
          <FlatList
            data={this.state.movies}
            renderItem={itemData => <MovieCard movie={itemData} onMoviePress={() => this.getMovieDetails(itemData)} />}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={() => this.handleLoadMore()}
            onEndReachedThreshold={0.5}
            ListFooterComponent={() => this.renderFooter()}
          ></FlatList>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f8fd"
  },
  wrapper: {
    marginLeft: 10,
    marginRight: 10
  },
  loadingSpinner: {
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1
  },
  searchTitle: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10
  },
  footer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    fontWeight: "bold"
  }
});

export default SearchScreen;
