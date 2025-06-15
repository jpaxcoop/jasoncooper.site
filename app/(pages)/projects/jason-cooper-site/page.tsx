import Image from "next/image";

export default function JasonCooperSitePage() {
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap gap-10 mb-8">
        <div className="w-full lg:w-2/3">
          <div className="relative rounded-lg overflow-hidden border-1 border-gray-600">
            <Image
              src="/jason-cooper-site.png"
              alt="jasoncooper.site"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <h1 className="font-heading font-semibold text-2xl mb-4">jasoncooper.site</h1>

          <p>They say that looking for a job <em>is</em> a job. I can attest to the truth of that statement. I've probably put in about 100 hours concepting, designing, and developing my portfolio website.</p>

          <p>But it's been a lot of fun, like most of my jobs. I built this website with Next.js, a framework I've just started using but am already enjoying. And I added some neat features I dreamed up, each of which could be seen as a little educational "side quest".</p>

          <p>Here's a quick list of the features with their technology:</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        <div className="mb-4">
          <h2 className="font-heading font-semibold text-lg mb-2">Homepage</h2>
          <p>I illustrated the homepage with Inkscape, an open source illustration program that works with XML and produces SVGs. It was my first Inkscape project, and I'm very happy with it.</p>
        </div>

        <div className="mb-4">
          <h2 className="font-heading font-semibold text-lg mb-2">Role Matcher</h2>
          <p>This was my first AI project - I used the OpenAI API to accept a prompt request and then I return the response to the Role Matcher UI. I was surprised accessible Open AI was via API. I actually spent more time on the UI then on how it worked.</p>
        </div>

        <div className="mb-4">
          <h2 className="font-heading font-semibold text-lg mb-2">Resumé</h2>
          <p>I created a traditional resumé before I built this website. The first time I need to sync the two after updating one, I realized I needed to use my website to generate the resumé PDF. Enter <span className="font-mono">react-pdf</span>. This was my first time using the library, and it was yet another tool that I enjoyed.</p>
        </div>

        <div className="mb-4">
          <h2 className="font-heading font-semibold text-lg mb-2">About You</h2>
          <p>The idea for the "About You" page was to leverage information about the visitor to affect the user experience. I'm not going to require visitors to create a user profile, so the browser request information is what I had to work with. I used an API for geolocating IP addresses and another API for weather. Then I used some React and Tailwind jazz to put together the visual.</p>
        </div>

        <div className="mb-4">
          <h2 className="font-heading font-semibold text-lg mb-2">Deployment</h2>
          <p>I used AWS to deploy the site, specifically its "Amplify" service. It's hooked to the project's GitHub repository so merges to the main branch deploy automatically. If I wanted to sink even more time into this, I would set up some GitHub actions to check code style and do some linting. Oh, and I suppose I should write some tests ;)</p>
        </div>
      </div>
    </>
  );
}