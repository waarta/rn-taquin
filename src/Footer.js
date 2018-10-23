import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import PropTypes from "prop-types";

class Footer extends Component {
	render() {
		return (
			<View style={styles.footer}>
				<View style={styles.button}>
					<Button onPress={this.props.newGame} title="New" color="#1E90FF" />
				</View>
				<View style={styles.button}>
					<Button
						onPress={this.props.resetGame}
						title="Reset"
						color="#1E90FF"
					/>
				</View>
			</View>
		);
	}
}

Footer.propTypes = {
	newGame: PropTypes.func,
	new: PropTypes.bool,
	resetGame: PropTypes.func,
	reset: PropTypes.bool
};

const styles = StyleSheet.create({
	footer: {
		flexDirection: "row"
	},
	button: {
		margin: 50,
		width: 100
	}
});
export default Footer;
