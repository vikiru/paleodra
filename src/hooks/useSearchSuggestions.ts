import { useMemo, useState } from 'react';
import dinosaurs from '@/data/dinosaurs.json';
import { useStaticSearch } from '@/hooks/useStaticSearch';
import type { Dinosaur } from '@/types/Dinosaur';
import type { SearchIndex } from '@/types/SearchIndex';

type SearchSuggestionData = {
  suggestions: Array<SearchIndex>;
  showSuggestions: boolean;
  query: string;
  setQuery: (query: string) => void;
  hideSuggestions: () => void;
};

export function useSearchSuggestions(
  maxSuggestions: number = 5,
): SearchSuggestionData {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { searchDinosaur } = useStaticSearch();

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];

    try {
      const matchIds = searchDinosaur(query);
      const matches = (dinosaurs as unknown as Dinosaur[])
        .filter((dino) => matchIds.includes(dino.id))
        .slice(0, maxSuggestions)
        .map(({ id, name }) => ({ id, name }));

      return matches;
    } catch (error) {
      console.warn('Search suggestions error:', error);
      return [];
    }
  }, [query, searchDinosaur, maxSuggestions]);

  const handleSetQuery = (newQuery: string) => {
    setQuery(newQuery);
    setShowSuggestions(newQuery.trim().length > 0);
  };

  const hideSuggestions = () => {
    setShowSuggestions(false);
  };

  return {
    suggestions,
    showSuggestions,
    query,
    setQuery: handleSetQuery,
    hideSuggestions,
  };
}
