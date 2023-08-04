import React, { useRef, useState } from "react";
import {View, Image, Text, ScrollView, SafeAreaView, TextInput, Pressable, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import image from  "../Componant/image"
import  {styles} from "../Componant/style"

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign, Entypo, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { Box, Button, NativeBaseProvider ,Popover} from "native-base";     
                                                      
export default function ProfileScreen() {


  const navigation = useNavigation();
  return (
       <>
        <NativeBaseProvider>
      <Appbar.Header style={styles.header} elevated="true">
      <Appbar.Content title="Farmer App" />
      <Pressable  onPress={() => navigation.navigate("Landing")}>
      <Ionicons name="notifications" size={24} style={styles.headerRightIcon} ></Ionicons>
    {/* <MaterialIcons name="logout" size={24} style={style.headerRightIcon} color="black" /> */}
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
          
        <View style={style.container}>
      <View style={style.header}></View>
      <Image
        style={style.avatar}
        source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
      />
      <View style={style.body}>
        <View style={style.bodyContent}>
        {/* <View style={{ flexDirection: 'row', flex: 1 ,justifyContent:"center",alignItems:"center"}}> */}
        <Text style={style.name}>Farmer Name  </Text>
   {/* <FontAwesome name="edit" style={styles.headerprofileIcon}></FontAwesome> */}
            {/* </View> */}
        
          <View style={{ flexDirection: 'row', flex: 1}}>
  <View>
  <Text style={style.description}>Village Name : </Text>
  </View>
  <View>
  <Text style={style.description1}>Rangoli</Text>
  </View>
</View>
<View style={{ flexDirection: 'row', flex: 1}}>
  <View>
  <Text style={style.description}>Mobile No : </Text>
  </View>
  <View>
  <Text style={style.description1}>8475858585</Text>
  </View>
</View>
<View style={{ flexDirection: 'row', flex: 1}}>
  <View>
  <Text style={style.description}>Adhar No : </Text>
  </View>
  <View>
  <Text style={style.description1}>123456456456565</Text>
  </View>
</View>
<View style={{flexDirection: 'row', flex: 1}}>
  <View>
  <Text style={style.description}>Bank  Name : </Text>
  </View>
  <View>
  <Text style={style.description1}>SBI</Text>
  </View>
</View>
<View style={{ flexDirection: 'row', flex: 1}}>
  <View>
  <Text style={style.description}>Shareholder no : </Text>
  </View>
  <View>
  <Text style={style.description1}>123455</Text>
  </View>
</View>       
<View style={{  flexDirection: 'row', flex: 1}}>
  <View>
  <Text style={style.description}>Date : </Text>
  </View>
  <View>
  <Text style={style.description1}>18-Feb-2023</Text>
  </View>
</View>    
<View style={{flexDirection: 'row', flex: 1}}>
  <View>
  <Text style={style.description}>Share member type : </Text>
  </View>
  <View>
  <Text style={style.description1}>None</Text>
  </View>
</View>    
<View style={{  flexDirection: 'row', flex: 1}}>
  <View>
  <Text style={style.description}>Total Share : </Text>
  </View>
  <View>
  <Text style={style.description1}>None</Text>
  </View>
</View>  
         
          <TouchableOpacity  style={styles.btn} >
            <Text>Edit</Text>
          </TouchableOpacity>
 
        </View>
      </View>
    </View>
        </ScrollView>
    </SafeAreaView>
        </View>

      </View>
      </NativeBaseProvider>
    </>
  );
};
const style = StyleSheet.create({
    header: {
      backgroundColor: '#D9FDAC',
      height: 100,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: 'white',
      marginBottom: 10,
      alignSelf: 'center',
      position: 'absolute',
      marginTop: 10,
    },

    body: {
      marginTop: 40,
    },
    bodyContent: {
      flex: 1,
    //   alignItems: 'center',
      padding: 30,
    },
    name: {
      fontSize: 28,
      color: '#696969',
      fontWeight: '600',
      alignSelf:"center",
      justifyContent:"center",
      marginTop:-20,      
    },
    info: {
      fontSize: 16,
      color: '#00BFFF',
      marginTop: 10,
    },
    
    description1: {
        fontSize: 16,
        color: '#A0A0A0',
        marginTop: 20,
       alignSelf:"flex-start",
       textAlign:"left"
      },
    description: {
      fontSize: 16,
      color: '#696969',
      marginTop: 20,
     alignSelf:"flex-start",
     textAlign:"left"
    },
    buttonContainer: {
      marginTop: 10,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      width: 250,
      borderRadius: 30,
      backgroundColor: '#D9FDAC',
      
    },
  })
  



