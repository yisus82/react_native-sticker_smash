import { Image } from 'expo-image';
import { ImageSourcePropType, StyleSheet } from 'react-native';

type Props = {
  imgSource: ImageSourcePropType;
};

const ImageViewer = ({ imgSource }: Props) => <Image source={imgSource} style={styles.image} />;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
