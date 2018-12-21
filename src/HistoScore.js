import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	AsyncStorage,
	TouchableOpacity
} from "react-native";

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

	clearHisto() {
		AsyncStorage.clear();
		this.setState({ games: [] });
	}

	render() {
		let games = this.state.games;
		return (
			<View>
				<View style={styles.container}>
					<Text style={styles.txt}>Historique des Scores</Text>
					<TouchableOpacity onPress={this.clearHisto.bind(this)}>
						<Text style={styles.txt}>X</Text>
					</TouchableOpacity>
				</View>
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
	container: {
		flexDirection: "row"
	},
	txt: {
		fontSize: 20,
		margin: 10
	},
	btn: {
		marginRight: 0,
		backgroundColor: "transparent",
		width: 100,
		height: 20
	}
});

export default HistoScore;
