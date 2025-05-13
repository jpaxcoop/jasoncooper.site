import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <div className="mx-auto max-w-4xl p-8">
        <Image
          src="/desk.svg"
          alt=""
          loading="lazy"
          width={1920}
          height={1080}
          layout="responsive"
        />
        {/* <div className="mx-auto transform -translate-x-1/2 -translate-y-0 w-18 h-8 scale-x-600 rounded-full bg-gray-800/75 blur-md pointer-events-none"></div> */}
      </div>
    </>
  );
}
