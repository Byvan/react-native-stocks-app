import {StyleSheet} from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: 30,
        paddingBottom: 10,
        paddingLeft: 30
    },
    headerText: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    navigationContainer: {
        paddingTop: 20,
        paddingHorizontal: 30
    },
    stockView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: WIDTH-60,
        borderRadius: 20,
        height: 80,
        padding: 16,
        alignSelf: 'center',
        shadowColor: "rgba(103,103,103,1)",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 3,
    },
    stockGradient: {
        width: WIDTH-60,
        borderRadius: 20,
        height: 80, top: 0, position: 'absolute'
    },
    stockName: {
        fontSize: 18,
        fontWeight: IS_IOS ? '500' : 'bold',
        color: '#FFF'
    },
    stockPrice: {
        textAlign: 'right',
        fontSize: 15,
        fontWeight: IS_IOS ? '500' : 'bold',
        color: '#FFF'
    },
    stockPercent: {
        textAlign: 'right',
        fontSize: 11,
        lineHeight: 12,
        paddingTop: 3,
    },
    loadingView: {
        position:'absolute',
        width: WIDTH,
        height: HEIGHT,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default Styles;
