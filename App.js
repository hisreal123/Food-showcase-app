import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView className=''>
        <Text className='text-xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur numquam cum asperiores inventore impedit aliquam nobis voluptate tempora, nihil ipsa, sint ducimus. Enim, nobis? Nihil quibusdam mollitia voluptatum nesciunt.</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}
