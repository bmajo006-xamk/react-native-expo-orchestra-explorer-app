import {ScrollView} from 'react-native';
import {Card} from 'react-native-paper';

const Vaskipuhaltimet = () => {

    return (

    <ScrollView>

        <Card>
            <Card.Title title="Trumpetti" />
            <Card.Cover source={require('../imgs/trumpetti.jpg')} style={{width: '100%'}} />
        </Card>

        <Card>
            <Card.Title title="Pasuuna" />
            <Card.Cover source={require('../imgs/pasuuna.jpg')}/>
        </Card>

        <Card>
            <Card.Title title="Käyrätorvi" />
            <Card.Cover source={require('../imgs/kayratorvi.jpg')} style={{height: 400}} />
        </Card>

        <Card>
            <Card.Title title="Tuuba" />
            <Card.Cover source={require('../imgs/tuuba.jpg')} style={{ height: 700}} />
        </Card>

    </ScrollView>
    )
}
export default Vaskipuhaltimet;