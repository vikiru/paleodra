import type { Document, DocumentData } from 'flexsearch';
import { create } from 'zustand';
import { createSearchIndex } from '@/lib/utils/flexSearch';
import type { SearchIndex } from '@/types/SearchIndex';

type SearchState = {
  searchQuery: string;
  diet: string;
  locomotion: string;
  isLoading: boolean;
  isInitialized: boolean;
  searchIndex: Document<DocumentData, false, false> | null;
  setSearchQuery: (query: string) => void;
  setDiet: (diet: string) => void;
  setLocomotion: (locomotion: string) => void;
  setLoading: (loading: boolean) => void;
  initializeSearch: (searchIndexData: SearchIndex[]) => void;
  resetFilters: () => void;
};

export const useSearchStore = create<SearchState>((set) => ({
  searchQuery: '',
  diet: 'all',
  locomotion: 'all',
  isLoading: false,
  isInitialized: false,
  searchIndex: null,
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setDiet: (diet) => set({ diet }),
  setLocomotion: (locomotion) => set({ locomotion }),
  setLoading: (isLoading) => set({ isLoading }),
  initializeSearch: (searchIndexData: SearchIndex[]) => {
    const searchIndex = createSearchIndex(searchIndexData);
    set({ searchIndex, isInitialized: true });
  },
  resetFilters: () => set({ searchQuery: '', diet: 'all', locomotion: 'all' }),
}));
