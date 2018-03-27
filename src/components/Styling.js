import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TextInput
} from "react-native";

class Styling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    // this.updateText = this.updateText.bind(this);
  }
  alerter() {
    Alert.alert("You've tapped the button!");
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          {<Button title="button" onPress={this.alerter} />}
        </View>
        <TextInput
          style={styles.text}
          onChangeText={text => this.setState({ text })}
        />
        <Text>{this.state.text}</Text>
        <Button title="button" onPress={this.alerter} />
        <View style={styles.container2}>
          <TouchableOpacity onPress={this.alerter}>
            <Text>TouchableOpacity</Text>
          </TouchableOpacity>
        </View>
        <Button title="button" onPress={this.alerter} />
        <View style={styles.container3}>
          <TouchableHighlight underlayColor="blue" onPress={this.alerter}>
            <Text>TouchableHighlight</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.container4}>
          <View style={styles.container5}>
            <Button
              title="button"
              style={styles.button}
              onPress={this.alerter}
            />
          </View>

          <View style={styles.container6}>
            <Button title="button" onPress={this.alerter} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey"
  },
  container1: {
    flex: 1,
    backgroundColor: "blue"
  },
  container2: {
    flex: 1,
    backgroundColor: "red"
  },
  container3: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center"
  },
  container4: {
    flex: 1,
    backgroundColor: "green",
    flexDirection: "row"
  },
  container5: {
    flex: 1,
    backgroundColor: "pink"
  },
  container6: {
    flex: 1,
    backgroundColor: "peru"
  },
  text: {
    backgroundColor: "white",
    width: "50%",
    alignSelf: "center",
    borderRadius: 5
  }
});

export default Styling;
