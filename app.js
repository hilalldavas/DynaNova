import { View } from "react-native-web";
import React,{Component} from "react";
import{
    SafeAreaView,
    StyleSheet,
    Scrollview,
    View,
    Text,
    StatusBar,
} from 'react-native';

export default class App extends React.Component{
    render(){
        return(
            <View style={style.welcome_area}>
                <Text>ldsajgşda</Text>
            </View>
        )
    }
}
const style = StyleSheet.create({
    welcome_area:{paddingTop:150}
});