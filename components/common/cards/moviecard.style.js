import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 300,
        backgroundColor: COLORS.black,
        justifyContent: "space-between",
        // ...SHADOWS.medium,
        // shadowColor: COLORS.white,
    },
    posterContainer: {
        height: "65%",
    },
    posterImage: {
        width: "100%",
        height: "100%",
        borderRadius: 5,
    },
    bodyCardContainer: {
        flex: 1,
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "space-around",
        gap: SIZES.small,
        padding: SIZES.xSmall,
    },
    movieTitle: {
        fontSize: SIZES.medium,
        fontFamily: FONT.bold,
        color: COLORS.white,
        marginTop: SIZES.small / 1.5,
        flexWrap: "wrap",
    },
    movieGenre: {
        color: COLORS.primary,
        fontFamily: FONT.medium,
    },
    rating: { 
        color: COLORS.secondary, 
        fontSize: SIZES.small 
    },
});

export default styles;
