import { useMemo, useState } from 'react';
import { useStaticSearch } from './useStaticSearch';

type UseSearchSuggestionsReturn = {
  suggestions: Array<{ id: number; name: string }>;
  showSuggestions: boolean;
  query: string;
  setQuery: (query: string) => void;
  hideSuggestions: () => void;
};

export function useSearchSuggestions(
  maxSuggestions: number = 5,
): UseSearchSuggestionsReturn {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { searchMatches } = useStaticSearch();

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];

    try {
      const matches = searchMatches(query);
      return matches.slice(0, maxSuggestions);
    } catch (error) {
      console.warn('Search suggestions error:', error);
      return [];
    }
  }, [query, searchMatches, maxSuggestions]);

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
