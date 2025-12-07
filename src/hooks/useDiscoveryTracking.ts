import { useMemo } from 'react';
import dinoMetadata from '@/data/dinoMetadata.json';
import { useDinoStore } from '@/store/dinoStore';
import type { DinosaurMetadata } from '@/types/DinosaurMetadata';

const dinosaursData = dinoMetadata as unknown as DinosaurMetadata[];

type DiscoveryTrackingData = {
  totalSeenCount: number;
  totalCount: number;
  progressPercentage: number;
  discoveredCount: number;
  undiscoveredCount: number;
  isDiscovered: (id: number) => boolean;
  markAsDiscovered: (id: number) => void;
};

export function useDiscoveryTracking(): DiscoveryTrackingData {
  const { seenIds, markAsSeen } = useDinoStore();

  const totalCount = dinosaursData.length;
  const discoveredCount = useMemo(() => {
    return dinosaursData.filter((dino) => seenIds.has(dino.id)).length;
  }, [seenIds]);

  const undiscoveredCount = totalCount - discoveredCount;
  const progressPercentage =
    totalCount > 0 ? (discoveredCount / totalCount) * 100 : 0;

  const isDiscovered = (id: number): boolean => {
    return seenIds.has(id);
  };

  const markAsDiscovered = (id: number): void => {
    markAsSeen(id);
  };

  return {
    totalSeenCount: discoveredCount,
    totalCount,
    progressPercentage,
    discoveredCount,
    undiscoveredCount,
    isDiscovered,
    markAsDiscovered,
  };
}
