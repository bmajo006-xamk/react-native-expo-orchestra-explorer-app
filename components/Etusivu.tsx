import { useContext } from 'react';
import { SoitinContext } from '../context/SoitinContext';
import { 
  StyleSheet, 
  View, 
  ScrollView,
  SafeAreaView,
  useWindowDimensions,
  TouchableOpacity,
  Text
} from 'react-native';
import { 
  Card, 
  Button
} from 'react-native-paper';
import AppBar from './Appbar';



const Etusivu = ({ navigation } : any) => {

  const { puupuhaltimet_images, vaskipuhaltimet_images, jouset_images} = useContext(SoitinContext);

  let {height:windowHeight } = useWindowDimensions();
  windowHeight=windowHeight-300;

    return (
    
      <SafeAreaView style={styles.container}>

        <ScrollView style={styles.scrollview}>
        <View style={styles.view}>
          <Card.Title title="Jousisoittimet" titleStyle={styles.title}/>


              <ScrollView
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
              >
              { jouset_images.map((image : any, idx: number) => {
                return (
                <TouchableOpacity
                  activeOpacity={0.9}
                  key={idx}
                  onPress={ () => navigation.navigate(image.title)}>
                  <Card style={styles.card} mode="contained">
                    <Card.Cover style={styles.img} source={image.img} />
                      <Text
                        style={styles.subtitle}             
                      >{image.title}</Text>
                  </Card>
                </TouchableOpacity>
                )
              }
              )}
              </ScrollView>   


        </View>

        <View style={styles.view}>
          <Card.Title title="Puupuhaltimet" titleStyle={styles.title}/>
            <ScrollView
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
              { puupuhaltimet_images.map((image : any, idx: number) => {
                return (
                <TouchableOpacity
                  key={idx}
                  activeOpacity={0.9}
                  onPress={ () => navigation.navigate(image.title)}>
                  <Card style={styles.card} mode="contained">
                    <Card.Cover style={styles.img} source={image.img} />
                      <Text
                        style={styles.subtitle}             
                      >{image.title}</Text>
                  </Card>
                </TouchableOpacity>
                )
              }
              )}
              </ScrollView> 
        </View>

        <View style={styles.view}>
          <Card.Title title="Vaskipuhaltimet" titleStyle={styles.title}/>
             <ScrollView
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
              >
              { vaskipuhaltimet_images.map((image : any, idx: number) => {
                return (
                <TouchableOpacity
                  key={idx}
                  activeOpacity={0.9}
                  onPress={ () => navigation.navigate(image.title)}>
                  <Card style={styles.card} mode="contained">
                    <Card.Cover style={styles.img} source={image.img} />
                      <Text
                        style={styles.subtitle}             
                      >{image.title}</Text>
                  </Card>
                </TouchableOpacity>
                )
              }
              )}
              </ScrollView>
        </View>

        </ScrollView>
      </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    img: {
      marginTop: 45

    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000'
    },
    scrollview: {
      width: '100%',
      top: 20
    },
    view: {
      backgroundColor: '#000',
      height: 380,
      justifyContent: 'center'
    },
    card: {
      padding: 10,
      marginTop: -30,
      width: 384,
      height: 330,
      alignSelf:"center",
      justifyContent: "center",
      backgroundColor: "#151515"
    },
    title: {
      fontSize: 23,
      marginTop: 30,
      color: "#A68E63"

    },
    subtitle: {
      fontSize: 20,
      color: "#A68E63",
      alignSelf: "center",
      top: 20
    },
    button: {
      marginTop: 15,
      width: 200,
      alignSelf: "center"
    },
    buttonLabel: {
      fontSize: 18
    }
  });
  
export default Etusivu;