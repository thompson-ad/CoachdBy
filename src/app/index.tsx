import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { makeRedirectUri } from 'expo-auth-session';
import { useSupabase } from '@/providers/AuthProvider';
import { isAuthApiError } from '@supabase/supabase-js';

export default function App() {
  const supabase = useSupabase();
  const [email, onChangeEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const onPressSubmitEmail = async () => {
    const redirectTo = makeRedirectUri();
    setMessage('');
    setIsButtonDisabled(true);

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: `${redirectTo}auth/callback`,
          shouldCreateUser: false,
        },
      });

      if (error) {
        setMessage(`Error sending magic link: ${error.message}`);
        setIsButtonDisabled(false);
      } else {
        setMessage('Magic link sent successfully. Check your email.');
        // Enable the button again after 60 seconds
        setTimeout(() => {
          setIsButtonDisabled(false);
        }, 60000);
      }
    } catch (error) {
      if (isAuthApiError(error)) {
        if (error.status === 422) {
          setMessage('Email not found. Please enter a valid email address.');
          setIsButtonDisabled(false);
        } else if (error.status === 429) {
          setMessage('Too many requests. Please try again in 60 seconds.');

          // Enable the button again after 60 seconds
          setTimeout(() => {
            setIsButtonDisabled(false);
          }, 60000);
        } else {
          setMessage('An unexpected error occurred. Please try again.');
        }
      } else {
        setMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
        disabled={isButtonDisabled}
      />
      {message ? <Text>{message}</Text> : null}
    </View>
  );
}
