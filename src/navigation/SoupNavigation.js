/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Image} from 'react-native';
import Colors from '../themes/Colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Screens
import IntroScreen from '../screens/Intro';
// Home
import HomeScreen from '../screens/Home';
import BannerDetailScreen from '../screens/BannerDetail';
// Auth
import LoginOptionsScreen from '../screens/LoginOptions';
import PhoneLoginScreen from '../screens/PhoneLogin';
import OtpScreen from '../screens/Otp';
import AddInfoScreen from '../screens/AddInfo';
// Setting
import SettingScreen from '../screens/Setting';
import ProfileScreen from '../screens/Profile';
import ProfileUpdateScreen from '../screens/ProfileUpdate';
// Order
import OrderScreen from '../screens/Order';
// Store Chain
import StoreChainScreen from '../screens/StoreChain';
// Notification
import NotificationScreen from '../screens/Notificaiton';

const IntroStack = createStackNavigator();
export const IntroStackScreens = () => (
  <IntroStack.Navigator screenOptions={{headerShown: false}}>
    <IntroStack.Screen name="IntroScreen" component={IntroScreen} />
  </IntroStack.Navigator>
);

const AuthStack = createStackNavigator();
export const AuthStackScreens = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen
      name="LoginOptionsScreen"
      component={LoginOptionsScreen}
    />
    <AuthStack.Screen name="PhoneLoginScreen" component={PhoneLoginScreen} />
    <AuthStack.Screen name="OtpScreen" component={OtpScreen} />
    <AuthStack.Screen name="AddInfoScreen" component={AddInfoScreen} />
  </AuthStack.Navigator>
);

const ProfileStack = createStackNavigator();
export const ProfileStackScreens = () => (
  <ProfileStack.Navigator screenOptions={{headerShown: false}}>
    <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
    <ProfileStack.Screen
      name="ProfileUpdateScreen"
      component={ProfileUpdateScreen}
    />
  </ProfileStack.Navigator>
);

const SettingStack = createStackNavigator();
export const SettingStackScreens = () => (
  <SettingStack.Navigator screenOptions={{headerShown: false}}>
    <SettingStack.Screen name="SettingScreen" component={SettingScreen} />
    <SettingStack.Screen
      name="ProfileStackScreens"
      component={ProfileStackScreens}
    />
  </SettingStack.Navigator>
);

const OrderStack = createStackNavigator();
export const OrderStackScreens = () => (
  <OrderStack.Navigator screenOptions={{headerShown: false}}>
    <OrderStack.Screen name="OrderScreen" component={OrderScreen} />
  </OrderStack.Navigator>
);

const StoreChainStack = createStackNavigator();
export const StoreChainStackScreens = () => (
  <StoreChainStack.Navigator screenOptions={{headerShown: false}}>
    <StoreChainStack.Screen
      name="StoreChainScreen"
      component={StoreChainScreen}
    />
  </StoreChainStack.Navigator>
);

const NotificationStack = createStackNavigator();
export const NotificationStackScreens = () => (
  <NotificationStack.Navigator screenOptions={{headerShown: false}}>
    <NotificationStack.Screen
      name="NotificationScreen"
      component={NotificationScreen}
    />
  </NotificationStack.Navigator>
);

const HomeStack = createStackNavigator();
export const HomeStackScreens = () => (
  <HomeStack.Navigator screenOptions={{headerShown: false}}>
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    <HomeStack.Screen
      name="BannerDetailScreen"
      component={BannerDetailScreen}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }}
    />
  </HomeStack.Navigator>
);

//Bottom Tab
const HomeTab = createBottomTabNavigator();
export const HomeTabScreens = () => (
  <HomeTab.Navigator
    screenOptions={{headerShown: false}}
    tabBarOptions={{
      allowFontScaling: false,
      activeTintColor: Colors.primary,
      labelStyle: {fontFamily: 'Roboto-Medium'},
    }}>
    <HomeTab.Screen
      name="HomeTab"
      component={HomeStackScreens}
      options={{
        tabBarLabel: 'Trang chủ',
        tabBarIcon: ({color, size}) => (
          <Icon name="home" color={color} size={22} />
        ),
      }}
    />
    <HomeTab.Screen
      name="StoreTab"
      component={StoreChainStackScreens}
      options={{
        tabBarLabel: 'Cửa hàng',
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="store" color={color} size={25} />
        ),
      }}
    />
    <HomeTab.Screen
      name="OrderTab"
      component={OrderStackScreens}
      options={{
        tabBarLabel: 'Đặt hàng',
        tabBarIcon: ({color, size}) => (
          <Image
            source={require('../assets/images/button-tab.png')}
            style={{
              resizeMode: 'contain',
              width: 65,
              height: 65,
              position: 'absolute',
              bottom: 0,
            }}
          />
        ),
      }}
    />
    <HomeTab.Screen
      name="NotificationTab"
      component={NotificationStackScreens}
      options={{
        tabBarLabel: 'Thông báo',
        tabBarIcon: ({color, size}) => (
          <FontAwesome name="bell-o" color={color} size={22} />
        ),
      }}
    />
    <HomeTab.Screen
      name="SettingTab"
      component={SettingStackScreens}
      options={{
        tabBarLabel: 'Khác',
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="dots-horizontal" size={24} color={color} />
        ),
      }}
    />
  </HomeTab.Navigator>
);
