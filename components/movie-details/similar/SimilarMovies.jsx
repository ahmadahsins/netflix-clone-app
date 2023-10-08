import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import MovieCard from '../../common/cards/MovieCard';
import { SIZES } from '../../../constants';

import styles from './similarmovies.style';

const SimilarMovies = ({ movie, genres, handleCardPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Similar Movies</Text>
                <TouchableOpacity>
                <Text style={styles.headerBtn}>View All</Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                    data={movie}
                    renderItem={({ item }) => (
                    <MovieCard movie={item}
                    genres={genres}
                    handleCardPress={handleCardPress} />
                    )}
                    keyExtractor={item => item?.id}
                    contentContainerStyle={{ columnGap: SIZES.medium }}
                    horizontal
                />
        </View>
    )
}

export default SimilarMovies
