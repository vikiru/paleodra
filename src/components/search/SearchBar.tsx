'use client';

import { Search } from 'lucide-react';
import { memo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useSearchSuggestions } from '@/hooks/useSearchSuggestions';
import type { SearchIndex } from '@/types/SearchIndex';

type SearchBarProps = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  showSuggestions?: boolean;
};

export function SearchBar({
  value = '',
  onChange,
  placeholder = 'Search for a dinosaur...',
  className = '',
  showSuggestions = false,
}: SearchBarProps) {
  const {
    suggestions,
    showSuggestions: showLocalSuggestions,
    hideSuggestions,
  } = useSearchSuggestions();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange?.(newValue);
  };

  const handleSuggestionClick = (suggestion: SearchIndex) => {
    onChange?.(suggestion.name);
    hideSuggestions();
  };

  return (
    <div className={`relative flex-1 max-w-3xl ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-muted-foreground" />
      </div>
      <Input
        className="pl-10 pr-10"
        onChange={handleInputChange}
        placeholder={placeholder}
        value={value}
      />
      {value && onChange && (
        <Badge
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer hover:bg-muted-foreground/20"
          onClick={() => onChange('')}
          variant="secondary"
        >
          Clear
        </Badge>
      )}
      {showSuggestions && showLocalSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
          {suggestions.map((suggestion) => (
            <button
              className="w-full text-left px-3 py-2 hover:bg-muted transition-colors text-sm"
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default memo(SearchBar);
