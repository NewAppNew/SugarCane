import { Dimensions, StyleSheet } from 'react-native';

  
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  imageBackground: {
    height: screenHeight,
    width: screenWidth,
  },
  logout1:{
    width:30,
    height:30,
    marginRight:5
    },
    container: {
      flex: 1,
      height: screenHeight,
      width: screenWidth,
      backgroundColor:"#F9FFF1",
      justifyContent: 'space-around',
    
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom:10
    },
    paragraph: {
     paddingLeft:10
    },
    checkbox: {
       fontSize:16,
       marginTop:30
    },
    image: {
      flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    image1: {
     width:50,
     height:50
    },
    loginForm: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
  },
  caneLogo: {
    justifyContent:"center",
    alignSelf:"center", 
      width: 50, 
      height: 50,
      marginLeft:"auto",
      marginRight:"auto"
},
    tinyLogo: {
        justifyContent:"center",
        alignSelf:"center", 
          width: 150, 
          height: 150,
          marginTop:100
    },
    tinyLogo1: {
      justifyContent:"center",
      alignSelf:"center", 
        width: 150, 
        height: 150,
        marginTop:40
  },
    input: {
        marginTop:20,
        backgroundColor:"#ffffff",

      },
      
      input1: {
        marginTop:30,
        backgroundColor:"#ffffff",
        flex: 1
      },
      inputDate: {
        borderColor:"gray",
        borderWidth:1,
        borderBottomWidth:0,
        backgroundColor:"#ffffff"
      },
      box:{
        width:"90%",
        marginRight:"auto",
        marginLeft:"auto"
      },
    logoText:{
        fontSize:20,
        fontWeight:"500",
        alignSelf:'center',
        color:'#4F4D4D',
        justifyContent:'center',
     },
     search:{
      width:"93%",
      marginLeft:"auto",
      marginRight:"auto",
      backgroundColor:"#ffffff",
      marginTop:10
     },
     imageicon:{
       alignSelf:"flex-end",
       marginRight:10,
       marginTop:3
     },
     login:{
      marginTop:170,
        fontSize:20,
        paddingLeft:20
     }, 
     loginheader:{
        fontSize:40,
       color:"#4F4D4D",
       fontWeight:"500",
       paddingLeft:20,
       marginBottom:50
     },
    logo: {
      width: 66,
      height: 58,
    },
    DateText:{
      paddingLeft:10,
      marginTop:30,
      paddingBottom:10,
      fontSize:15
      },
    loginText:{
    paddingLeft:10,
  
    },
    loginText1:{
      paddingLeft:10,
      paddingTop:10
      },
      btnActivefooter:{
        flexDirection: 'row', 
        borderRadius: 15,
        borderWidth: 1,
        borderColor:"#DAFFAB",
        backgroundColor:"#DAFFAB",
        color:"white",
        height: 40,
        padding:6,
        width: '40%',
        // marginTop:10,
        marginLeft:"auto",
        marginRight:"auto",
        justifyContent:"center",
        alignSelf:"center",
        alignItems: 'center',
        textAlign:"center"
      },
 
      text: {
        fontSize: 25,
        color: 'red',
        padding: 3,
        marginBottom: 10,
        textAlign: 'center'
      },
      datePicker: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 320,
        height: 260,
        display: 'flex',
      },
    btnfooter:{
      flexDirection: 'row', 
      borderRadius: 15,
      borderWidth: 1,
      justifyContent: 'space-between',
      borderRadius: 5,
      padding: 6,
      height: 40,
      width: '40%',
      justifyContent: 'center',
      alignSelf:'center',
      alignItems: 'center',
      marginLeft:"auto",
      marginRight:"auto",
    },
    btn:{
      marginTop:30,
      borderRadius:  15,
      borderWidth: 1,
      borderColor:"#A6FE36",
      backgroundColor:"#DAFFAB",
      padding: 6,
      height: 50,
      width: '90%',
      justifyContent: 'center',
      alignSelf:'center',
      alignItems: 'center',
    },
    btnText:{
      fontSize: 24,
      color:"#000000"
    },
    listView:{
      borderRadius: 10,
      borderWidth: 1,
      borderColor:"#A6FE36",
      backgroundColor:"#ffffff",
      height:"auto",

      marginTop:15,
      marginBottom:15,
      width:"90%",
      marginLeft:"auto",
      marginRight:"auto",
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      flexDirection: "row",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      
      elevation: 8,
    },

    sublistView:{
      height:"auto",
      width:"75%",  
      paddingTop:30,
      paddingBottom:30, 
      borderTopRightRadius:25,
      borderBottomRightRadius:25,
      backgroundColor:"#E8FFCB",
      paddingLeft:"auto",
      paddingRight:"auto"
    },

    dashText:{
      color:"#4F4D4D",
      fontSize:17,
      padding:20
    },
    updateList:{
      height:"auto",
      width:"90%",   
      backgroundColor:"#E8FFCB",
      paddingLeft:"auto",
      paddingRight:"auto",
      marginLeft:"auto",
      marginRight:"auto",
      marginTop:20,
      paddingBottom:20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      
      elevation: 6,
    },
    updateText:{
      color:"#4F4D4D",
      fontSize:15,
      padding:5
    },
    header:{
      shadowColor: "#000",
      backgroundColor:"#FAFFF3",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
      },
      headerText:{
        color:"4F4D4D",
        fontSize:19,
        paddingLeft:15,
        paddingTop:10
        
      },
      dropdown:{
     width:"95%",
     color:"4F4D4D",
     marginLeft:"auto",
     marginRight:"auto",
     borderColor:"#DADADA",
     borderRadius:5,
     height: 55,
     borderWidth: 1,
     padding: 10,

      },
      headerRightIcon:{
        fontSize:25,
        paddingRight:15,
        paddingTop:5,
      },
      headerprofileIcon:{
        fontSize:25,
        marginTop:-10,        
      },
      headerLeftIcon:{
        color:"4F4D4D",
        fontSize:24,
        paddingLeft:15,
        paddingTop:15
      },
      headerMiddleText:{
        color:"4F4D4D",
        fontSize:19,
        paddingTop:10
        
      },
      footer:{
        flex: .2,
        shadowColor: "#000",
        backgroundColor:"#FAFFF3",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 7,
          left: 0,
           right: 0, 
           bottom: 0,
           shadowColor: '#000',
           shadowOffset: { width: 0, height: 1 },
           shadowOpacity: 0.8,
           shadowRadius: 2,  
           elevation: 5,
           marginBottom:1,
          //  justifyContent: 'space-between',
           flexDirection: 'row', 
        },
      formHeader:{
        color:"#444",
        backgroundColor:"#DAFFAB",
        fontSize:20,
        fontWeight:"400",
        paddingTop:10,
        paddingBottom:10,
        marginBottom:10,
        textAlign:"center"
      
      },
      searchbtn:{
        justifyContent: 'space-between',
        borderRadius: 5,
        backgroundColor:"#DAFFAB",
        padding: 6,
        height: 40,
        width: '100%',
        justifyContent: 'center',
        alignSelf:'center',
        alignItems: 'center',
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:30
      },
      savebtn:{
        justifyContent: 'space-between',
        borderRadius: 5,
        backgroundColor:"#DAFFAB",
        padding: 6,
        height: 40,
        width: '40%',
        justifyContent: 'center',
        alignSelf:'center',
        alignItems: 'center',
        marginLeft:"auto",
        marginRight:"auto",
      },
      
      updatebtn:{
        justifyContent: 'space-between',
        borderRadius: 5,
        backgroundColor:"#DAFFAB",
        padding: 16,
        justifyContent: 'center',
        alignSelf:'center',
        alignItems: 'center',
        marginLeft:"auto",
        marginRight:"auto"
      },
      canclebtn:{
        justifyContent: 'space-between',
        borderRadius: 5,
        backgroundColor:"#FFCEBE",
        padding: 6,
        height: 40,
        width: '40%',
        justifyContent: 'center',
        alignSelf:'center',
        alignItems: 'center',
        marginLeft:"auto",
        marginRight:"auto"
      }
  });
  const imageUploaderStyles=StyleSheet.create({
    container:{
      borderColor: "gray",
      borderWidth: 1,
        height:200,
        width:330,
        backgroundColor:'White',
        position:'relative',
        overflow:'hidden',
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:20,
        marginBottom:20
    },
    uploadBtnContainer:{
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'lightgrey',
        width:'100%',
        height:'25%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    },
  
    containerText:{
      color: "#737373",
      marginLeft:11,
      marginTop:11,
      marginBottom:-13,
      fontWeight:"400",
      fontSize:16
  
    },
    MenuText:{
      paddingBottom :17,  
      color:"red"
    },
 radiobutton:{
  flexDirection:"row"
 },
 radio:{
  flex:1,
 },
//  Profile Style

  })
  export { styles ,
    imageUploaderStyles
  }