import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Title from "./Title.js";
import Score from "./Score.js";
import TileGrid from "./TileGrid.js";
import PictureSelector from "./PictureSelector.js";
import Footer from "./Footer.js";

class Taquin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dimensionGrid: 0,
			score: 0,
			active: true,
			new: false,
			reset: false,
			changePic: false,
			uriPicture: require("../img/canards.jpg")
		};
	}

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
	}

	newGame() {
		this.setState(oldState => {
			return {
				new: !oldState.new
			};
		});
		this.resetScore();
	}

	resetGame() {
		this.setState(oldState => {
			return {
				reset: !oldState.reset
			};
		});
		this.resetScore();
	}

	changerPicture() {
		this.setState(oldState => {
			return {
				changePic: !oldState.changePic
			};
		});
	}

	setPicture(uri) {
		this.setState({ uriPicture: uri });
	}

	render() {
		return (
			<View style={styles.container} onLayout={this.onLayout.bind(this)}>
				<Title />
				<Score score={this.state.score} />
				<TileGrid
					dimension={this.state.dimensionGrid}
					setScore={this.setScore.bind(this)}
					active={this.state.active}
					isOver={this.isOver.bind(this)}
					new={this.state.new}
					reset={this.state.reset}
					sourcePicture={this.state.uriPicture}
					changePic={this.state.changePic}
				/>
				<PictureSelector
					changePic={this.state.changePic}
					changerPicture={this.changerPicture.bind(this)}
					setPicture={this.setPicture.bind(this)}
				/>
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
