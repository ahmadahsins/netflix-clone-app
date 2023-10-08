import React, { useState } from 'react'
import { Text, View , TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { SIZES, icons } from '../../../constants';

const movieTypes = [
    "Popular",
    "Top Rated",
    "Upcoming",
]


const Welcome = () => {
    const router = useRouter();
    const [activeMovieType, setActiveMovieType] = useState(movieTypes[0]);

    return (
        <View>
            <View style={styles.container}> 
                <Text style={styles.welcome}>Welcome to Netflix</Text>
                <Text style={styles.welcomeMessage}>Find your favourite movies here!</Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                <TextInput style={styles.searchInput} placeholder='What movie are you looking for?' />
                </View>

                <TouchableOpacity style={styles.searchBtn}>
                    <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage} />
                </TouchableOpacity>
            </View>
            <View style={styles.tabsContainer}>
                <FlatList 
                data={movieTypes} 
                renderItem={({ item }) => (
                    <TouchableOpacity 
                    style={styles.tab(activeMovieType, item)} 
                    onPress={() => {
                        setActiveMovieType(item);
                        router.push(`/search/${item}`);
                    }}
                    >
                    <Text style={styles.tabText(activeMovieType, item)}>{item}</Text>
                    </TouchableOpacity>
                )} 
                keyExtractor={item => item}
                contentContainerStyle={{ columnGap: SIZES.small }}
                horizontal
                />
            </View>
        </View>
    )
}

export default Welcome
