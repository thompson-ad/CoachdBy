import { Slot, Stack, useNavigationContainerRef } from "expo-router";
import "../../global.css";
import { useReactNavigationDevTools } from "@dev-plugins/react-navigation";
import { DeepLinkProvider } from "@/providers/DeepLinkProvider";

export default function RootLayout() {
  const navigationRef = useNavigationContainerRef();
  useReactNavigationDevTools(navigationRef);
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Providers>
      <Stack screenOptions={{ headerShown: false }} />
    </Providers>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  return <DeepLinkProvider>{children}</DeepLinkProvider>;
}
