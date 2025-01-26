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
	logo: {
		resizeMode: "contain",
		width: 187,
		height: 100,
		marginTop: 10,
		marginBottom: 30,
	},
	arrowRight: {
		resizeMode: "contain",
		width: 50,
		height: 50,
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
		marginBottom: 35,
	},
	formField: {
		marginBottom: 5,
	},
	bottom: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonBottom: {
		backgroundColor: '#c9f207',
		padding: 10,
		borderRadius: 50,
	}
});