import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

class TileGrid extends Component {
	constructor(props) {
		super(props);
	}
	onLayout(event) {}
	render() {
		return (
			<View>
				<View
					onLayout={this.onLayout.bind(this)}
					style={[
						styles.carre,
						{
							width: this.props.dimension,
							height: this.props.dimension
						}
					]}
				>
					<Text>{this.props.dimension}</Text>
				</View>
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
	}
});
export default TileGrid;
