module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx', '.js', '.json', '.svg', '.jsx'],
        alias: {
          '@src': './src',
          '@components': './src/components',
          '@store': './src/store',
          '@config': './src/config',
          '@svg': './src/assets/svg',
          '@pages': './src/pages',
          '@navigators': './src/navigators',
          '@hooks': './src/hooks',
          '@translations': './src/translations',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
