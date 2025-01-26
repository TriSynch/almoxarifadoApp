import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
		padding: 0,
		margin: 0,
	},
	innerContainer: {
		width: '100%',
		height: '100%',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		backgroundColor: '#7ec449',
	},
	h1: {
		fontSize: 48,
		fontWeight: 'bold',
		color: '#ffffff',
		fontFamily: 'Urbanist_700Bold'
	},
	h2: {
		fontSize: 24,
		marginBottom: 5,
		color: '#ffffff',
		fontFamily: 'Urbanist_500Medium'
	},
	image: {
		resizeMode: "contain",
		width: 187,
		height: 100,
		marginTop: 160,
		marginBottom: 30,
	},
	header: {
		marginTop: 10,
		marginBottom: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	formContainer: {
		marginRight: 30,
		marginLeft: 30,
	},
	formField: {
		marginBottom: 5,
	}
});