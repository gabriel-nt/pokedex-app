import { LoadPokemons } from '@/domain/use-cases/pokemons';

export default {
  pokemons: [
    {
      data: [
        {
          types: [
            {
              data: {
                name: 'grass'
              }
            }
          ],
          abilities: [
            {
              data: {
                name: 'overgrow'
              }
            },
            {
              data: {
                name: 'shell-armor'
              }
            }
          ],
          stats: [
            {
              base_stat: 55,
              data: {
                name: 'hp'
              }
            },
            {
              base_stat: 68,
              data: {
                name: 'attack'
              }
            },
            {
              base_stat: 64,
              data: {
                name: 'defense'
              }
            },
            {
              base_stat: 45,
              data: {
                name: 'special-attack'
              }
            },
            {
              base_stat: 55,
              data: {
                name: 'special-defense'
              }
            },
            {
              base_stat: 31,
              data: {
                name: 'speed'
              }
            }
          ],
          name: 'turtwig',
          id: 387,
          height: 4,
          weight: 102
        }
      ],
      chain: {
        evolves_to: []
      }
    },
    {
      data: [
        {
          types: [
            {
              data: {
                name: 'grass'
              }
            }
          ],
          abilities: [
            {
              data: {
                name: 'overgrow'
              }
            },
            {
              data: {
                name: 'shell-armor'
              }
            }
          ],
          stats: [
            {
              base_stat: 75,
              data: {
                name: 'hp'
              }
            },
            {
              base_stat: 89,
              data: {
                name: 'attack'
              }
            },
            {
              base_stat: 85,
              data: {
                name: 'defense'
              }
            },
            {
              base_stat: 55,
              data: {
                name: 'special-attack'
              }
            },
            {
              base_stat: 65,
              data: {
                name: 'special-defense'
              }
            },
            {
              base_stat: 36,
              data: {
                name: 'speed'
              }
            }
          ],
          name: 'grotle',
          id: 388,
          height: 11,
          weight: 970
        }
      ],
      chain: {
        evolves_to: []
      }
    },
    {
      data: [
        {
          types: [
            {
              data: {
                name: 'grass'
              }
            },
            {
              data: {
                name: 'ground'
              }
            }
          ],
          abilities: [
            {
              data: {
                name: 'overgrow'
              }
            },
            {
              data: {
                name: 'shell-armor'
              }
            }
          ],
          stats: [
            {
              base_stat: 95,
              data: {
                name: 'hp'
              }
            },
            {
              base_stat: 109,
              data: {
                name: 'attack'
              }
            },
            {
              base_stat: 105,
              data: {
                name: 'defense'
              }
            },
            {
              base_stat: 75,
              data: {
                name: 'special-attack'
              }
            },
            {
              base_stat: 85,
              data: {
                name: 'special-defense'
              }
            },
            {
              base_stat: 56,
              data: {
                name: 'speed'
              }
            }
          ],
          name: 'torterra',
          id: 389,
          height: 22,
          weight: 3100
        }
      ],
      chain: {
        evolves_to: []
      }
    }
  ]
} as LoadPokemons.ApiResponse;
