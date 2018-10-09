import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

class Score extends Component {
	constructor(props) {
		super(props);
		this.state = { score: 0 };
	}
	render() {
		return (
			<View>
				<Text>Score: {this.state.score}</Text>
			</View>
		);
	}
}

Score.propTypes = {
	score: PropTypes.number
};
export default Score;
