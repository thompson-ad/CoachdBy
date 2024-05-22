import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="programme/index" options={{ title: "Programme" }} />
      <Tabs.Screen name="request/index" options={{ title: "Request" }} />
    </Tabs>
  );
}
