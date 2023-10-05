import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Etusivu from '../Etusivu';
import VisaEtusivu from "../soitinvisa/VisaEtusivu";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';

//import CustomTabBarButton from "../CustomTabBarButton";

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
    return (
        <Tab.Navigator 
            screenOptions={({ route }) => ({               
                headerShown: false,
                tabBarLabel: '',
                //tabBarShowLabel: false,
                showLabelText: false,
                tabBarActiveTintColor: '#A68E63',
                //tabBarInactiveTintColor: '#000',
                tabBarStyle: styles.tabBarStyle,
                tabBarIcon: ({color, size, focused}) => {
                   let iconName : any;
                   if (route.name === 'Orkesterisoittimet'){
                    iconName = focused ? 'home' : 'home';
                   } else if (route.name === 'Soitintunnistuspeli'){
                    iconName =  focused ? 'violin' : 'violin';
                   }
                   
                return <Icon name={iconName} size={35} color={color} style={styles.icon} />
                }

            })}>
            <Tab.Screen 
                name= "Orkesterisoittimet" 
                component={Etusivu} 
               
            />
            <Tab.Screen 
                name= "Soitintunnistuspeli" 
                component={VisaEtusivu}
             />
        </Tab.Navigator>
    )
}
export default BottomTabNavigator;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#151515', 
        height: 65,
        width: '100%',
        position: 'absolute',
        borderTopWidth: 0,

    },
    icon: {
        bottom: -5

    }
})