import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image, ImageBackground } from 'react-native';

export default function App() {
  const [filmes,setFilmes] =useState(null);
  const [abas,setAbas] = useState(0);
  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=93ea896f95173eb48c8043f4219e7483&language=pt-BR&page=1',{
      method: 'GET',
  })
    .then(response => response.json())
    .then(function(json){
      setFilmes(json);
    });
  },[])

  if(filmes !== null){
      return(
        <View style={{ backgroundColor: 'rgba(0,0,0,0.6)',height:'100%', justifyContent: 'center' }}>
            <StatusBar hidden/>
            {
              filmes.results.map((val)=>{
                if(val.id == abas){
                    return(
                      <View style={{ flex:1, justifyContent: 'center' }}>
                      <TouchableOpacity onPress={()=>setAbas(val.id)}>
                        <ImageBackground source={{uri: `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${val.poster_path}`}} 
                        style={{margin:20,
                        justifyContent:'center',width:400,height:500,alignItems:'center',
                        backgroundColor:'white'}}><Text style={{ color: 'rgba(20,200,200,0.7)',}}>{val.overview}</Text>
</ImageBackground>
                            <Text>{val.original_title}</Text>
                          </TouchableOpacity>
              </View>
                    )
                }else{
                    return(
                      <View>
                          <TouchableOpacity onPress={()=>setAbas(val.id)}>
                            <Text>{val.original_title}</Text>
                          </TouchableOpacity>
                      </View>
                    )
                }
              })
            }
      </View>
      )
  }else{
    return(
    <View style={styles.container}>
    <StatusBar hidden/>
      <Text>Carregando...</Text>
    </View>
    )
   
  }
 
 
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '000',
    
  },
});

 /*return (

        <ScrollView style={{backgroundColor:'rgba(0,0,20,0.9)'}} >
          < StatusBar hidden />
          <View style={{backgroundColor:'rgba(0,0,0,0.6)',justifyContent:'center',height:75,}}>
            <Text style={{textAlign:'center',fontSize:35,color:'white',fontWeight:'bold'}}>Lista de Filmes</Text>
          </View>
         <View>


         </View>
    </ScrollView>*/