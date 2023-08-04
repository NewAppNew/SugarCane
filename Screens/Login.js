import React from "react";
import {View, Image, StyleSheet, Text, ScrollView, SafeAreaView, Pressable, ImageBackground} from 'react-native';
import image from "../Componant/image";
import  {styles} from "../Componant/style";
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import { Box ,NativeBaseProvider } from "native-base";


export default function CaneLoginScreen() {
  const navigation = useNavigation();
  const caneDashboard = () => {
      navigation.navigate("Dashboard");
    };
    const samplingDashboard = () => {
      navigation.navigate("SamplingDashboardScreen");
    };
    const FieldDashboard = () => {
      navigation.navigate("FielldAppDashboardScreen");
    };
    return (
      <NativeBaseProvider>
        <SafeAreaView style={styles.container}>
        <ImageBackground source={image.caneLogin}  resizeMode="cover" style={styles.imageBackground}>        
        <ScrollView >
        <View> 
         <Text style={styles.login}> Farmer App  </Text>
         <Text style={styles.loginheader}> Login </Text>
         <Box w="3/4" style={styles.box}>
         <TextInput
      mode="outlined"
      outlineStyle={{borderColor:"#E0E0E0"}}
      style={styles.input}
      label="User Name"
      placeholder="Type User Name"
    />
         
          <TextInput
      mode="outlined"
      style={styles.input}
      outlineStyle={{borderColor:"#E0E0E0"}}
      secureTextEntry={true}
      label="Password"
      placeholder="Type Password"
    />
       <Pressable style={styles.btn}  onPress={caneDashboard}>
       <Text style={styles.btnText}> Login </Text>
       
      </Pressable>
      </Box>
        </View>

        </ScrollView>
        </ImageBackground>
        </SafeAreaView>
</NativeBaseProvider>
      );
    };
  