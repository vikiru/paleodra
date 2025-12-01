import { useMemo } from 'react';
import dinosaurs from '@/data/dinosaurs.json';
import { useDinoStore } from '@/store/dinoStore';
import type { Dinosaur } from '@/types/Dinosaur';

const dinosaursData = dinosaurs as unknown as Dinosaur[];

type UseDiscoveryTrackingReturn = {
  totalSeenCount: number;
  totalCount: number;
  progressPercentage: number;
  discoveredCount: number;
  undiscoveredCount: number;
  isDiscovered: (id: number) => boolean;
  markAsDiscovered: (id: number) => void;
};

export function useDiscoveryTracking(): UseDiscoveryTrackingReturn {
  const { seenIds, getAllSeenIds, markAsSeen } = useDinoStore();

  const totalSeenCount = getAllSeenIds().length;
  const totalCount = dinosaursData.length;
  const progressPercentage = (totalSeenCount / totalCount) * 100;

  const discoveredCount = useMemo(() => {
    return dinosaursData.filter((dino) => seenIds.has(dino.id)).length;
  }, [seenIds]);

  const undiscoveredCount = totalCount - discoveredCount;

  const isDiscovered = (id: number): boolean => {
    return seenIds.has(id);
  };

  const markAsDiscovered = (id: number): void => {
    markAsSeen(id);
  };

  return {
    totalSeenCount,
    totalCount,
    progressPercentage,
    discoveredCount,
    undiscoveredCount,
    isDiscovered,
    markAsDiscovered,
  };
}
