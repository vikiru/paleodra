'use client';

import { Progress } from '@/components/ui/progress';
import { useDiscoveryTracking } from '@/hooks/useDiscoveryTracking';
import { useIsMounted } from '@/hooks/useIsMounted';

export function DiscoveryProgress() {
  const { discoveredCount, totalCount, progressPercentage } = useDiscoveryTracking();
  const isMounted = useIsMounted();

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Discovery Progress</span>
        <span className="text-muted-foreground">
          {isMounted ? `${discoveredCount} of ${totalCount} dinosaurs discovered` : 'Loading...'}
        </span>
      </div>
      <Progress className="h-2" value={isMounted ? progressPercentage : 0} />
    </div>
  );
}
