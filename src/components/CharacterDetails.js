import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { List, ListItem, Card } from "react-native-elements";

class CharacterDetails extends Component {
  render() {
    const {
      birth_year,
      eye_color,
      gender,
      hair_color,
      height,
      homeworld,
      mass,
      name,
      skin_color
    } = this.props.navigation.state.params;
    return (
      <View>
        <Card title="Your Character">
          <View style={styles.flexed}>
            <Text>{birth_year}</Text>
            <Text>{eye_color}</Text>
          </View>
          <View style={styles.flexed}>
            <Text>{gender}</Text>
            <Text>{hair_color}</Text>
          </View>
          <View style={styles.flexed}>
            <Text>{height}</Text>
            <Text>{mass}</Text>
          </View>
          <View style={styles.flexed}>
            <Text>{name}</Text>
            <Text>{skin_color}</Text>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flexed: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default CharacterDetails;
