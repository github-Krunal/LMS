/**
 * Save data to localStorage
 */
 export function setLocalStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage', error);
  }
}

/**
 * Get data from localStorage
 */
export function getLocalStorage<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  } catch (error) {
    console.error('Error reading from localStorage', error);
    return null;
  }
}

/**
 * Remove an item from localStorage
 */
export function removeLocalStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage', error);
  }
}

/**
 * Clear all localStorage
 */
export function clearLocalStorage(): void {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage', error);
  }
}
