import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";

class Footer extends Component {
	render() {
		return (
			<View style={styles.footer}>
				<View style={styles.button}>
					<Button onPress={() => {}} title="New" color="#1E90FF" />
				</View>
				<View style={styles.button}>
					<Button onPress={() => {}} title="Reset" color="#1E90FF" />
				</View>
			</View>
		);
	}
}

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
