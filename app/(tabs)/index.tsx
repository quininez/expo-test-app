import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const HomeScreen = () => {
  const checkAuthAndNavigate = () => {
    router.push('/events/create');
  };

  return (
    <View className="flex-1 bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <View className="px-6 pb-8 pt-16">
        <Text className="mb-2 text-center text-3xl font-bold text-gray-800">AKASHA World</Text>
        <Text className="text-center text-lg text-gray-600">Connect, Create, and Collaborate</Text>
      </View>

      {/* Main Content */}
      <View className="flex-1 justify-center px-6">
        {/* Create Event Button */}
        <TouchableOpacity
          className="mb-8 active:opacity-80"
          onPress={checkAuthAndNavigate}
          activeOpacity={0.8}>
          <LinearGradient
            colors={['#8B5CF6', '#A855F7', '#C084FC']}
            style={{ borderRadius: 24 }}
            className="p-6 shadow-lg">
            <View className="items-center">
              <View className="mb-4 h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <Text className="text-3xl">✨</Text>
              </View>
              <Text className="mb-2 text-2xl font-bold text-white">Create an Event</Text>
              <Text className="text-center text-base leading-6 text-purple-100">
                Start your own gathering and invite others to join your space
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Join Event Button */}
        <TouchableOpacity
          className="mt-4 active:opacity-80"
          onPress={() => {
            router.push('events');
          }}
          activeOpacity={0.8}>
          <LinearGradient
            colors={['#3B82F6', '#2563EB', '#1D4ED8']}
            style={{ borderRadius: 24 }}
            className="p-6 shadow-lg">
            <View className="items-center">
              <View className="mb-4 h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <Text className="text-3xl">🚀</Text>
              </View>
              <Text className="mb-2 text-2xl font-bold text-white">Join an Event</Text>
              <Text className="text-center text-base leading-6 text-blue-100">
                Discover and participate in exciting events happening around you
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View className="px-6 pb-8">
        <Text className="text-center text-sm text-gray-500">
          Welcome to the decentralized future of events
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;
