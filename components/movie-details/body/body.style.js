import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        width: 360,
        height: 200,
        padding: SIZES.medium,
        opacity: 0.9,
    },
    container: {
        marginTop: SIZES.large,
        paddingHorizontal: SIZES.medium,
    },
    detailContainer: {
        flex: 1,
        flexDirection: "row",
        gap: SIZES.small,
        overflow: "hidden",
        marginBottom: SIZES.xSmall,
    },
    detailContent: {
        flex: 1,
        justifyContent: "space-between",
    },
    posterImage: {
        width: 120,
        height: 180,
        borderRadius: 5,
    },
    movieTitle: {
        color: COLORS.white,
        fontSize: SIZES.large,
        fontFamily: FONT.bold,
        color: COLORS.white,
        flexWrap: "wrap",
    },
    movieGenre: {
        color: COLORS.primary,
        flexWrap: "wrap",
        fontFamily: FONT.medium,
    },
    movieOverview: {
        color: COLORS.white,
        fontFamily: FONT.regular,
    },
    rating: { 
        color: COLORS.secondary, 
        fontSize: SIZES.small ,
        fontFamily: FONT.small,
    },
    releaseDate: {
        color: COLORS.white,
        fontFamily: FONT.medium,
    },
    duration: {
        color: COLORS.secondary,
        fontSize: SIZES.small,
    }, 
    durationImage: {
        width: 15,
        height: 15,
        tintColor: COLORS.secondary,
    },
});

export default styles;