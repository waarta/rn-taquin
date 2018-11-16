import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import PropTypes from "prop-types";
import ImagePicker from "react-native-image-picker";

class PictureSelector extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.changePic !== prevProps.changePic) {
			ImagePicker.showImagePicker(options, response => {
				console.log("Response = ", response);

				if (response.didCancel) {
					console.log("User cancelled image picker");
				} else if (response.error) {
					console.log("ImagePicker Error: ", response.error);
				} else if (response.customButton) {
					console.log("User tapped custom button: ", response.customButton);
				} else {
					const source = { uri: response.uri };
					// You can also display the image using data:
					// const source = { uri: 'data:image/jpeg;base64,' + response.data };
					this.setState({
						avatarSource: source
					});
				}
			});
			this.changeImage();
		}
	}

	changeImage() {
		var a = Math.floor(Math.random() * imgs.length);
		this.props.setPicture(imgs[a]);
	}

	render() {
		return (
			<View style={styles.pictureSelect}>
				<Button
					onPress={this.props.changerPicture}
					title="PictureSelector"
					color="#1E90FF"
				/>
			</View>
		);
	}
}

PictureSelector.propTypes = {
	changerPicture: PropTypes.func,
	changePic: PropTypes.bool,
	setPicture: PropTypes.func
};
const options = {
	title: "Select Picture",
	customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
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
