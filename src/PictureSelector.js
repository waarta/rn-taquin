import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import PropTypes from "prop-types";

class PictureSelector extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.changePic !== prevProps.changePic) {
			this.changeImage();
		}
	}

	/*changeImage() {
		var imgActuel = imgs.indexOf(this.state.image);
		var i = imgActuel < imgs.length - 1 ? imgActuel + 1 : 0;
		this.setState({ image: imgs[i] });
	}*/
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
	changePic: PropTypes.bool
};

const imgs = [
	require("../img/android.png"),
	require("../img/biere.png"),
	require("../img/cinema.jpeg"),
	require("../img/maison.jpeg"),
	require("../img/paysage.jpeg")
];

const styles = StyleSheet.create({
	pictureSelect: {
		height: 50,
		justifyContent: "center"
	}
});
export default PictureSelector;
