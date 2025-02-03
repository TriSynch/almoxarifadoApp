import {
  useFonts,
  Urbanist_700Bold,
	Urbanist_500Medium,
} from '@expo-google-fonts/urbanist';
import AppLoading from 'expo-app-loading';
import { Redirect } from 'expo-router';

export default function App() {
	const [fontsLoaded] = useFonts({
    Urbanist_700Bold,
		Urbanist_500Medium
  });

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return <Redirect href="/sign-up"/>
}