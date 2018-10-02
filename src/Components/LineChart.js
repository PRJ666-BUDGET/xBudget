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
  VictoryArea,
  VictoryAxis,
} from 'victory-native';

// const data = [
//   {quarter: 1, earnings: 13000},
//   {quarter: 2, earnings: 16500},
//   {quarter: 3, earnings: 14250},
//   {quarter: 4, earnings: 19000}
// ];

export default class LineChart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is line with mock</Text>
        <VictoryChart theme={VictoryTheme.material} >         

        
        </VictoryChart>  
        <VictoryLine
          data={[
            { x: 0, y: 1 },
            { x: 1, y: 3 },
            { x: 2, y: 2 },
          ]}
        />

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
