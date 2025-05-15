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
      </div>
    </>
  );
}
