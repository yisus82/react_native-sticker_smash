import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

const TabsLayout = () => (
  <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#ffd33d',
    }}
  >
    <Tabs.Screen
      name='index'
      options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
        ),
      }}
    />
    <Tabs.Screen
      name='about'
      options={{
        title: 'About',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons
            name={focused ? 'information-circle' : 'information-circle-outline'}
            color={color}
            size={24}
          />
        ),
      }}
    />
  </Tabs>
);

export default TabsLayout;
