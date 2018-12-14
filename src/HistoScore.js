import React, { Component } from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";

class HistoScore extends Component {
	constructor(props) {
		super(props);
		this.state = { scores: [] };
	}

	componentDidMount() {
		this._retrieveData("Score");
	}

	_retrieveData = async key => {
		console.log("value");
		try {
			const value = await AsyncStorage.getItem(key);
			if (value !== null) {
				console.log(value);
				this.setState({ scores: value });
				console.log("e", this.state.scores);
			}
		} catch (error) {
			console.log("error", error.message);
		}
	};

	render() {
		return (
			<View>
				<Text style={styles.titre}>Historique des Scores </Text>
				<View>
					<Text>Score: {this.state.scores[0]} </Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	titre: {
		fontSize: 20
	},
	txt: {
		fontSize: 18
	}
});

export default HistoScore;
