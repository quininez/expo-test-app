import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { router } from 'expo-router';
import { mockEvents } from 'components/mockEvents';

export type Event = {
  id?: string;
  title?: string;
  date?: string;
  participants?: number;
};

const EventItem = ({ event }: { event: Event }) => (
  <TouchableOpacity
    className="my-8 rounded-xl bg-white p-4 shadow-sm"
    onPress={() => router.push(`/events/${event.id}`)}>
    <Text className="mb-1 text-lg font-bold text-gray-800">{event.title}</Text>
    <Text className="text-gray-600">{event.date}</Text>
    <Text className="mt-1 text-sm text-gray-500">{event.participants} participants</Text>
  </TouchableOpacity>
);

const EventsScreen = () => {
  return (
    <View className="flex-1 bg-gray-50 p-4">
      <Text className="mb-6 text-2xl font-bold text-gray-800">Available Events</Text>

      <FlatList
        data={mockEvents}
        renderItem={({ item }) => <EventItem event={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        className="mt-4 rounded-lg bg-blue-500 p-4"
        onPress={() => router.push('/join-event')}>
        <Text className="text-center font-semibold text-white">Join with Event Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventsScreen;
