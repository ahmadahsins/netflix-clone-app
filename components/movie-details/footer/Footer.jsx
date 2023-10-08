import { Image, Linking, Text, TouchableOpacity, View } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = ({ url }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.likeBtn}>
            <Image
                source={icons.heart}
                resizeMode='contain'
                style={styles.likeBtnImage}
            />
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.watchBtn} onPress={() => Linking.openURL(url)}>
                <Text style={styles.watchBtnText}>Watch Now</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Footer
