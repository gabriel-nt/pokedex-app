module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-graphql',
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        safe: false,
        allowUndefined: true,
        verbose: false
      }
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/main': './src/main',
          '@/domain': './src/domain',
          '@/application': './src/application',
          '@/presentation': './src/presentation',
          '@/infrastructure': './src/infrastructure'
        }
      }
    ]
  ]
};
