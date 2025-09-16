import { Stack } from 'expo-router';

const RootLayout = () => (
  <Stack>
    <Stack.Screen name='index' options={{ title: 'Home' }} />
    <Stack.Screen name='about' options={{ title: 'About' }} />
  </Stack>
);

export default RootLayout;
