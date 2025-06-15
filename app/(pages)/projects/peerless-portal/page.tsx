import Image from "next/image";

export default function PeerlessPortalPage() {
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap gap-10 mb-8">
        <div className="w-full lg:w-2/3">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/peerless-portal-home.png"
              alt="Peerless Portal"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <h1 className="font-heading font-semibold text-2xl mb-4">Peerless Portal</h1>

          <p>I led the design and development of the Peerless Portal, a customer-facing order automation platform. I started with a blank canvas and had the platform deployed in production with customers in 3 months.</p>

          <p>Adoption increased from there. In the first year, Peerless Network required that all but the largest enterprise customers be serviced through the Peerless Portal. My team grew to 5 team members dedicated to the Portal project.</p>
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-10 mb-4">
        <div className="w-full lg:w-1/2 flex flex-wrap md:flex-nowrap gap-6 mb-4">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/peerless-portal-flowchart.png"
                alt="Peerless Portal"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <p>I wore the hats of team lead, designer, and developer. I worked closely with the voice product team, the customer account management leadership, and technical support to design features to support business units across the company.</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-wrap md:flex-nowrap gap-6 mb-4">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/peerless-portal-chart.png"
                alt="Peerless Portal"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <p>Over the years, the Peerless Portal drastically increased its scope - upstream with quote-building and integration with Salesforce, and downstream with product usage reporting and support ticket management. Though Peerless Network was purchased by Infobip, a much larger, international company with its own platform, the Peerless Portal remains in use today.</p>
          </div>
        </div>
      </div>
    </>
  );
}