import React from 'react';
import { router } from 'expo-router';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useAppKit } from '@reown/appkit-ethers-react-native';

import { useSession } from '../hooks/ctx';

export const AkashaAuthScreen = () => {
  // const { open } = useAppKit();

  const { signIn } = useSession();

  const handleConnectWallet = () => {
    // open({view: 'Connect});
    signIn();
    router.replace('/');
  };

  return (
    <View className="flex-1 bg-slate-50">
      {/* Main Content */}
      <View className="flex-1 px-6 pb-10 pt-16">
        {/* Header */}
        <View className="mb-16 items-center">
          <Text className="text-center text-2xl font-bold text-gray-800">
            ✨ Sign in to use the events app ✨
          </Text>
        </View>

        {/* Illustration Container */}
        <View className="mb-10 flex-1 items-center justify-center">
          <Image
            source={require('../assets/akasha-space-illustration.png')}
            className="h-80 w-80"
            resizeMode="contain"
          />
        </View>

        {/* Connect Wallet Section */}
        <View className="mb-8">
          <Text className="mb-5 text-center text-lg font-medium text-gray-500">
            Connect your wallet
          </Text>

          <TouchableOpacity
            className="rounded-2xl border-2 border-purple-500 bg-white p-4 shadow-lg active:opacity-80"
            onPress={handleConnectWallet}
            activeOpacity={0.8}>
            <View className="flex-row items-center">
              <View className="mr-4">
                <Image
                  source={require('../assets/wallet-connect.png')}
                  className="h-12 w-12 items-center justify-center rounded-xl"
                  resizeMode="contain"
                />
              </View>
              <View className="flex-1">
                <Text className="mb-1 text-lg font-bold text-gray-800">Web3Modal</Text>
                <Text className="text-sm leading-5 text-gray-500">
                  Connect using MetaMask,{'\n'}WalletConnect, Coinbase etc..
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View className="items-center">
          <Text className="text-center text-base">
            <Text className="text-gray-500">Powered by </Text>
            <Text className="font-semibold text-purple-500">Web3Modal</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
