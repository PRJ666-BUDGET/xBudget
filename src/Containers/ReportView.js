import React, { Component } from 'react';
import { 
    StyleSheet, 
    ScrollView, 
    Text 
} from 'react-native';
import BarChart from '../Components/BarChart';
import PieChart from '../Components/PieChart';
import LineChart from '../Components/LineChart';

export default class ReportView extends Component {
    static navigationOptions = {
        drawewrLabel: 'ReportView',
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>ReportView</Text>
                <BarChart />
                <PieChart />
                {/* <LineChart /> */}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
