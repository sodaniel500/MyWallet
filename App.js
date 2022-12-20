import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import DetailScreen from './Screens/DetailScreen';

export default function App() {
  return (
    <View style={styles.container}>
     <DetailScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
