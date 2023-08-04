import React, { useRef, useState } from "react";
import {View, Image, StyleSheet, Text, ScrollView, SafeAreaView, TextInput, Pressable, ImageBackground, TouchableOpacity} from 'react-native';
import image from  "../Componant/image"
import  {styles} from "../Componant/style"

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign, Entypo, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Box, Button, NativeBaseProvider ,Popover} from "native-base";     
                                                      


export default function DashboardScreen() {


  const navigation = useNavigation();
  return (
       <>
        <NativeBaseProvider>
      <Appbar.Header style={styles.header} elevated="true">
      <Appbar.Content title="Farmer App" />
      <Pressable  onPress={() => navigation.navigate("Landing")}>
      <Ionicons name="notifications" size={24} style={styles.headerRightIcon} ></Ionicons>
    {/* <MaterialIcons name="logout" size={24} style={styles.headerRightIcon} color="black" /> */}
    </Pressable>
    
      <Popover trigger={triggerProps => {
      return <Pressable {...triggerProps}>
                <FontAwesome name="user-circle-o" size={24} style={styles.headerRightIcon} />
            </Pressable>;
    }}>
        <Popover.Content accessibilityLabel="Delete Customerd" w="56">
          <Popover.Arrow />
          <Popover.CloseButton />
          <Popover.Header>Farmer Name</Popover.Header>
          <Popover.Body>

          <Pressable onPress={() => navigation.navigate("Profile")} style={{marginBottom:20}} >
       <Text >Profile</Text> 
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Login")} >
       <Text>Sign Out</Text> 
            </Pressable>
           
          </Popover.Body>
           {/* <Popover.Footer justifyContent="flex-end">
            <Button.Group space={2}>
              <Button colorScheme="coolGray" variant="ghost">
                Cancel
              </Button>
              <Button colorScheme="danger">Delete</Button>
            </Button.Group>
          </Popover.Footer> */}
        </Popover.Content>
      </Popover>

    </Appbar.Header>

      <View style={{ flex: 1 }}>

        <View style={{ flex: 2 }}>
         
   
          <SafeAreaView style={styles.container}>
        <ScrollView>
          
        <Pressable onPress={() => navigation.navigate("CaneBill")}>
        <View style={styles.listView}>
        <View style={styles.sublistView}>
        <Text style={styles.dashText}>Cane Bill registration</Text>
            </View>
            <View style={styles.caneLogo}>
            <Image style={styles.image1}
            source={image.Farmer}
          />
          </View>
            </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("CurruntCrop")}>
        <View style={styles.listView}>
        <View style={styles.sublistView}>
        <Text style={styles.dashText}> Current Crops or new registration </Text>
            </View>
            <View style={styles.caneLogo}>
            <Image
            source={image.Diversion}
          />
          </View>
            </View>
            </Pressable>
            <Pressable  onPress={() => navigation.navigate("CaneWight")}>
            <View style={styles.listView}>
        <View style={styles.sublistView}>
        <Text style={styles.dashText}> Cane weight information </Text>
            </View>
            <View style={styles.caneLogo}>
            <Image
            source={image.Update}
          />
          </View>
            </View>
            </Pressable>
        </ScrollView>
    </SafeAreaView>
        </View>

      </View>
      </NativeBaseProvider>

    </>
  );
};



