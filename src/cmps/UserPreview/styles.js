
import {StyleSheet} from 'react-native'
import Colors from '../../config/colors'

const styles = StyleSheet.create({
    userPreview: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    userDetails: {
    },
    title: {
        fontSize: 24,
        color: Colors.white,
        marginBottom: 5
    },
    subtitle: {
        fontSize: 16,
        color: Colors.white,
    },
    userImage: {
        justifyContent: 'flex-end',
        flexGrow: 1,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: 'flex-end',
    },
});

export default styles;