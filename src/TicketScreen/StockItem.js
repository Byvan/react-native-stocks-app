import React, {useEffect, useLayoutEffect} from "react";
import {Animated, View, Text} from "react-native";
import styles from "./style";
import BouncyTouchable from "../../components/BouncyTouchable";
import LinearGradient from "react-native-linear-gradient";
import Texts from "../../text";


export default function StockItem({item}) {
    const {name, last, highestBid, percentChange} = item;

    const fixed_percent = parseFloat(percentChange).toFixed(3);

    const anim = new Animated.Value(0);
    useEffect(() => {
        Animated.spring(anim, {toValue: 1,
            restSpeedThreshold: 3.5,
            // bounciness: 0,
            damping: 30,
            // speed: 3,
            useNativeDriver: true}).start()
    }, []);


    const opacity = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    return <Animated.View style={[{marginTop: 20, opacity: opacity}]}>
                <View style={styles.stockView}>
                    <LinearGradient start={{x: 0, y: -1}} end={{x: 0.9, y:1}} colors={['rgba(0,0,0,1)', 'rgba(103,103,103,1)']} style={styles.stockGradient}/>
                    <View>
                        <Text style={styles.stockName}>{name}</Text>
                    </View>

                    <View>
                        <Text style={styles.stockPrice}>$ {last}</Text>
                        <Text style={{...styles.stockPercent, color: fixed_percent > 0 ? 'rgba(0,185,7,1)': 'rgba(232,11,11,1)'}}>{fixed_percent > 0 && '+'}{fixed_percent}%</Text>
                        <Text style={{...styles.stockPrice, color: '#F5F5F5', fontSize: 13, paddingTop: 3}}>{Texts.max_bid} : $ {highestBid}</Text>
                    </View>
                </View>
        </Animated.View>
}
