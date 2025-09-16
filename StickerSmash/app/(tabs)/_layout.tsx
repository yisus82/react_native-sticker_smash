import { Tabs } from 'expo-router';

const RootLayout = () => (
  <Tabs>
    <Tabs.Screen name='index' options={{ title: 'Home' }} />
    <Tabs.Screen name='about' options={{ title: 'About' }} />
  </Tabs>
);

export default RootLayout;
