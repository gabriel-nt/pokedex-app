import { AsyncStorageAdapter } from '@/infrastructure/cache';

export const makeAsyncStorageAdapter = (): AsyncStorageAdapter =>
  new AsyncStorageAdapter();
