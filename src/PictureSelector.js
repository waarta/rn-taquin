import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import PropTypes from "prop-types";

class PictureSelector extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.changePic !== prevProps.changePic) {
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
