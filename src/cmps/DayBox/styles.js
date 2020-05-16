
import {StyleSheet} from 'react-native'
import Colors from '../../config/colors'

const styles = StyleSheet.create({
    dayBoxView: {
        width: 90,
        padding: 20,
        backgroundColor: Colors.primeryLight,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    dayMonth: {
        fontSize: 18,
        color: Colors.white,
        marginBottom: 5
    },
    dayWeek: {
        fontSize: 18,
        color: Colors.white,
    },
    selectedBackground: {
        backgroundColor: Colors.white
    },
    selectedText: {
        color: Colors.primary
    }
});

export default styles;