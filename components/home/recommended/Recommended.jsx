import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";

import styles from "./recommended.style";
import MovieCard from "../../common/cards/MovieCard";
import { COLORS, SIZES } from "../../../constants";
import { useRouter } from "expo-router";
import useFetch from "../../../hook/useFetch";

const Recommended = () => {
    const router = useRouter();

    const { data, genres, isLoading, error } = useFetch();

    const handleCardPress = (item) => {
        router.push(`/movie-details/${item.id}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Recommended For You</Text>
                <TouchableOpacity>
                <Text style={styles.headerBtn}>View All</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading ? (
                <ActivityIndicator size="large" color={COLORS.white}/>
                ) : error ? (
                <Text>Something went wrong</Text>
                ) : (
                <FlatList 
                    data={data}
                    renderItem={({ item }) => (
                    <MovieCard movie={item}
                    genres={genres}
                    handleCardPress={handleCardPress} />
                    )}
                    keyExtractor={item => item?.id}
                    contentContainerStyle={{ columnGap: SIZES.medium }}
                    horizontal
                />
                )}
            </View>
        </View>
    )
}

export default Recommended
