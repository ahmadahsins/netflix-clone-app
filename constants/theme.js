const FONT = {
    regular: "NetflixRegular",
    medium: "NetflixMedium",
    bold: "NetflixBold",
    light: "NetflixLight",
};

const COLORS = {
    primary: "#db0000",
    secondary: "#a1a1aa",
    tertiary: "#831010",

    gray: "#83829A",
    gray2: "#C1C0C8",

    white: "#F3F4F8",
    black: "#000",
};

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
};

const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    medium: {
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
    },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
};

export { FONT, COLORS, SIZES, SHADOWS };