import React from 'react';
import { TextInput, StyleSheet, View, Text, useWindowDimensions, Image, ScrollView } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Ionicons } from 'react-native-vector-icons';

import Carousel from 'react-native-reanimated-carousel';


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
    searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    padding: 10,
    gap: 10,

    flex: 1,
  },
  borderShadow: {
    borderRadius: 50,
    shadowColor: 'gray',
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 5,
    shadowRadius: 2,
    elevation: 5,
    borderTopwidth: 0,
    borderLeftwidth: 0.2,
    backgroundColor: '#F5F5F5',
  },
  imageCarousel: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  iconButton: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    width: 100,
    height: 50,
  },
});

export default function HomeScreen({ navigation }) {
    const {width} = useWindowDimensions();
    const dataCarousel = [
      {
        id: 1,
        imageUrl : 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 2,
        imageUrl : 'https://plus.unsplash.com/premium_photo-1678559033839-aaf50cb4c843?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8fHww'
      },
      {
        id: 3,
        imageUrl : 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D'
      },
    ]
  return (
    <View style={styles.mainContainer}>
        {/* SearchBar Component */}
        <View style={styles.searchBarContainer}>
          <View style={[styles.searchBar, styles.borderShadow]}>
              <Ionicons name="search" size={12} />
              <TextInput placeholder="Mau cari barang apa" />
          </View>
          <IconButton icon="menu" />
      </View>
      
      {/* Carousel Component */}
      <View style={{alignItems: 'center' }}>
              <Carousel
                  loop
                  width={width - 30}
                  height={200}
                  autoPlay
                  data={dataCarousel}
                  scrollAnimationDuration={1000}
                  onSnapToItem={(index) => console.log('current index:', index)}
                  renderItem={({ item }) => (
                     <Image 
                        style={styles.imageCarousel}
                     source={{ 
                        uri : item.imageUrl,
                      }}
                      />
                  )} 
                />
          </View>

          {/* Category Component */}
          <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Array.from(Array(8)).map(() => (
                <IconButton 
                icon={({color, size}) => (
                <View style={{ 
                    alignItems: 'center',
                    justifyContent: 'center',
                 }}
                >
                    <Ionicons name="home-outline" size={size} color={color} />
                    <Text 
                      style={{ 
                        fontSize: 12,
                     }}>Home
                     </Text>
                </View>
                )} 
                style={styles.iconButton}/>
            ))}
          </ScrollView>
          </View>
        </View>
    );
}
