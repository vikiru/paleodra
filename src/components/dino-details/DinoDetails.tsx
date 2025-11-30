'use client';

import { useEffect } from 'react';
import { useDinoStore } from '@/store/dinoStore';

type DinoDetailsProps = {
  dinoId: number;
  children: React.ReactNode;
};

export function DinoDetails({ dinoId, children }: DinoDetailsProps) {
  const { markAsSeen } = useDinoStore();

  useEffect(() => {
    markAsSeen(dinoId);
  }, [dinoId, markAsSeen]);

  return <>{children}</>;
}
