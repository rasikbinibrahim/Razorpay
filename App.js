import React from "react";
import { Button, StyleSheet, Alert, View } from "react-native";
import RazorpayCheckout from "react-native-razorpay";

const App = () => {

  let options = {
    descriptions: 'Sterlo App',
    image: "https://www.sterlo.io/wp-content/uploads/2022/08/sterlo-favicon-with-white-border.jpg",
    currency: 'INR',
    key: 'rzp_test_EU9vxTTYWUHsa0',
    amount: '5000' * 100,
    name: 'Rasik',
    profile: {
      email: 'rasik@oreops.com',
      contact: '9585248912',
      name: 'Rasik Nizam',
    },
    theme: { color: '#004daa'}
  };

  const onPressButton = () => {
    RazorpayCheckout.open(options)
      .then((data) => {
        Alert.alert("sucess"+JSON.stringify(data));
      })
      .catch((error) => {
        Alert.alert("failled");
      });
  };

  return(
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button onPress={() => onPressButton()} title='Press Me to Pay' />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
},
buttonContainer: {
  margin: 20,
},
alternativeLayoutButtonContainer: {
  margin: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
},
});
