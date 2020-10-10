import React, {useEffect, useState} from "react";
import {ActivityIndicator, View, Text, FlatList} from "react-native";
import styles from "./style";
import Texts from "../../text";
import ApiHelper from "../../classes/ApiHelper";
import StockItem from "./StockItem";
import FlashMessage, {showMessage, hideMessage} from "react-native-flash-message";

export default function TicketScreen(props) {
    const [stocks, setStocks] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        getStocks().then(result => {
            setLoaded(true);
            setStocks(result);
        });

        const interval = setInterval(() => {
           getStocks().then(result => {
               setStocks(result);
           })
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const renderItem = ({item}) => <StockItem item={item}/>;

    return <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>{Texts.stocks_screen_header}</Text>
        </View>
        <FlatList
            keyExtractor={ketEx}
            data={stocks}
            maxToRenderPerBatch={4}
            initialNumToRender={10}
            windowSize={10}
            renderItem={renderItem}
        />
        {
            !loaded && <View style={styles.stockPercent}>
                <ActivityIndicator/>
            </View>

        }
        <View>

        </View>
        <FlashMessage position="top" />
    </View>
}

const ketEx = (item) => item.name;

const getStocks = () => {
    return new Promise((resolve) => {
        ApiHelper.callMethod('https://poloniex.com/public?command=returnTicker', {}, 'get')
            .then(({status, data}) => {
                try{
                    if(status === 200){
                        hideMessage();
                        let notAssoc = [];
                        for (let i in data){
                            notAssoc.push({
                                name: i,
                                ...data[i],
                            });
                        }
                        resolve(notAssoc);
                    }else{
                        showMessage({
                            message: data.error,
                            type: 'danger',
                            autoHide: false,
                            hideOnPress: false,
                            duration: 0,
                            titleStyle: {
                                textAlign: 'center',
                                alignSelf: 'center'
                            }
                        });
                        console.log(data);
                    }
                }catch (e) {
                    showMessage({
                        message: Texts.error,
                        type: 'danger',
                        autoHide: false,
                        hideOnPress: false,
                        duration: 0,
                        titleStyle: {
                            textAlign: 'center',
                            alignSelf: 'center'
                        }
                    });
                }
                resolve([]);
            });
    })

}





