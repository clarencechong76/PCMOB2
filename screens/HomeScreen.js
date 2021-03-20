import React from 'react';
import { Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { List, Card, Paragraph, Title } from 'react-native-paper';
import { Container, Header, Left, Body, Right } from 'native-base'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={HomeScreen}/>
    </Stack.Navigator>
  )
}

function HomeScreen() {

  return(
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>
          International Potato Day
        </Text>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Welcome</Title>
            <Paragraph>Thank you for downloadiing this app.</Paragraph>
          </Card.Content>
          <Card.Cover style={{marginTop: 10, height: 200}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg' }} />
        </Card>
        <List.Section title="Frequently Asked Questions">
          <List.Accordion
            title="What is this for?">
            <List.Item title="We celebrate the birth of potatoes." />
          </List.Accordion>
          <List.Accordion
            title="When will this be?">
            <List.Item title="Whenever this pandemic is over." />
          </List.Accordion>
          <List.Accordion
            title="Where will this be?">
            <List.Item title="Ireland" />
          </List.Accordion>
        </List.Section>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  card: {
    marginTop: 20, 
    marginLeft: 15, 
    marginRight: 15,
  }
})

const dataArray = [
    {
      title: "What is this?",
      content: "Exactly what the title says. A basket throwing competition!",
    },
    {
      title: "Who is this by?",
      content:
        "The International Society of Basket Throwers (ISBT). We love throwing baskets.",
    },
    {
      title: "Why is this?",
      content: "Because baskets! Wheee!",
    },
   ];
   
           














