import Link from "next/link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function ExperienceTab() {
  return (
    <div id="Experience" className="scroll-mt-28">
      <h2 className="font-heading font-semibold text-2xl mb-8">Experience</h2>

      <div className="flex flex-wrap md:flex-nowrap gap-10 ">
        <div className="w-full md:w-3/4">
          <div className="mb-8">
            <h4 className="font-heading text-lg font-semibold">Senior UI Designer / Developer, Peerless Network</h4>
            <div className="mb-4 text-gray-400"><em>Sep 2018 - Apr 2025 · 6 yrs 8 mos</em></div>

            <p className="mb-4">I led the design and development of the Peerless Portal, a customer-facing order automation platform. I started with a blank canvas and had the platform deployed in production with customers in 3 months.</p>

            <p className="mb-4">Adoption increased from there. In the first year, Peerless Network required that all but the largest enterprise customers be serviced through the Peerless Portal. My team grew to 5 team members dedicated to the Portal project.</p>

            <p className="mb-4">I wore the hats of team lead, designer, and developer. I worked closely with the voice product team, the customer account management leadership, and technical support to design features to support business units across the company.</p>

            <p>Over the years, the Peerless Portal drastically increased its scope - upstream with quote-building and integration with Salesforce, and downstream with product usage reporting and support ticket management. Though Peerless Network was purchased by Infobip, a much larger, international company with its own platform, the Peerless Portal remains in use today.</p>
          </div>

          <div className="mb-8">
            <h4 className="font-heading text-lg font-semibold">Marketing Automation & Technology Manager, PGi</h4>
            <div className="mb-4 text-gray-400"><em>Jan 2016 - Sep 2018 · 2 yrs 9 mos</em></div>

            <p className="mb-4">I was a marketeer. The swashbucklers of the marketing industry, marketeers operate on the uncharted edges of technology, embarking on campaigns long and short, bringing home ROI bounty.</p>

            <p className="mb-4">I managed PGi's marketing technology, including marketing automation platforms (primarily Eloqua, but also Hubspot and Marketo) and content management systems (primarily WordPress). I also extend our marketing technology capabilities through heavy JavaScript and PHP development, and leveraging APIs. </p>

            <p className="mb-4">Extended capabilities include integration between platforms (marketing automation, CRM, online chat, email, reporting, WordPress, webcasting, video), realtime asset deployment through API calls, web and email personalization, interactive web content, custom reporting dashboards, and custom partner data sharing portals with OAuth-managed access.</p>

            <p className="mb-4">I rely on front-end frameworks like Bootstrap, Foundation, and WPBakery Page Builder to rapidly develop branded, responsive, interactive, usable, and aesthetically pleasing front ends to these capabilities.</p>

            <p>Finally, I make sure the capabilities are available to other team members by developing easy-to-use interfaces and providing clear, illustrated, web-based documentation.</p>
          </div>

          <div className="mb-8">
            <h4 className="font-heading text-lg font-semibold">Systems Development, Dynamic Marketing Systems (now Truelio)</h4>
            <div className="mb-4 text-gray-400"><em>May 2004 - Oct 2015 · 11 yrs 6 mos</em></div>

            <p className="mb-4">For more than 10 years, I worked at the B2B marketing services firm Dynamic Marketing Systems. I started as a designer and implementer of print ordering and automation systems. I grew into an automator of all kinds of marketing - from print to email nurturing to sales support.</p>
              
            <p className="mb-4">I also became a "utility player", a position I would assume throughout my career. I started managing our print ordering system, a project that required database management and HTML and CSS development. Then I managed all kinds of projects, which included helping designing business processes for our fledgling company. My day could include pitching business to clients, creative-directing a website, copy-writing and coding an HTML email, and preparing traffic reports with analysis.</p>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <Link href="https://www.linkedin.com/in/jasonpaxtoncooper" target="_blank" className="block mb-4 border border-gray-400 rounded-lg p-2 hover:text-white">
            More on LinkedIn
            <ChevronRightIcon fontSize="small" />
          </Link>
        </div>
      </div>
    </div>
  );
}