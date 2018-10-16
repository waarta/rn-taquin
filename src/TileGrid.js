import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import Tile from "./Tile.js";

class TileGrid extends Component {
	constructor(props) {
		super(props);
		this.state = { tilesValues: this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 0]) };
	}

	shuffle(array) {
		var rand = Math.floor(Math.random() * 100);
		var voisins;
		for (let i = 0; i < rand; i++) {
			voisins = this.getVoisins(array, 0);
			var indexVoisinRand = voisins[Math.floor(Math.random() * voisins.length)];
			var temp = array[indexVoisinRand];
			array[array.indexOf(0)] = array[indexVoisinRand];
			array[indexVoisinRand] = 0;
		}
		return array;
	}

	getVoisins(array, i) {
		switch (array.indexOf(i)) {
			case 0:
				return [1, 3];
				break;
			case 1:
				return [0, 2, 4];
				break;
			case 2:
				return [1, 5];
				break;
			case 3:
				return [0, 4, 6];
				break;
			case 4:
				return [1, 3, 5, 7];
				break;
			case 5:
				return [2, 4, 8];
				break;
			case 6:
				return [3, 7];
				break;
			case 7:
				return [6, 8, 4];
				break;
			case 8:
				return [5, 7];
				break;
		}
	}

	render() {
		return (
			<View
				style={[
					styles.carre,
					{
						width: this.props.dimension,
						height: this.props.dimension
					}
				]}
			>
				{[0, 1, 2].map(i => {
					return (
						<View key={"row_" + i} style={styles.tileRow}>
							<Tile
								tileSize={this.props.dimension / 3}
								value={this.state.tilesValues[i * 3]}
							/>
							<Tile
								tileSize={this.props.dimension / 3}
								value={this.state.tilesValues[i * 3 + 1]}
							/>
							<Tile
								tileSize={this.props.dimension / 3}
								value={this.state.tilesValues[i * 3 + 2]}
							/>
						</View>
					);
				})}
			</View>
		);
	}
}
TileGrid.propTypes = {
	dimension: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
	carre: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "black"
	},
	tileRow: {
		flexDirection: "row"
	}
});
export default TileGrid;
