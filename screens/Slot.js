import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Button } from 'react-native';
import AnimButton from 'react-native-micro-animated-button';

  const jsonData = { "slots" : {
      "slot1": "9:00am to 9:30am",
      "slot2": "9:30am to 10:00am",
      "slot3": "10:00am to 10:30am",
      "slot4": "10:30am to 11:00am",
      "slot5": "11:00am to 11:30am",
      "slot6": "11:30am to 12:00pm"
   }
  }
  export default class Slot extends Component {
    constructor(props) {
       super(props);
       this.state ={
         bookingDate: this.props.navigation.state.params.bookingDate
       }
   
     }
    _onPressBack(){
      const {goBack} = this.props.navigation
      goBack()
    }
    _bookSlot(status,key,value){
      const month = this.state.bookingDate.month
      const date = this.state.bookingDate.day
      /*const user = firebase.auth().currentUser
      const uid = user.uid
      let userDataJson = {}
      if(status)
      userDataJson[key] = uid
      else
      userDataJson[key] = null
   
      firebase.database().ref('users').child(uid).child("appointments").child(month).child(date).update(userDataJson)*/
    }
    render() {
      let _this = this
      const slots = jsonData.slots
      const slotsarr = Object.keys(slots).map( function(k) {
        return (  <View key={k} style={{margin:5}}>
                    <AnimButton countCheck={0} onColor={"green"} effect={"pulse"} _onPress={(status) => _this._bookSlot(status,k,slots[k]) } text={slots[k]} />
                  </View>)
      });
      return (
        <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={StyleSheet.toolbar}>
          <TouchableOpacity onPress={() => this._onPressBack() }><Text style={StyleSheet.toolbarButton}>Back</Text></TouchableOpacity>
                      <Text style={StyleSheet.toolbarTitle}></Text>
                      <Text style={StyleSheet.toolbarButton}></Text>
        </View>
        { slotsarr }
        </View>
      );
    }
  }
   
  const styles = StyleSheet.create({
    container: 
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyle: 
  {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  logoStyle:
  {
    position: "absolute",
    justifyContent: "center",
    top: "8%"
  },
  viewButtonStyle:
  {
    flex: 1,
    top: "5%",
    alignItems: 'center'
  },
  viewBackgroundStyle:
  {
    backgroundColor: "black", 
    borderRadius: 24,
    width: Dimensions.get('window').width-50, 
    height: Dimensions.get('window').height-200,
    position: "absolute",
    alignContent: "center"
  },
  viewStyle:
  {
    justifyContent: "center", 
    alignItems: "center",
  }
});