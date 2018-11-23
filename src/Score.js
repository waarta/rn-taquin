import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

class Score extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.score}>
				<Text style={styles.txt}>Score: {this.props.score}</Text>
			</View>
		);
	}
}

Score.propTypes = {
	score: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
	score: {
		marginBottom: 10
	},
	txt: {
		fontSize: 18
	}
});
export default Score;
