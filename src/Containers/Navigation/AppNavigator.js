import React, { Component } from 'react';
import { 
    createDrawerNavigator, 
    createStackNavigator 
} from 'react-navigation';

import MainView from '../MainView';
import PlansListView from '../PlansListView';
import PlanCreate from '../PlanCreate';
import ExpensesListView from '../ExpensesListView';
import ExpenseCreate from '../ExpenseCreate';
import ReportView from '../ReportView';
import SettingsView from '../SettingsView'

const AppNavigator = createDrawerNavigator({
    Main: {
        screen: MainView,
    },
    Budget: {
        screen: createStackNavigator({
            PlanList: PlansListView,
            PlanCreate: PlanCreate,
            // navigationOptions: {
            //     header: { visivle: false }
            // }
        })
    },
    Expense: {
        screen: createStackNavigator({
            ExpenseList: ExpensesListView,
            ExpenseCreate: ExpenseCreate,
        }) 
    },
    Report: {
        screen: ReportView,
    },
    Setting: {
        screen: SettingsView,
    },
});

export default AppNavigator;