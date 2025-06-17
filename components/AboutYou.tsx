import dynamic from "next/dynamic";
import SkyAndGround from "./SkyAndGround";
import TimeDisplay from "./TimeDisplay";
import { Visitor } from "@/types/about-you";

const MapView = dynamic(() => import('@/components/MapView'), {
  ssr: false,
});

type Props = {
  data: Visitor;
};
  
export default function AboutYouData({ data }: Props) {
return (
  <>
  <div className="relative">
    <div className="max-w-full xl:max-w-7xl mx-auto p-4 md:px-8 opacity-0 animate-fadeIn">
      <div className="flex flex-wrap md:flex-nowrap justify-between">
        <div className="w-full md:w-sm text-white text-shadow-lg">
          <div className="bg-black/25 rounded-lg px-4 p-2 mb-4">
            <div className="flex justify-between gap-4">
              <div className="font-bold tracking-wide">IP Address</div>
              <div>{data.ip}</div>
            </div>

            <div className="flex justify-between gap-4">
              <div className="font-bold tracking-wide">Browser</div>
              <div>{data.browser}</div>
            </div>

            <div className="flex justify-between gap-4">
              <div className="font-bold tracking-wide">OS</div>
              <div>{data.os}</div>
            </div>
          </div>

          <div className="bg-black/25 rounded-lg px-4 p-2 mb-4">
            <div className="text-center">
              {data.city}, {data.region}
            </div>
          </div>

          <div className="bg-black/25 rounded-lg overflow-hidden mb-4">
            <MapView lat={data.latitude} lng={data.longitude} height={240} zoom={10} />
          </div>
        </div>

        <div className="w-full text-center md:text-right text-white text-shadow-lg">
          <div className="text-3xl">
            {Math.round(data.weather?.temp ?? 0)}&deg; F / {data.weather?.main}
          </div>

          <div className="text-lg">
            <TimeDisplay timezone={data.timezone ?? ''} />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="absolute top-0 w-full h-[80vh] z-[-10]">
    <SkyAndGround data={data}></SkyAndGround>
  </div>
  </>
);
}
  