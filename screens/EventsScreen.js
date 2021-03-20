import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";



function EventsHomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>My Events </Text>
          <Button onPress={() => navigation.navigate("EventsSecond")}
          title="Next Page"
          ></Button>
          </View>
      );
}
function EventsSecondScreen({ navigation }) {
    return (  
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Events</Text>
          </View>
          );
}

const Stack = createStackNavigator();

export default function EventsStack() {
return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
            <Stack.Screen name="EventsHome" component={EventsHomeScreen} />
            <Stack.Screen name="EventsSecond" component={EventsSecondScreen} />
            </Stack.Navigator>
      );
}