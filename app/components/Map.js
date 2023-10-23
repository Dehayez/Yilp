import React from 'react';
import { useState } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export const Map = () => {
const [location, setLocation] = useState({
    latitude: 51.025478,
    longitude: 4.101952,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,})

  return (
    <View style={styles.container}>
      <MapView region={location} style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map