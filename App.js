import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, FlatList } from "react-native";
import Constants from "expo-constants";
import SearchBar from "./components/SearchBar";

const API_KEY = "b9bd48a6";

class App extends Component {
  state = { movies: [] };

  onSearchSubmit = async searchTerm => {
    try {
      const response = await fetch(`http://www.ombdapi.com/?apikey=${API_KEY}&t=${searchTerm}&type=movie`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      let responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.appTitle}>Find movies</Text>
        <View style={styles.inputContainer}>
          <SearchBar onSubmit={this.onSearchSubmit} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginLeft: 10,
    marginRight: 10
  },
  appTitle: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20
  }
});

export default App;
