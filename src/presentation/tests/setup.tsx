import '@testing-library/jest-native';

global.requestAnimationFrame = () => 1;

jest.mock('@react-native-async-storage/async-storage', () =>
  require('./mocks/async-storage')
);

jest.mock('@apollo/client', () => ({
  ApolloClient: () => ({
    query: () => {
      return {
        data: require('./data/pokemons').default,
        loading: false
      };
    }
  }),
  InMemoryCache: () => ({})
}));

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'android',
  isTesting: true,
  select: () => ({
    ios: () => true,
    android: () => false
  })
}));

jest.mock('react-native-modalize', () => ({
  useModalize: jest.fn(() => ({
    ref: jest.fn(),
    open: jest.fn(),
    close: jest.fn()
  })),
  Modalize: (props: any) => <>{props.children}</>
}));

jest.mock('zustand', () => require('./mocks/zustand'));

jest.mock('jail-monkey', () => ({
  trustFall: () => true,
  isDebuggedMode: () => false,
  isOnExternalStorage: () => false
}));

jest.setTimeout(30000);
