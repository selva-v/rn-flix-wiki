import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from "react-native";

class SearchBar extends Component {
  state = { term: ''};

  onSearchPress = () => {
    this.props.onSubmit(this.state.term);
  }
  
  render () {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          value={this.state.term}
          onChangeText={text => this.setState({term: text})}
          style={styles.input}
          placeholder="Marvel"
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
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    width: "78%",
    fontSize: 16,
    backgroundColor: "#fff",
    borderColor: "#1a78c2",
    borderWidth: 1,
    padding: 10
  }
});

export default SearchBar;