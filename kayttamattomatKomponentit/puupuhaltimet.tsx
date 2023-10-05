import {ScrollView} from 'react-native';
import {Card} from 'react-native-paper';
const Puupuhaltimet = () => {

    return (
        
    <ScrollView>

        <Card>
            <Card.Title title="Huilu" />
            <Card.Cover source={require('../imgs/poikkihuilu.jpg')} style={{width: 400, height: 400}} />
        </Card>

        <Card>
            <Card.Title title="Oboe" />
            <Card.Cover source={require('../imgs/oboe.jpg')} style={{width: 400, height: 400}} />
        </Card>

        <Card>
            <Card.Title title="Klarinetti" />
            <Card.Cover source={require('../imgs/klarinetti.jpg')} style={{width: 400, height: 650}} />
        </Card>

        <Card>
            <Card.Title title="Fagotti" />
            <Card.Cover source={require('../imgs/fagotti.jpg')} style={{width: 400, height: 800}} />
        </Card>

    </ScrollView>

    )
}
export default Puupuhaltimet;

