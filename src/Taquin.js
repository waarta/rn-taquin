import React, { Component } from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";
import Score from "./Score.js";
import TileGrid from "./TileGrid.js";
import PictureSelector from "./PictureSelector.js";
import Footer from "./Footer.js";
import Title from "./Title.js";

class Taquin extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: <Title navigation={navigation} />
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			dimensionGrid: 0,
			score: 0,
			active: true,
			new: false,
			reset: false,
			uriPicture: require("../img/canards.jpg"),
			initialGrid: []
		};
	}

	/* stockage de données */
	_storeData = async () => {
		let games;
		let current = {
			grid: this.state.initialGrid,
			score: this.state.score + 1,
			picture: this.state.picture
		};
		try {
			games = await AsyncStorage.getItem("Games");
			games = JSON.parse(games);
		} catch (error) {
			console.log("get", error.message);
		}

		try {
			if (games != null)
				await AsyncStorage.setItem(
					"Games",
					JSON.stringify([...games, current])
				);
			else await AsyncStorage.setItem("Games", JSON.stringify([current]));
		} catch (error) {
			console.log("set", error);
		}
	};

	onLayout(event) {
		var width = event.nativeEvent.layout.width;
		var height = event.nativeEvent.layout.height;
		if (width < height)
			this.setState({ dimensionGrid: Math.round(width - 20) });
		else this.setState({ dimensionGrid: Math.round(height - 20) });
	}

	setScore() {
		this.setState(oldState => {
			return {
				score: oldState.score + 1
			};
		});
	}

	resetScore() {
		this.setState({ score: 0 });
	}

	isOver() {
		this.setState({ active: false });
		this._storeData();
	}

	newGame() {
		this.setState(oldState => {
			return {
				new: !oldState.new
			};
		});
		this.setState({ active: true });
		this.resetScore();
	}

	resetGame() {
		this.setState(oldState => {
			return {
				reset: !oldState.reset
			};
		});
		this.setState({ active: true });
		this.resetScore();
	}

	setPicture(uri) {
		this.setState({ uriPicture: uri });
	}

	setInitialGrid(tab) {
		this.setState({ initialGrid: [...tab] });
	}

	render() {
		return (
			<View style={styles.container} onLayout={this.onLayout.bind(this)}>
				<Score score={this.state.score} />
				<TileGrid
					dimension={this.state.dimensionGrid}
					setScore={this.setScore.bind(this)}
					active={this.state.active}
					isOver={this.isOver.bind(this)}
					new={this.state.new}
					reset={this.state.reset}
					sourcePicture={this.state.uriPicture}
					setInitialGrid={this.setInitialGrid.bind(this)}
				/>
				<PictureSelector setPicture={this.setPicture.bind(this)} />
				<Footer
					new={this.state.new}
					newGame={this.newGame.bind(this)}
					reset={this.state.reset}
					resetGame={this.resetGame.bind(this)}
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});

export default Taquin;
