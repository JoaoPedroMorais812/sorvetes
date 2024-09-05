import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
  <View style={styles.p}>
    <View style={styles.container}>
      <View style={styles.types}>
<Text>oi</Text>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: center ,
    alignItems: 'center',
    backgroundColor: "#84EEAD",
    height: '100%',
  },
  p: {
    flex: 1, padding : 10 
  },
  types:{
    margin: '3px',
     backgroundColor: "#703F26",
    height : "20%" ,
    alignItems: 'center',
    width: '35%',
    borderRadius: '15%' ,
  },
});
