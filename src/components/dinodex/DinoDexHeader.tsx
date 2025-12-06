'use client';

import { useEffect, useState } from 'react';
import { useDiscoveryTracking } from '@/hooks/useDiscoveryTracking';

export function DinoDexHeader() {
  const { discoveredCount, undiscoveredCount } = useDiscoveryTracking();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="mb-6">
      <h1 className="text-4xl font-heading font-bold sm:text-5xl">DinoDex</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Complete encyclopedia of all dinosaur species
      </p>
      <div className="mt-2 flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="text-muted-foreground">
            {isMounted ? `${discoveredCount} Discovered` : 'Loading...'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-gray-400" />
          <span className="text-muted-foreground">
            {isMounted ? `${undiscoveredCount} Undiscovered` : 'Loading...'}
          </span>
        </div>
      </div>
    </div>
  );
}
