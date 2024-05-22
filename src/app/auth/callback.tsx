import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Text } from "react-native";
import { supabase } from "@/api/supabase/client";
import * as QueryParams from "expo-auth-session/build/QueryParams";
import { useDeepLink } from "@/providers/DeepLinkProvider";

const createSessionFromUrl = async (url: string) => {
  const { params, errorCode } = QueryParams.getQueryParams(url);

  if (errorCode) throw new Error(errorCode);
  const { access_token, refresh_token } = params;

  if (!access_token) return;

  const { data, error } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  });
  if (error) throw error;
  return data.session;
};

const AuthCallback = () => {
  const router = useRouter();
  const link = useDeepLink();

  const redirectToCoachOrClientApp = (roles: string[]) => {
    if (roles.includes("coach")) {
      router.push("/coach");
    } else {
      router.push("/client");
    }
  };

  const getUserRoles = async (userId: string) => {
    const { data: roles, error: rolesError } = await supabase
      .from("user_roles")
      .select("roles(role_name)")
      .eq("profile_id", userId);

    if (rolesError) {
      console.error("Error fetching user roles:", rolesError);
      return [];
    } else {
      return roles.map((r) => r.roles?.role_name || "");
    }
  };

  const handleDeepLink = async (event: { link: string }) => {
    const url = event.link;
    try {
      const session = await createSessionFromUrl(url);
      if (session) {
        const user = session.user;
        const roles = await getUserRoles(user.id);
        if (roles.length > 0) {
          redirectToCoachOrClientApp(roles);
        } else {
          // redirect to onboarding
          // router.push("/onboarding");
          console.log("User has no roles");
        }
      }
    } catch (error) {
      console.error("Error handling sign-in:", error);
    }
  };

  useEffect(() => {
    console.log("AuthCallback mounted");
    if (link) {
      handleDeepLink({ link });
    }
  }, [link]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Signing in...</Text>
    </View>
  );
};

export default AuthCallback;
