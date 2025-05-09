import Link from 'next/link';

export default function HomeHeader() {

  return (
    <div className={'absolute top-[40px] left-[50px] z-20 text-left'}>
      <h1 className="text-[36px] font-heading uppercase tracking-widest mb-4">
        Jason Cooper
      </h1>
      <nav className="flex flex-col space-y-[18px] text-[18px] font-heading uppercase tracking-wider">
        <div>
          <Link href="/resume" className="hover:text-pink-600">
            Resumé
          </Link>
        </div>

        <div>
          <Link href="/projects" className="hover:text-pink-600">
            Projects
          </Link>
        </div>

        <div>
          <Link href="/about-you" className="hover:text-pink-600">
            About You
          </Link>
        </div>
      </nav>
    </div>
  );
}
