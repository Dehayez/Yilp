import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const ProfileButton = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.profileButton} onPress={onPress} activeOpacity="0.9">
            <Image style={styles.tinyLogo} source={require('../../assets/icon.png')}/>
        </TouchableOpacity>
    )
}

export default ProfileButton


  const styles = StyleSheet.create({
    profileButton: {
     position: "absolute",
     bottom: 0,
     left: 0,
     margin: 8,
     marginBottom: 40,
     backgroundColor: "white",
     padding: 8,
     borderRadius: 100,
     borderColor: "black",
     borderWidth: 2
    },
    tinyLogo: {
      width: 50,
      height: 50,
      borderRadius: 100,
    }
   });