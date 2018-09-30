import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  VictoryPie,
  VictoryChart,
  VictoryTheme,
} from 'victory-native';

const data = [
  { x: "Cats", y: 35 },
  { x: "Dogs", y: 40 },
  { x: "Birds", y: 55 }
];

export default class PieChart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is pie with mock</Text>
        <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 15 }}>
          <VictoryPie
            colorScale={["tomato", "orange", "gold"]}
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
