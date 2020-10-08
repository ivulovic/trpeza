module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          'containers': './src/containers',
          'components': './src/components',
          'utils': './src/utils',
          'hooks': './src/hooks',
          'styles': './src/styles',
          'images': './src/images',
          'providers': './src/providers',
        },
      },
    ],
  ],
};
