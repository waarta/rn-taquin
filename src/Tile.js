import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

class Tile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View
				style={[
					styles.tile,
					{
						width: this.props.tileSize,
						height: this.props.tileSize
					}
				]}
			>
				<Text style={styles.txtTile}>
					{this.props.value != 0 ? this.props.value : ""}
				</Text>
			</View>
		);
	}
}
Tile.propTypes = {
	tileSize: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
	tile: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "black"
	},
	txtTile: {
		fontSize: 28
	}
});
export default Tile;
