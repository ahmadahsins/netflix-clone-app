import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        NetflixBold: require("../assets/fonts/NetflixSans-Bold.otf"),
        NetflixLight: require("../assets/fonts/NetflixSans-Light.otf"),
        NetflixMedium: require("../assets/fonts/NetflixSans-Medium.otf"),
        NetflixRegular: require("../assets/fonts/NetflixSans-Regular.otf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if(!fontsLoaded) {
        return null;
    }

    return <Stack onLayout={onLayoutRootView} />
}

export default Layout;