'use client';

import { useContactModal } from '@/context/GlobalContext';
import { ChevronLeft } from '@mui/icons-material';
import Image from 'next/image';

export default function ContactModal() {
  const { isVisible, hideContactModal } = useContactModal();

  if (!isVisible) return null;

  return (
    <div className="fixed h-screen w-screen top-0 left-0 z-50 flex md:items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-sm h-[640px]">
        <div className="relative text-white font-sans tracking-wide bg-gray-950 shadow rounded-4xl border-8 border-black h-full overflow-hidden">
            <div className="grow flex flex-col items-center justify-center p-6 bg-gray-600 relative">
              <Image
                src="/jason-cooper.jpg"
                alt="Jason Cooper"
                width={800}
                height={790}
                className="max-w-[240px] aspect-square rounded-full shadow-sm"
              />

              <h4 className="text-3xl my-4 font-sans!">Jason Cooper</h4>

              <div className="flex justify-center space-x-1">
                <a
                  href="tel:+17062552417"
                  className="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors hover:cursor-pointer"
                >
                  call
                </a>

                <a
                  href="mailto:jasonpaxtoncooper@gmail.com"
                  className="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors hover:cursor-pointer"
                >
                  email
                </a>

                <a
                  href="https://maps.app.goo.gl/MyHhddCBj1Tis7NK6"
                  target="_blank"
                  className="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors hover:cursor-pointer"
                >
                  map
                </a>
              </div>

              <button
                  onClick={hideContactModal}
                  className="absolute text-sm top-3 left-3 bg-white/20 text-white p-1 rounded-full hover:bg-white/30 transition-colors hover:cursor-pointer"
                >
                  <ChevronLeft fontSize="small" />
              </button>
            </div>

            <div>
              <div className="bg-gray-800 rounded-md px-4 py-2 w-[94%] mx-auto my-[3%]">
                <div className="text-sm">
                  phone
                </div>

                <a href="tel:+17062552417" className="text-sky-400">
                  +1 (706) 255-2417
                </a>
              </div>

              <div className="bg-gray-800 rounded-md px-4 py-2 w-[94%] mx-auto my-[3%]">
                <div className="text-sm">
                  email
                </div>

                <a href="mailto:jasonpaxtoncooper@gmail.com" className="text-sky-400">
                  jasonpaxtoncooper@gmail.com
                </a>
              </div>

              <div className="bg-gray-800 rounded-md px-4 py-2 w-[94%] mx-auto my-[3%]">
                <div className="text-sm">
                  location
                </div>

                <a href="https://maps.app.goo.gl/MyHhddCBj1Tis7NK6" className="text-sky-400" target="_blank">
                  Powder Springs, GA, USA
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
