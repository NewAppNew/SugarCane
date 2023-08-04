import React from "react";
import {View, Image, StyleSheet, Text, ScrollView, SafeAreaView, Pressable, ImageBackground} from 'react-native';
import image from "../Componant/image";
import  {styles} from "../Componant/style";
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import { Box, Button, NativeBaseProvider ,Popover,Select,CheckIcon} from "native-base";     
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { AntDesign, Entypo, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function CaneWightScreen() {
  const [service, setService] = React.useState("");
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
      <>
        <NativeBaseProvider>
      <Appbar.Header style={styles.header} elevated="true">
          <Appbar.BackAction onPress={() => navigation.navigate("Dashboard")} />
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
          <Text style={styles.formHeader}> Cane weight </Text>

        <ScrollView>
        <Box w="3/4" style={styles.box}>
        <Select 
       minWidth="200" 
       borderColor="gray.500"
       fontSize="15"
        accessibilityLabel="Choose Service" placeholder="Select Year" 
        _selectedItem={{
          
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="2022-2023" value="ux" />
          <Select.Item label="2023-2024" value="web" />
          <Select.Item label="2022-2023" value="ux" />
          <Select.Item label="2023-2024" value="web" />
        </Select>
        <TextInput
      mode="outlined"
      style={styles.input}
      label="Record Number"
      placeholder="Type something"
    />
          <Pressable style={styles.searchbtn}>
        <Text>SAVE</Text>
      </Pressable>
    </Box>
        </ScrollView>
    </SafeAreaView>
        </View>

      </View>
      </NativeBaseProvider>

    </>
      );
    };
  