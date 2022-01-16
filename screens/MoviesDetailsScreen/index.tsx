import React , {useState} from "react";
import { Image, Pressable, FlatList } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { View, Text } from "../../components/Themed";
import styles from "./styles";
import { Entypo, Feather, AntDesign, MaterialIcons } from "@expo/vector-icons";
import movie from "../../assets/data/movie";
import EpisodeItem from "../../components/EpisodeItem";
import VideoPlayer from "../../components/VideoPlayer";

const firstEpisode = movie.seasons.items[0].episodes.items[0];
const firstSeason = movie.seasons.items[0];


const MoviesDetailScreen = () => {

  const [currentSeason,setCurrentSeason]=useState(firstSeason)
  const [currentEpisode,setCurrentEpisode]=useState(firstSeason.episodes.items[0])

  const seasonNames=movie.seasons.items.map(season=>season.name)

  return (
    <View>

     <VideoPlayer episode={currentEpisode} />
    
      <FlatList
        data={currentSeason.episodes.items}
        renderItem={({ item }) => (
         <EpisodeItem
            episode={item}
            onPress={(episode)=>{
              setCurrentEpisode(episode)
              }
         } 
         />)}
        style={{ marginBottom: 250 }}
        ListHeaderComponent={
          <View style={{ padding: 15 }}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.year}>{movie.year} </Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>12+</Text>
              </View>
              <Text style={styles.numOfSeasons}>
                {movie.numberOfSeasons} Seasons
              </Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>

            <Pressable
              onPress={() => {
                console.log("Plaga");
              }}
              style={styles.playButton}
            >
              <Text style={styles.playText}>
                <Entypo name="controller-play" size={16} color="black" />
                Play
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                console.log("Downloud");
              }}
              style={styles.DownloudButton}
            >
              <Text style={styles.DownloudText}>
                <AntDesign name="download" size={16} color="white" />
                {"  "}
                Downloud
              </Text>
            </Pressable>

            <Text style={{ margin: 10 }}>{movie.plot}</Text>

            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <AntDesign name="plus" size={30} color={"white"} />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>My List</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Feather name="thumbs-up" size={30} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Rate</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Entypo name="share" size={30} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Share</Text>
              </View>
            </View>

            <Picker
              selectedValue={currentSeason.name}
              onValueChange={(itemValue, itemIndex) =>{
                setCurrentSeason(movie.seasons.items[itemIndex])
              }}
              style={{color:'white', width:130}}
              dropdownIconColor={'white'}
              >
                {seasonNames.map(seasonName=>(
                  <Picker.Item label={seasonName} value={seasonName}  key={seasonName}/>
                ))}

            </Picker>
          </View>
        }
      />
    </View>
  );
};

export default MoviesDetailScreen;
