import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { mockEvents } from 'components/mockEvents';

const EventScreen = () => {
  const { eventId } = useLocalSearchParams<{ eventId: string }>();
  const event = mockEvents.find((ev) => ev.id === eventId);
  return (
    <View className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-8">
      <View className="mb-8">
        <Text className="mb-2 text-center text-3xl font-bold text-gray-800">Join an Event</Text>
        <Text className="text-center text-base text-gray-600">{event?.title}</Text>
      </View>

      {/* Placeholder content */}
      <View className="flex-1 items-center justify-center">
        <View className="mb-6 h-32 w-32 items-center justify-center rounded-full bg-blue-100">
          <Text className="text-5xl">🚀</Text>
        </View>
        <Text className="mb-8 text-center text-lg text-gray-700"> {event?.date}</Text>

        <TouchableOpacity
          className="mt-6 w-full rounded-xl bg-indigo-500 py-4"
          onPress={() => router.back()}>
          <Text className="text-center text-lg font-medium text-white">Back to events page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventScreen;
