import React, {useEffect, useLayoutEffect} from "react";
import {Animated, View, Text} from "react-native";
import styles from "./style";
import BouncyTouchable from "../../components/BouncyTouchable";
import LinearGradient from "react-native-linear-gradient";
import Texts from "../../text/index";

export default function StartScreen(props) {
    const {navigation} = props;
    const anim = new Animated.Value(0);
    useEffect(() => {
        Animated.spring(anim, {toValue: 1,
            restSpeedThreshold: 3.5,
            // bounciness: 0,
            damping: 30,
            // speed: 3,
            useNativeDriver: true}).start()
    }, []);

    const pos = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 0],
    });

    const opacity = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    return <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>{Texts.start_screen_header}</Text>
        </View>
        <Animated.View style={[styles.navigationContainer, {opacity: opacity, transform: [{translateY: pos}]}]}>
            <BouncyTouchable onPress={() => navigation.navigate('TicketScreen')}>
                <View style={styles.ticketButton}>
                    <LinearGradient colors={['rgba(254,87,98,1)', 'rgba(254,107,161,1)']} style={styles.ticketButtonGradient}/>
                    <Text style={styles.ticketButtonText}>{Texts.nav_to_stock_screen}</Text>
                </View>
            </BouncyTouchable>
        </Animated.View>
    </View>
}
