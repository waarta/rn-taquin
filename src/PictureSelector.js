import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Dimensions,
	Button
} from "react-native";

class PictureSelector extends Component {
	render() {
		return (
			<View style={styles.pictureSelect}>
				<Button onPress={() => {}} title="PictureSelector" color="#1E90FF" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	pictureSelect: {
		height: 50,
		justifyContent: "center"
	}
});
export default PictureSelector;
