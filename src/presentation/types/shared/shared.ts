export type PokemonTypes =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water';

export type SortOption = {
  label: string;
  field: 'id' | 'name';
  direction: 'asc' | 'desc';
};

export type GenerationOption = {
  value: number;
  label: string;
};
