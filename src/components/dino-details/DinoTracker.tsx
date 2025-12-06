'use client';

import { useEffect } from 'react';
import { useDinoStore } from '@/store/dinoStore';

type DinoTrackerProps = {
  dinoId: number;
};

export function DinoTracker({ dinoId }: DinoTrackerProps) {
  const { markAsSeen } = useDinoStore();

  useEffect(() => {
    markAsSeen(dinoId);
  }, [dinoId, markAsSeen]);

  return null;
}
