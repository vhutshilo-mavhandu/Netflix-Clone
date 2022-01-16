
import React from 'react'
import { Image,Pressable } from 'react-native';
import {AntDesign } from "@expo/vector-icons";
import { View, Text } from '../../components/Themed'
import styles from './styles'
import { Episode } from '../../types';

interface EpisodeItemProps{
episode:Episode;
onPress:(episode:Episode)=>{}
}

const EpisodeItem = (props:EpisodeItemProps) => {
    const {episode,onPress} = props;
    return (
        <Pressable style={{marginVertical:10}} 
             onPress={()=>{
                 onPress(episode)
             }}
         >
            <View style={styles.row} >
               <Image style={styles.image} source={{uri:episode.poster}}/>
               <View style={styles.titleContainer}>
                   <Text style={styles.title}>{episode.title}</Text>
                   <Text style={styles.duration}>{episode.duration}</Text>
               </View>
               <AntDesign name="download" size={16} color="white" />
            </View>
            <Text style={styles.plot}>{episode.plot}</Text>
        </Pressable>
    )
}

export default EpisodeItem
