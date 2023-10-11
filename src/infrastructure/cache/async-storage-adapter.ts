import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SetStorage,
  GetStorage,
  ClearStorage
} from '@/application/protocols/cache';

export class AsyncStorageAdapter
  implements SetStorage, GetStorage, ClearStorage
{
  async set(key: string, value: object): Promise<void> {
    if (value) {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } else {
      await AsyncStorage.removeItem(key);
    }
  }

  async clear(): Promise<void> {
    await AsyncStorage.clear();
  }

  async get<T>(key: string): Promise<T | null> {
    const response = await AsyncStorage.getItem(key);

    return response ? JSON.parse(response) : null;
  }
}
