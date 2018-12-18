import React, { Component } from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";

class HistoScore extends Component {
	constructor(props) {
		super(props);
		this.state = { games: [] };
	}

	componentDidMount() {
		this._retrieveData();
	}

	_retrieveData = async () => {
		try {
			const value = await AsyncStorage.getItem("Games");
			if (value !== null) {
				this.setState({ games: JSON.parse(value) });
			}
		} catch (error) {
			console.log("error", error.message);
		}
	};

	render() {
		let games = this.state.games;
		return (
			<View>
				<Text style={styles.titre}>Historique des Scores </Text>
				<View>
					{games.map((game, i) => {
						return (
							<Text key={"game_" + i}>
								{game.grid} -> {game.score}{" "}
							</Text>
						);
					})}
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
