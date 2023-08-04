import React from "react";
import {View, Image, StyleSheet, Text, ScrollView, SafeAreaView, TouchableOpacity, ImageBackground} from 'react-native';
import image from "../Componant/image";
import  {styles} from "../Componant/style"
import { useNavigation } from '@react-navigation/native';

export default function LandingScreen() {
    const fieldLogin = () => {
        navigation.navigate("FieldLoginScreen");
      };
      const caneLogin = () => {
        navigation.navigate("CaneLoginScreen");
      };
      const samplingLogin = () => {
        navigation.navigate("SamplingLoginScreen");
      };
    const navigation = useNavigation();
    return (
      <>
      <ImageBackground source={image.Landing} style={{flex: 1}}>      
        <SafeAreaView  >
         <ScrollView>
        <View>
        <TouchableOpacity  onPress={fieldLogin}>
          <Image
            style={styles.tinyLogo}
            source={image.FieldApp}
          />
         <Text style={styles.logoText}> Field App </Text>
         </TouchableOpacity>
         <TouchableOpacity  onPress={caneLogin}>
           <Image
            style={styles.tinyLogo1}
            source={image.CaneApp}
          />
             <Text  style={styles.logoText}> Cane Registration App  </Text>
             </TouchableOpacity>
             <TouchableOpacity    onPress={samplingLogin}>
             <Image
            style={styles.tinyLogo1}
            source={image.SamplingApp}
          />
             <Text  style={styles.logoText}> Sampling App </Text>
             </TouchableOpacity>
        </View>        
        </ScrollView>
    
        </SafeAreaView>
        </ImageBackground>
        </>
      );
    };
  