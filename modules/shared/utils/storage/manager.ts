import { saveString, loadString, load, save } from './storage';

const accessTokenKey = 'ACCESS_TOKEN';
const headerToggleKey = 'HEADER_TOGGLE';

interface StorageManager {
  setAuthToken: (token: string) => boolean;
  getAuthToken: () => string | null;
  setHeaderToggleState: (val: boolean) => boolean;
  getHeaderToggleState: () => boolean;
}

const storageManager: StorageManager = {
  setAuthToken: (token: string) => saveString(accessTokenKey, token),
  getAuthToken: () => loadString(accessTokenKey),
  setHeaderToggleState: (value: boolean) => save(headerToggleKey, value),
  getHeaderToggleState: () => load(headerToggleKey)
};

export { storageManager };
