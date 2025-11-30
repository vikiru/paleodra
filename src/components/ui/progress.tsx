'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';

import { cn } from '@/lib/utils/cn';

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      className={cn(
        'bg-neutral-900/20 relative h-2 w-full overflow-hidden rounded-full dark:bg-neutral-50/20',
        className,
      )}
      data-slot="progress"
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="bg-green-500 h-full w-full flex-1 transition-all"
        data-slot="progress-indicator"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
