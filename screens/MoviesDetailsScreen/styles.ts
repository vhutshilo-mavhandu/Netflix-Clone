
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
 
   image:{
       width:'100%',
       aspectRatio:16/9,
       resizeMode:'cover'
   },
   title:{
      fontSize:24,
      fontWeight:'bold',
   },
   match:{
    color:'#00aa00',
    fontWeight:'bold',
    marginRight:5,
   },
   year:{
    color:'#757575'
   },
   ageContainer:{
     backgroundColor:'#e6e229',
     justifyContent:'center',
     alignItems:'center',
     borderRadius:2,
     paddingHorizontal:3,
     marginRight:5,
     
   },
   age:{
    color:'black',
    fontWeight:'bold',
   },
   numOfSeasons:{
       color:'#949492',
       fontWeight:'bold'
   },
   playButton:{
    backgroundColor:'white',
    justifyContent:'center',
     alignItems:'center',
     padding:5,
     borderRadius:3,
     marginVertical:5,
   },
   playText:{
     color:'black',
     fontWeight:'bold',
     fontSize:16,
    
   },
   DownloudButton:{
    backgroundColor:'#2b2b2b',
    justifyContent:'center',
     alignItems:'center',
     padding:5,
     borderRadius:3,
     marginVertical:5,
   },
   DownloudText:{
    color:'white',
    fontWeight:'bold',
    fontSize:16,
   }

});

export default styles;
