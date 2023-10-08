import { View, Text, TouchableOpacity, Image } from 'react-native'
        
import styles from './moviecard.style';
// import { starsReview } from '../../../utils';

const MovieCard = ({ movie, genres, handleCardPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => handleCardPress(movie)}>
            <View style={styles.posterContainer}>
                <Image 
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                    resizeMode='cover'
                    style={styles.posterImage}
                />
            </View>
            <View style={styles.bodyCardContainer}>
                <Text style={styles.movieTitle} numberOfLines={2}>
                    {movie.title}
                </Text>
                <Text style={styles.movieGenre}>{genres.map(genre => {
                    if(genre.id === movie.genre_ids[0]) {
                        return genre.name
                    }
                })}</Text>
                <Text style={styles.rating}>{`⭐ (${movie.vote_average}/10)`}</Text>
            </View>
        </TouchableOpacity>
        )
    }
        
export default MovieCard;