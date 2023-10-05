import { SafeAreaView } from 'react-native-safe-area-context';
import {
    View

} from 'react-native';
import {
    Card,
    //button,
    //radioButtonGroup,
} from 'react-native-paper';
import { styles } from '../../styles/stylesVisa';


const KolmasKysymys : React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.row}>
            <Card style={styles.card}>
                <Card.Cover />


            </Card>
            </View>
        </SafeAreaView>
    )
}
export default KolmasKysymys;

