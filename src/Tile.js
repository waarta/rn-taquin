import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

class Tile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var y = Math.abs((this.props.value - 1) % 3);
		var x = Math.abs(Math.trunc((this.props.value - 1) / 3));

		return (
			<TouchableOpacity onPress={this.props.onPress}>
				{this.props.value != 0 ? (
					<View
						style={[
							styles.tile,
							{
								width: this.props.tileSize,
								height: this.props.tileSize,
								overflow: "hidden"
							}
						]}
					>
						<Image
							source={require("../img/canards.jpg")}
							resizeMode="cover"
							style={{
								width: this.props.tileSize * 3,
								height: this.props.tileSize * 3,
								position: "absolute",
								top: -(x * this.props.tileSize),
								left: -(y * this.props.tileSize)
							}}
						/>
						<Text style={styles.txtTile}>{this.props.value}</Text>
					</View>
				) : (
					<View
						style={[
							styles.tile,
							{
								width: this.props.tileSize,
								height: this.props.tileSize,
								overflow: "hidden"
							}
						]}
					/>
				)}
			</TouchableOpacity>
		);
	}
}

Tile.propTypes = {
	tileSize: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
	onPress: PropTypes.func,
	active: PropTypes.bool
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
