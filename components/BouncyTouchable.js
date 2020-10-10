import React from "react";
import {TouchableWithoutFeedback, Animated, View} from "react-native";


export default class BouncyTouchable extends React.PureComponent {

    scale = new Animated.Value(0);

    render() {
        const {style, children, bounceMin = 0.9} = this.props;
        const scale = this.scale.interpolate({
            inputRange: [0, 1],
            outputRange: [1, bounceMin],
            extrapolate: 'clamp'
        });

        return <TouchableWithoutFeedback
            onPress={this.onPress}
            onPressIn={this.pressIn}
            onPressOut={this.pressOut}>
            <Animated.View style={{transform: [{scale: scale}]}}>
                <View style={style}>
                    {children}
                </View>
            </Animated.View>
        </TouchableWithoutFeedback>
    }

    onPress = (event) => {
        this.pressOut();
        const {onPress = () => {}} = this.props;
        onPress(event);
    };

    pressIn = () => {
        const {speed = 300} = this.props;
        Animated.spring(
            this.scale,
            {
                toValue: 1,
                // restSpeedThreshold: 3.5,
                speed: speed,
                useNativeDriver: true
            }
        ).start()
    };

    pressOut = () => {
        Animated.spring(
            this.scale,
            {
                toValue: 0,
                restSpeedThreshold: 3.5,
                speed: 2,
                useNativeDriver: true
            }
        ).start()
    }
}
