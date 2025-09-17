import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

const PlaceholderImage = require('@/assets/images/background-image.png');

const Index = () => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={PlaceholderImage} style={styles.image} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default Index;
