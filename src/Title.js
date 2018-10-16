import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Title extends Component {
	render() {
		return (
			<View style={styles.titre}>
				<Text style={styles.txt}>Mon Taquin</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	titre: {
		height: 40,
		width: 380,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#DCDCDC"
	},
	txt: {
		fontSize: 28
	}
});

export default Title;
