import { saveString, loadString } from './storage';

const accessTokenKey = 'ACCESS_TOKEN';

interface StorageManager {
  setAuthToken: (token: string) => boolean;
  getAuthToken: () => string | null;
}

const storageManager: StorageManager = {
  setAuthToken: (token: string) => saveString(accessTokenKey, token),
  getAuthToken: () => loadString(accessTokenKey)
};

export { storageManager };
