import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack } from "expo-router";

import { FONT, SIZES, COLORS } from "../constants";
import Recommended from "../components/home/recommended/Recommended";
import Welcome from "../components/home/welcome/Welcome";

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.white },
                    headerShadowVisible: false,
                    headerTitle: "",
                }} 
            />
            
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome />
                    <Recommended />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;