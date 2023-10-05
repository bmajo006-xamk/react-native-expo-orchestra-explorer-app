import { createDrawerNavigator } from '@react-navigation/drawer'
import 'react-native-gesture-handler';
import VisaEtusivu from '../soitinvisa/VisaEtusivu';
import BottomTabNavigator from './BottomTabNavigator';
import { useWindowDimensions } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    const dimensions = useWindowDimensions();

    return (

       <Drawer.Navigator
            screenOptions={({ route }) => ({
                headerStyle: {
                    backgroundColor: '#A68E63',
                    height: 120
                },
                headerTextShown: false,
                drawerActiveTintColor: '#000',
                drawerInactiveTintColor: '#A68E63',
                drawerActiveBackgroundColor: '#A68E63',
                drawerLabelStyle:{left: -20, fontSize: 16},
                drawerStyle: {backgroundColor: '#151515', width: 260},
                draweType: dimensions.width >= 768 ? 'permanent' : 'front'
            })}
        >
            <Drawer.Screen 
                name="EtusivuDrawer" 
                component={BottomTabNavigator}
                options={{
                    title: "Orkesterisoittimet",
                    drawerIcon: ({color, size, focused}) => (
                        focused ? <Icon name="home" color='#000'size={24} /> :  <Icon name="home" color='#A68E63'size={24} />
                    ),
                }}  
            />
            <Drawer.Screen 
                name="SoitintunnistusDrawer" 
                component={VisaEtusivu}
                options={{
                    title: "Soitintunnistuspeli",
                    drawerIcon: ({}) => (
                        <Icon name="violin" color='#A68E63' size={24} focused='#000' />
                    )
                }} />
        </Drawer.Navigator>
    )
}
export default DrawerNavigator;