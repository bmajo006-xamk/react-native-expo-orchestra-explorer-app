import {useRef} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    Animated,
    useWindowDimensions,
    Image
} from 'react-native';

const images = [
    {id: 1, img: require('../imgs/viulu.png'), title: "viulu"},
    {id: 2, img: require('../imgs/alttoviulu.jpg'), title: "alttoviulu"},
    {id: 3, img: require('../imgs/sello.jpg'), title: "sello"},
    {id: 4, img: require('../imgs/kontrabassso.jpg'), title: "kontrabasso"},   
]

const JousetSlider = () => {

    const scroll = useRef(new Animated.Value(0)).current;

    let { width: windowWidth, height:windowHeight } = useWindowDimensions();
    

    windowHeight=windowHeight-300;
    
    return (
    
        <SafeAreaView style={styles.container}>

        
        <View style={[styles.scrollContainer, {height:windowHeight} ]}>
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
            [],
            {useNativeDriver: false}
            )}
        scrollEventThrottle={16}
      >
        {images.map((image, imageIndex) => {
          return (
            <Animated.View
              style={{ width: windowWidth,}}
              key={imageIndex}
            >
              <Image  source={image.img} style={styles.card} />
                
            </Animated.View>
          );
        })}
      </ScrollView>

    </View>
    <View style={styles.indicatorContainer}>

        {
            images.map((image, imageIndex)=>{
                

                return(
                    <Animated.View style={[styles.normalDots]}/>

                   
                );
            })
        }

    </View>




  </SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center"
},
scrollContainer: {
    shadowColor:"#6A6C6E",
    shadowOffset:{
        width:10,
        height:-10,
    },
    shadowOpacity:1,
},
card: {
  flex: 1,
  marginVertical: 10,
  width:350,
  overflow: "hidden",
  alignSelf:"center",
  
},
indicatorContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
},
normalDots:{
    width:8,
    height:8,
    borderRadius:4,
  
    marginHorizontal:4,
},
textAreaContainer:{
    width:"100%",
    marginBottom:10,
},
textView:{
    position:"absolute",
    fontSize:22,
    fontFamily:"Avenir",
    fontWeight:"600",
    textAlign:"center",
    width:"100%"
}


});

    
export default JousetSlider;