import React, { Component } from "react";
import Taquin from "./src/Taquin.js";
import { StyleSheet, View, Button } from "react-native";
import {
	createStackNavigator,
	createMaterialTopTabNavigator,
	createAppContainer
} from "react-navigation";
import HistoScore from "./src/HistoScore.js";
import About from "./src/About.js";

export default class App extends Component {
	render() {
		return <AppContainer style={styles.container} />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

const tab = createMaterialTopTabNavigator(
	{
		Scores: {
			screen: HistoScore
		},
		About: {
			screen: About
		}
	},
	{
		tabBarOptions: {
			indicatorStyle: {
				backgroundColor: "#ADCF4F"
			}
		}
	}
);

const AppNavigator = createStackNavigator({
	Home: Taquin,
	Informations: {
		screen: tab,
		navigationOptions: ({ navigation }) => ({
			title: "Informations"
		})
	}
});

const AppContainer = createAppContainer(AppNavigator);
