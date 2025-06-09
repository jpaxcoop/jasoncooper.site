import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 text-center py-4 bg-linear-to-b from-gray-800 to-t via gray-800">
      <h1 className="text-2xl text-pink-500 uppercase tracking-widest mb-2 opacity-0 animate-fadeIn ml-8 md:ml-0 text-shadow-lg text-shadow-gray-900">.: Jason Cooper :.</h1>
      <Navbar />
    </header>
  );
}
