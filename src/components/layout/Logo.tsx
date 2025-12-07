import Link from 'next/link';

export function Logo() {
  return (
    <section id="logo">
      <Link href="/">
        <span className="logo text-2xl font-bold gradient">Paleodra</span>
      </Link>
    </section>
  );
}
