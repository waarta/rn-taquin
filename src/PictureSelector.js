import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import PropTypes from "prop-types";
import ImagePicker from "react-native-image-picker";

class PictureSelector extends Component {
	changeImage() {
		ImagePicker.showImagePicker(options, response => {
			console.log("Response = ", response);

			if (response.didCancel) {
				console.log("User cancelled image picker");
			} else if (response.error) {
				console.log("ImagePicker Error: ", response.error);
			} else if (response.customButton) {
				console.log("User tapped custom button: ", response.customButton);
				var a = Math.floor(Math.random() * imgs.length);
				this.props.setPicture(imgs[a]);
			} else {
				const source = { uri: response.uri };
				this.props.setPicture(source);
			}
		});
	}

	render() {
		return (
			<View style={styles.pictureSelect}>
				<Button
					onPress={this.changeImage.bind(this)}
					title="PictureSelector"
					color="#1E90FF"
				/>
			</View>
		);
	}
}

PictureSelector.propTypes = {
	setPicture: PropTypes.func
};
const options = {
	title: "Select Picture",
	customButtons: [{ name: "random", title: "Choose Random Photo" }],
	storageOptions: {
		skipBackup: true,
		path: "images"
	}
};

const imgs = [
	require("../img/android.png"),
	require("../img/biere.png"),
	require("../img/cinema.jpeg"),
	require("../img/maison.jpeg"),
	require("../img/paysage.jpeg"),
	require("../img/canards.jpg")
];

const styles = StyleSheet.create({
	pictureSelect: {
		height: 50,
		justifyContent: "center"
	}
});
export default PictureSelector;
