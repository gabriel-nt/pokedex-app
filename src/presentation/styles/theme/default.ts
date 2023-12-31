const defaultTheme = {
  title: 'default',
  backgrounds: {
    dark: '#333333',
    bug: '#C3CE75',
    dragon: '#F9BE00',
    electric: '#FFD86F',
    fairy: '#f469a9',
    fighting: '#eb4971',
    fire: '#FB6C6C',
    flying: '#d6b591',
    ghost: '#735797',
    grass: '#48D0B0',
    ground: '#B1736C',
    ice: '#7FCCEC',
    normal: '#C2C2A1',
    poison: '#7C538C',
    psychic: '#9B7FA6',
    rock: '#A6AAB6',
    steel: '#CCCCDE',
    water: '#609FB5',
    light: '#F1F1F1',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#CCCCCC',
    purple: '#6C79DB',
    grayLight: '#EEEEEE',
    blackOpacity: 'rgba(0, 0, 0, 0.25);'
  },
  colors: {
    white: '#FFFFFF',
    dark: '#333333',
    black: '#000000',
    gray: '#CCCCCC',
    light02: 'hsla(0, 0%, 100%, 0.2)',
    light04: 'hsla(0, 0%, 100%, 0.4)'
  },
  fonts: {
    openSans: {
      400: 'OpenSans-Regular',
      500: 'OpenSans-Medium',
      600: 'OpenSans-SemiBold',
      700: 'OpenSans-Bold'
    },
    roboto: {
      400: 'Roboto-Regular',
      500: 'Roboto-Medium',
      700: 'Roboto-Bold'
    }
  }
} as const;

export { defaultTheme };
