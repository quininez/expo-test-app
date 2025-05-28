import React from 'react';
import { AkashaAuthScreen } from 'components/AkashaAuthScreen';
import { Stack } from 'expo-router';
import { useSession } from 'hooks/ctx';

export default function AuthScreen() {
  // const { session } = useSession();
  return <AkashaAuthScreen />;
}
