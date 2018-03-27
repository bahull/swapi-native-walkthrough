import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { List, ListItem } from "react-native-elements";
import axios from "axios";

class AllCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chars: []
    };
  }
  componentDidMount() {
    axios.get("https://swapi.co/api/people").then(resp => {
      this.setState({ chars: resp.data.results });
    });
  }
  onLearnMore(char) {
    this.props.navigation.navigate("ChararDetails", char);
  }

  render() {
    return (
      <ScrollView>
        <List>
          {this.state.chars.length >= 1 &&
            this.state.chars.map((curr, item) => (
              <ListItem
                key={item}
                title={curr.name}
                subtitle={curr.birth_year}
                onPress={() => this.onLearnMore(curr)}
              />
            ))}
        </List>
      </ScrollView>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default AllCharacters;
