import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const AppBar = ({navigation} : any) => {
    return (
        <Appbar.Header style={styles.appbar}>
          <Appbar.Content title=''/>
          <Appbar.Action  icon="menu" onPress={() => {navigation.navigate("")}} />
        </Appbar.Header>
    )
}


export default AppBar;

const styles = StyleSheet.create({
    appbar: {
      backgroundColor: '#A68E63',
      alignItems: 'center',
      opacity: 0.8,
      width: '100%',
      height: 70,
      top:5
    }
});