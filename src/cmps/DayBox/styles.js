
import {StyleSheet} from 'react-native'
import Colors from '../../config/colors'

const styles = StyleSheet.create({
    dayBoxView: {
        width: 100,
        padding: 20,
        backgroundColor: Colors.primeryLight,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    dayMonth: {
        fontSize: 24,
        color: Colors.white,
        marginBottom: 5
    },
    dayWeek: {
        fontSize: 24,
        color: Colors.white,
    }
});

export default styles;