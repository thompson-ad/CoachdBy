import { supabase } from "@/api/supabase/client";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { makeRedirectUri } from "expo-auth-session";

export default function App() {
  const [email, onChangeEmail] = useState("");

  const onPressSubmitEmail = async () => {
    const redirectTo = makeRedirectUri();

    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: `${redirectTo}auth/callback`,
        shouldCreateUser: false,
      },
    });

    if (error) {
      if (error) throw error;
    } else {
      console.log("Magic link sent successfully");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Send magic link</Text>
      <TextInput
        keyboardType="email-address"
        textContentType="emailAddress"
        value={email.toLowerCase()}
        onChangeText={onChangeEmail}
        placeholder="Sign in with your email"
      />
      <Button
        onPress={onPressSubmitEmail}
        title="Submit"
        accessibilityLabel="Submit email address"
      />
    </View>
  );
}
