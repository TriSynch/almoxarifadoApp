import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
	flex: 1,
	padding: 0,
	margin: 0,
	backgroundColor:"ffffff",
	justifyContent: "center",
	alignItems: "center",
   },
  logo: {
	resizeMode: "contain",
	width: 260,
	height: 220,
	margin: "15%",
	marginBottom: 0
  },
  innerContainer: {
	width: '100%',
	height: '100%',
	borderTopLeftRadius: 30,
	borderTopRightRadius: 30,
	backgroundColor: '#7ec449',
  },
  header: {
	marginTop: 10,
	marginBottom: 50,
	justifyContent: 'center',
	alignItems: 'center',
  },
  title: {
	color: '#ffffff',
	fontSize: 46,
	fontFamily: 'Urbanist_700Bold'
  },
  bottom: {
	alignItems: "center",
	justifyContent: "center",
	marginTop: 50,
  },
  formContainer: {
	marginRight: 30,
	marginLeft: 30,
	marginBottom: 35,
},
  formField: {
	marginBottom: 5,
},
h2: {
	fontSize: 24,
	marginBottom: 5,
	color: '#ffffff',
	fontFamily: 'Urbanist_500Medium'
}
});