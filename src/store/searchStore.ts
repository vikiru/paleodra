import type { Document } from 'flexsearch';
import { create } from 'zustand';
import { createSearchIndex, searchQuery } from '@/lib/utils/flexSearch';
import type { SearchIndex } from '@/types/SearchIndex';

type SearchStore = {
  searchDocument: Document | null;
  isInitialized: boolean;
  initializeSearch: (searchIndexData: SearchIndex[]) => void;
  searchDinosaurs: (query: string) => number[];
  searchMatches: (query: string) => Array<SearchIndex>;
};

export const useSearchStore = create<SearchStore>((set, get) => ({
  searchDocument: null,
  isInitialized: false,

  initializeSearch: (searchIndexData: SearchIndex[]) => {
    if (get().isInitialized) return;

    const document = createSearchIndex(searchIndexData);

    set({
      searchDocument: document,
      isInitialized: true,
    });
  },

  searchDinosaurs: (query: string) => {
    const { searchDocument } = get();
    if (!searchDocument) return [];

    const matches = searchQuery(searchDocument, query);
    return matches.map((match) => match.id);
  },

  searchMatches: (query: string) => {
    const { searchDocument } = get();
    if (!searchDocument) return [];

    return searchQuery(searchDocument, query);
  },
}));
