import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Title from "./Title.js";
import Score from "./Score.js";
import TileGrid from "./TileGrid.js";
import PictureSelector from "./PictureSelector.js";

class Taquin extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Title />
				<Score />
				<TileGrid />
				<PictureSelector />
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
