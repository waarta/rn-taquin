import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Dimensions } from "react-native";
import PropTypes from "prop-types";

class TileGrid extends Component {
	constructor(props) {
		super(props);
		this.state = { dimension: 0 };
	}
	onLayout(event) {
		if (Dimensions.get("window").width < Dimensions.get("window").height)
			this.setState({
				dimension: Math.floor(Dimensions.get("window").width - 20)
			});
		else
			this.setState({
				dimension: Math.floor(Dimensions.get("window").height - 20)
			});
	}
	render() {
		return (
			<View>
				<View
					onLayout={this.onLayout.bind(this)}
					style={[
						styles.carre,
						{
							width: this.state.dimension,
							height: this.state.dimension
						}
					]}
				/>
			</View>
		);
	}
}
TileGrid.propTypes = {
	dimension: PropTypes.number
};

const styles = StyleSheet.create({
	carre: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "black"
	}
});
export default TileGrid;
