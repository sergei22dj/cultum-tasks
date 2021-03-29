import { storageManager } from '@md-managers/storage';

export function useStorageManager() {
  if (process.browser) {
    return storageManager;
  }
}
