import {StyleSheet} from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingTop: STATUS_BAR_HEIGHT + 16,
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
    ticketButton: {
        width: WIDTH-60,
        borderRadius: 20,
        height: 125,
        padding: 30,

        shadowColor: "rgba(254,87,98,1)",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 3,
    },
    ticketButtonGradient: {
        width: WIDTH-60,
        borderRadius: 20,
        height: 125, top: 0, position: 'absolute'
    },
    ticketButtonText: {
        fontSize: 28,
        fontWeight: IS_IOS ? '500' : 'bold',
        color: '#FFF'
    }
});
export default Styles;
