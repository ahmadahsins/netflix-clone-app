import { Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, ImageBackground } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";

import { COLORS } from "../../constants";
import useFetch from "../../hook/useFetch";
import { MovieDetailBody, MovieDetailFooter } from "../../components";

const MovieDetailsPage = () => {
    const params = useSearchParams();
    const router = useRouter();
    const { movieDetail, genres, similarMovies, isLoading, error, refetch, fetchMovieDetail, fetchSimilarMovies } = useFetch();

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    }, []);

    const handleCardPress = (item) => {
        router.push(`/movie-details/${item.id}`);
    }

    useEffect(() => {
        fetchMovieDetail(params.id);
        fetchSimilarMovies(params.id);
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.white }, 
                    headerShadowVisible: false,
                    headerTitle: "",
                    }}
            />
            
            <>
                <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    {isLoading ? (
                        <ActivityIndicator size="large" color={COLORS.primary} />
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    ) : movieDetail.length === 0 ? (
                        <Text>No Data</Text>
                    ) : (
                        <View style={{ paddingBottom: 100}}>
                            <MovieDetailBody movie={movieDetail} similarMovies={similarMovies} genres={genres} handleCardPress={handleCardPress} />
                        </View>
                    )}
                </ScrollView>
                <MovieDetailFooter url={movieDetail.homepage} />
            </>
        </SafeAreaView>
    )
}

export default MovieDetailsPage;
