import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
} from 'victory-native';

const data = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 }
];

export default class LineChart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is line with mock</Text>
        <VictoryChart theme={VictoryTheme.material} >
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc"}
            }}
            data={data}
          />
          
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 20,
  },
  heading: {
    fontSize: 27,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 30,
  },
});
