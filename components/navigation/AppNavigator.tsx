import Viulu from '../jouset/Viulu';
import Alttoviulu from '../jouset/Alttoviulu';
import Sello from '../jouset/Sello';
import Kontrabasso from '../jouset/Kontrabasso';
import Fagotti from '../puupuhaltimet/Fagotti';
import Klarinetti from '../puupuhaltimet/Klarinetti';
import Oboe from '../puupuhaltimet/Oboe';
import Poikkihuilu from '../puupuhaltimet/Poikkihuilu';
import Kayratorvi from '../vaskipuhaltimet/Kayratorvi';
import Pasuuna from '../vaskipuhaltimet/Pasuuna';
import Trumpetti from '../vaskipuhaltimet/Trumpetti';
import Tuuba from '../vaskipuhaltimet/Tuuba';
import {enableScreens} from 'react-native-screens';
import Ekakysymys from '../soitinvisa/EkaKysymys';
import Tokakysymys from '../soitinvisa/TokaKysymys';
import KolmasKysymys from '../soitinvisa/KolmasKysymys';
import VikaSivu from '../soitinvisa/VikaSivu';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
// index.js-tiedostoon exportit --> lyhyemmät rivit koodeja importtauksiin
// export {default as Trumpetti} from '../vaskipuhaltimet/Trumpetti'

enableScreens();

const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    return (
        <Stack.Navigator 
            screenOptions={{ headerShown: false }} 
            initialRouteName="Etusivu">
            <Stack.Screen
                name="Home"
                component={DrawerNavigator}
            />
            <Stack.Screen
                name="Ekakysymys"
                component={Ekakysymys}
            />
            <Stack.Screen
                name="Tokakysymys"
                component={Tokakysymys}
            />
            <Stack.Screen
                name="VikaSivu"
                component={VikaSivu}
            />
            <Stack.Screen
                options = {{ headerLargeTitle : true}}
                name="Viulu"
                component={Viulu}
            />
            <Stack.Screen
                options = {{ headerLargeTitle : true}}
                name="Alttoviulu"
                component={Alttoviulu}
            />
            <Stack.Screen
                options= {{headerLargeTitle : true}}
                name= "Sello"
                component= {Sello}
            />
            <Stack.Screen
                options= {{headerLargeTitle : true}}
                name= "Kontrabasso"
                component= {Kontrabasso}
            />
            <Stack.Screen 
                options= {{headerLargeTitle : true}}
                name= "Fagotti"
                component= {Fagotti}
            />
            <Stack.Screen
                name="Klarinetti"
                component={Klarinetti}
            />
           <Stack.Screen
                name="Oboe"
                component={Oboe}
            />
            <Stack.Screen
                name="Poikkihuilu"
                component={Poikkihuilu}
            />
           <Stack.Screen
                name="Käyrätorvi"
                component={Kayratorvi}
            />
            <Stack.Screen
                name="Pasuuna"
                component={Pasuuna}
            />
            <Stack.Screen
                name="Trumpetti"
                component={Trumpetti}
            />
            <Stack.Screen
                name="Tuuba"
                component={Tuuba}
            />
      </Stack.Navigator>

    )
}
export default AppNavigator;