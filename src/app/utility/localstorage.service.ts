// src/app/services/local-storage.service.ts

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * A service for safe access to localStorage, handling SSR environments.
 * It uses Angular's PLATFORM_ID to ensure localStorage operations
 * only run when the application is executed in a browser.
 */
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  /**
   * Saves data to localStorage.
   * @param key The key under which to store the value.
   * @param value The value to store. It will be JSON.stringified.
   */
  public setLocalStorage<T>(key: string, value: T): void {
    if (!this.isBrowser) {
      return; // Exit early if not in browser
    }
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }

  /**
   * Retrieves data from localStorage.
   * @param key The key of the item to retrieve.
   * @returns The parsed value, or null if the item doesn't exist or an error occurs.
   */
  public getLocalStorage<T>(key: string): T | null {
    if (!this.isBrowser) {
      return null; // Exit early and return null if not in browser
    }
    try {
      const item = localStorage.getItem(key);
      // Ensure item is not null before parsing
      return item ? JSON.parse(item) as T : null;
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return null;
    }
  }

  /**
   * Removes a specific item from localStorage.
   * @param key The key of the item to remove.
   */
  public removeLocalStorage(key: string): void {
    if (!this.isBrowser) {
      return;
    }
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage', error);
    }
  }

  /**
   * Clears all items from localStorage.
   */
  public clearLocalStorage(): void {
    if (!this.isBrowser) {
      return;
    }
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage', error);
    }
  }
}
