import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const NotFoundScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white px-4">
      <Text className="mb-2 text-4xl font-bold text-gray-800">404</Text>
      <Text className="mb-6 text-xl text-gray-600">Page Not Found</Text>
      <Text className="mb-8 text-center text-gray-500">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </Text>

      <TouchableOpacity
        className="rounded-lg bg-blue-500 px-6 py-3"
        onPress={() => router.replace('/')}>
        <Text className="text-white">Go Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotFoundScreen;
