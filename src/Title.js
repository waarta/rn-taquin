import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Title extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const navigate = this.props.navigation.navigate;
		return (
			<View style={styles.titre}>
				<Text style={styles.txt}>Mon Taquin</Text>
				<Button title="info" onPress={() => navigate("Informations")} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	titre: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between"
	},
	txt: {
		fontSize: 28,
		margin: 10
	},
	btn: {
		height: 20
	}
});

export default Title;
