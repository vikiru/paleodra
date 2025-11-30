import { Bone } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link className="flex items-center space-x-2" href="/">
      <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary/10 text-primary">
        <Bone className="h-5 w-5" />
      </div>
      <span className="logo text-2xl font-bold gradient">Paleodra</span>
    </Link>
  );
}
