import React from "react";
import { crateAppContainer}from "react-navigation";
import { createStackNavigator}from "react-navigation-stack";
import { createBottomTabNavigator}from "react-navigation-tabs";
import { createDrawerNavigator}from "react-navigation-drawer";
import Home from './screen/home';
import Login from './screen/login'
import Signup from './screen/signup';

const HomeStack = createStackNavigator({
    Home:{screen:App}
});
const LoginStack = createStackNavigator({
    login:{ screen:Detail}
});
const SignupStack = createStackNavigator({
    signup:{ screen:Detail}
});
const AppBottomNavigator = createBottomTabNavigator({
    Home:HomeStack,
    Login:LoginStack,
    Signup:SignupStack
})

const AppNavigator = createDrawerNavigator({
    Home:AppBottomNavigator},
    {contentComponent:Drawer
});
export default createAppCpntainer(AppNavigator);