import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Redirect, router } from 'expo-router';

import { useSession } from '../../../hooks/ctx';

const CreateEventScreen = () => {
  const { session } = useSession();
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/auth" />;
  }
  return (
    <View className="flex-1 bg-gradient-to-br from-purple-50 to-pink-50 px-4 py-8">
      <View className="mb-8">
        <Text className="mb-2 text-center text-3xl font-bold text-gray-800">Create an Event</Text>
        <Text className="text-center text-base text-gray-600">
          Set up your event details and invite participants
        </Text>
      </View>

      {/* Placeholder content */}
      <View className="flex-1 items-center justify-center">
        <View className="mb-6 h-32 w-32 items-center justify-center rounded-full bg-purple-100">
          <Text className="text-5xl">✨</Text>
        </View>
        <Text className="mb-8 text-center text-lg text-gray-700">
          This is a placeholder for the create event functionality
        </Text>

        <TouchableOpacity
          className="mt-6 w-full rounded-xl bg-purple-500 py-4"
          onPress={() => router.back()}>
          <Text className="text-center text-lg font-medium text-white">Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateEventScreen;
