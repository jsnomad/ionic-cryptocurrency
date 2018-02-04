export const availableLanguages = [
  {
    code: 'en',
    name: 'English'
  },
  {
    code: 'fr',
    name: 'Français'
  }
];

export const defaultLanguage = 'en';

export const availableDevise = [
  {
    code: 'usd',
    name: 'Dollar',
    symbol: '$'
  },
  {
    code: 'eur',
    name: 'Euro',
    symbol: '€'
  }
];

export const defaultDevise = 'usd';

export enum availableTheme {
  Dark = 'dark-theme',
  Light = 'light-theme'
}

export const apiUrl: string = 'https://api.coinmarketcap.com/v1';
