import Image from "next/image";

export default function VeritivLeaderLinkPage() {
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap gap-x-8 gap-y-4 mb-8">
        <div className="w-full lg:w-1/2 overflow-hidden">
          <div className="relative rounded-lg aspect-video overflow-hidden">
            <Image
              src="/leaderlink-quick-links.jpg"
              alt="Veritiv LeaderLink"
              width={1600}
              height={981}
              priority
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h1 className="font-heading font-semibold text-2xl mb-4">Veritiv LeaderLink</h1>

          <p>During my tenure at Dynamic Marketing Systems (now "Truelio"), I designed several applications for Veritiv (formerly Unisource), a multi-billion-dollar paper, packaging, and facility supplies distributor..</p>

          <p>LeaderLink was an intranet application that provided leadership resources and news to Veritiv management. I worked with Veritiv to establish requirements and processes. Then I designed the UI and coded it, and managed a team of .NET developers to build the application.</p>
        </div>
      </div>
    </>
  );
}