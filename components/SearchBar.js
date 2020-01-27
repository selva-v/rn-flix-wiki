import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

class SearchBar extends Component {
  state = { searchTerm: ''};

  onSearchPress = () => {
    this.props.onSubmit(this.state.searchTerm);
  }
  
  render () {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          value={this.state.searchTerm}
          onChangeText={text => this.setState({searchTerm: text})}
          style={styles.input}
          placeholder="Search movies"
        />
        <Button title="Search" onPress={this.onSearchPress} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "78%",
    borderColor: "#b9c8d2",
    borderWidth: 1,
    padding: 10
  }
});

export default SearchBar;