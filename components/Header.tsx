import Navbar from './Navbar';
import ThemeToggle from './theme-toggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 text-center py-4 bg-gray-400 dark:bg-gray-800" style={{transition: 'background-color 0.7s ease'}}>
      <h1 className="text-2xl text-pink-600 uppercase tracking-widest mb-2 opacity-0 animate-fadeIn ml-8 md:ml-0 text-shadow-lg dark:text-shadow-gray-900/50">.: Jason Cooper :.</h1>
      <Navbar />

      <div className="absolute top-[1vw] right-[1vw]">
        <ThemeToggle />
      </div>
    </header>
  );
}
