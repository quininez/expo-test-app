const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

// Get the default configuration
const config = getDefaultConfig(__dirname);

// Add resolver configuration to handle problematic modules
config.resolver = {
  ...config.resolver,
  // Add additional extensions for TypeScript
  sourceExts: [...config.resolver.sourceExts, 'ts', 'tsx', 'mjs'],
  // Add a custom resolver for import.meta issue in valtio
  resolveRequest: (context, moduleName, platform) => {
    // Handle the default resolution process
    return context.resolveRequest(context, moduleName, platform);
  }
};

// Apply NativeWind configuration
const modifiedConfig = withNativeWind(config, { input: './global.css' });

// Export the modified configuration
module.exports = modifiedConfig;
