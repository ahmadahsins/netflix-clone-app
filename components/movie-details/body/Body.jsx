import { Image, ImageBackground, Text, View } from "react-native";

import styles from "./body.style";
import { COLORS, FONT, SIZES, icons } from "../../../constants";
import { starsReview, timeConvert } from "../../../utils";
import SimilarMovies from "../similar/SimilarMovies";

const Body = ({ movie, similarMovies, genres, handleCardPress }) => {
    return (
        <>
            <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}} style={styles.headerContainer}>
            </ImageBackground>
            <View style={styles.container}>
                <View style={styles.detailContainer} horizontal contentContainerStyle={{ columnGap: SIZES.small }}>
                    <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}} style={styles.posterImage} />
                    <View style={styles.detailContent}>
                        <View style={{ flex: 1, gap: 5}}>
                            <Text style={styles.movieTitle}>{movie.original_title}</Text>
                            <Text style={styles.movieGenre}>{movie.genres.map(genre => genre.name).join(" | ")}</Text>
                            <Text style={styles.releaseDate}>{movie.release_date}</Text>
                            <Text style={styles.rating}>{`${starsReview(movie)} (${Math.floor(movie.vote_average)}/10)`}</Text>
                        </View>
                        <View style={{ flexDirection: "row", gap: 5, alignItems: "center", height: "fit-content" }}>
                            <Image source={icons.time} resizeMode='contain' style={styles.durationImage} />
                            <Text style={styles.duration}>{timeConvert(movie.runtime)}</Text>
                        </View>
                    </View>
                </View>
                <Text style={{ color: COLORS.primary, fontFamily: FONT.medium, fontSize: SIZES.medium }}>Overview</Text>
                <Text style={styles.movieOverview}>{movie.overview}</Text>
                <SimilarMovies movie={similarMovies} genres={genres} handleCardPress={handleCardPress} />
            </View>
        </>
    )
}

export default Body
