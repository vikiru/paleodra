'use client';

import { Search, X } from 'lucide-react';
import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearchSuggestions } from '@/hooks/useSearchSuggestions';
import type { SearchIndex } from '@/types/SearchIndex';

type SearchBarProps = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  showSuggestions?: boolean;
  disabled?: boolean;
};

export const SearchBar = memo(function SearchBar({
  value = '',
  onChange,
  placeholder = 'Search dinosaurs...',
  className = '',
  showSuggestions = true,
  disabled = false,
}: SearchBarProps) {
  const { suggestions, showSuggestions: showLocalSuggestions, hideSuggestions } = useSearchSuggestions();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange?.(newValue);
  };

  const handleSuggestionClick = (suggestion: SearchIndex) => {
    onChange?.(suggestion.name);
    hideSuggestions();
  };

  return (
    <section className={`relative flex-1 max-w-3xl ${className}`} id="search-bar">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-muted-foreground" />
      </div>
      <Input
        className="pl-10 pr-10"
        disabled={disabled}
        onChange={handleInputChange}
        placeholder={placeholder}
        value={value}
      />
      {value && onChange && (
        <Button
          className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
          onClick={() => onChange('')}
          size="icon"
          variant="ghost"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
      {showSuggestions && showLocalSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-md shadow-lg z-50 max-h-48 overflow-y-auto">
          {suggestions.map((suggestion) => (
            <Button
              className="w-full justify-start h-auto py-2 px-3 text-sm"
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
              variant="ghost"
            >
              {suggestion.name}
            </Button>
          ))}
        </div>
      )}
    </section>
  );
});
