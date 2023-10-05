import { NavigationContainer } from '@react-navigation/native';
import { SoitinProvider } from './context/SoitinContext';
import AppNavigator  from './components/navigation/AppNavigator';
import DrawerNavigator from './components/navigation/DrawerNavigator';
import 'expo-dev-client';


export default function App() {
  return (
  <SoitinProvider>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </SoitinProvider>
  );
}