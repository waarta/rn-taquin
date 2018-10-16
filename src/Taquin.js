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
			score: 0
		};
	}

	onLayout(event) {
		var width = event.nativeEvent.layout.width;
		var height = event.nativeEvent.layout.height;
		if (width < height)
			this.setState({ dimensionGrid: Math.round(width - 20) });
		else this.setState({ dimensionGrid: Math.round(height - 20) });
	}

	render() {
		return (
			<View style={styles.container} onLayout={this.onLayout.bind(this)}>
				<Title />
				<Score score={this.state.score} />
				<TileGrid dimension={this.state.dimensionGrid} />
				<PictureSelector />
				<Footer />
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
