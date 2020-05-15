import {StyleSheet} from 'react-native'
import Colors from '../../config/colors'

const styles = StyleSheet.create({
    stepperView: {
        backgroundColor: Colors.white,
        flex: 1,
        marginTop: -70,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 20,
        paddingTop: 50
    },
    header: {
        marginBottom: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    progressContainer: {
        justifyContent: 'flex-end',
        flexGrow: 1,
    },
    progress: {
        alignSelf: 'flex-end',
    },
});

export default styles;