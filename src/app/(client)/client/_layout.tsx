import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="programme/index"
        options={{ title: 'Programme', headerShown: false }}
      />
      <Tabs.Screen
        name="request/index"
        options={{ title: 'Request', headerShown: false }}
      />
    </Tabs>
  );
}
