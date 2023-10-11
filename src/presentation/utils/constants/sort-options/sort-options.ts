import { SortOption } from '@/presentation/types';

export const SORT_OPTIONS: SortOption[] = [
  {
    field: 'id',
    label: '0-9',
    direction: 'asc'
  },
  {
    field: 'id',
    label: '9-0',
    direction: 'desc'
  },
  {
    field: 'name',
    label: 'A-Z',
    direction: 'asc'
  },
  {
    field: 'name',
    label: 'Z-A',
    direction: 'desc'
  }
];
