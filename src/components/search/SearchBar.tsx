'use client';

import { Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export function SearchBar({
    value = '',
    onChange,
    placeholder = 'Search for a dinosaur...',
    className = '',
}: SearchBarProps) {
    return (
        <div className={`relative flex-1 max-w-3xl ${className}`}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input
                className="pl-10 pr-10"
                onChange={(e) => onChange?.(e.target.value)}
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
        </div>
    );
}
