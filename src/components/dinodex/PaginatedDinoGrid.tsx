'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import DinoCard from '@/components/explore/DinoCard';
import { Button } from '@/components/ui/button';
import type { Dinosaur } from '@/types/Dinosaur';

type PaginatedDinoGridProps = {
  dinosaurs: Dinosaur[];
};

export function PaginatedDinoGrid({ dinosaurs }: PaginatedDinoGridProps) {
  const itemsPerPage = 50;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dinosaurs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDinosaurs = dinosaurs.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentDinosaurs.map((dino) => (
          <DinoCard dino={dino} key={dino.id} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(endIndex, dinosaurs.length)} of{' '}
            {dinosaurs.length} dinosaurs
          </div>

          <div className="flex items-center space-x-2">
            <Button
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
              size="sm"
              variant="outline"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <div className="flex items-center space-x-1">
              {Array.from(
                { length: Math.min(5, totalPages) },
                (_, i): number => {
                  let pageNum: number;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <Button
                      key={pageNum}
                      onClick={() => goToPage(pageNum)}
                      size="sm"
                      variant={currentPage === pageNum ? 'default' : 'outline'}
                    >
                      {pageNum}
                    </Button>
                  );
                },
              )}
            </div>

            <Button
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
              size="sm"
              variant="outline"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
