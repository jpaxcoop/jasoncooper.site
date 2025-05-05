'use client';

import Link from "next/link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function SkillsTechTab() {
  const scrollToSection = (anchorId: string) => {
    const section = document.getElementById(anchorId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="flex px-4 mt-8 flex-wrap">
        <button
          onClick={() => scrollToSection('application-design')}
          className="text-primary border py-1 px-3 hover:text-pink-600 rounded-md mr-2 mb-2"
        >
          Application Design
        </button>

        <button
          onClick={() => scrollToSection('prototyping')}
          className="text-primary border py-1 px-3 hover:text-pink-600 rounded-md mr-2 mb-2"
        >
          Prototyping
        </button>

        <button
          onClick={() => scrollToSection('ux-and-ui-design')}
          className="text-primary border py-1 px-3 hover:text-pink-600 rounded-md mr-2 mb-2"
        >
          UX and UI Design
        </button>

        <button
          onClick={() => scrollToSection('application-development')}
          className="text-primary border py-1 px-3 hover:text-pink-600 rounded-md mr-2 mb-2"
        >
          Application Development
        </button>

        <button
          onClick={() => scrollToSection('artificial-intelligence')}
          className="text-primary border py-1 px-3 hover:text-pink-600 rounded-md mr-2 mb-2"
        >
          Artificial Intelligence
        </button>

        <button
          onClick={() => scrollToSection('languages')}
          className="text-primary border py-1 px-3 hover:text-pink-600 rounded-md mr-2 mb-2"
        >
          Languages
        </button>

        <button
          onClick={() => scrollToSection('tools')}
          className="text-primary border py-1 px-3 hover:text-pink-600 rounded-md mr-2 mb-2"
        >
          Tools
        </button>
      </div>

      <div id="application-design" className="flex mt-8 mb-4">
        <div className="w-3/4 pt-0 p-4">
          <h4 className="font-heading text-[18] font-semibold">Application Design</h4>

          <p className="mb-4">My journey into application design began over 15 years ago when I was hired to design a web-based print ordering application. The print side of the business did not last, but the application design did! I've designed dozens of B2B applications and websites, learning UX and UI best practices along the way.</p>

          <p className="mb-2">I often work directly with stakeholders to collect requirements and learn about the systems and processes the new application will integrate with. But it's always helpful to collaborate with a product manager, who can bring a great deal of content matter expertise.</p>

          <button
            onClick={scrollToTop}
            className="text-primary text-sm hover:text-pink-600"
          >
            Return to top
          </button>
        </div>

        <div className="w-1/4 pt-0 p-4">
          <div className="mt-6 pl-4 border-l">
            <h4 className="font-heading text-[14] font-medium uppercase mt-6 mb-3">Projects</h4>

            <div className="mb-3">
              <Link href="/projects/peerless-portal" className="text-primary hover:text-pink-600" target="_blank">
                Peerless Portal
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>

            <div className="mb-3">
              <Link href="/projects/alcon-toolbox" className="text-primary hover:text-pink-600" target="_blank">
                Alcon Toolbox
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>

            <div className="mb-3">
              <Link href="/projects/veritiv-leaderlink" className="text-primary hover:text-pink-600" target="_blank">
                Veritiv LeaderLink
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>

            <div className="mb-3">
              <Link href="/projects/aadvantage-cash" className="text-primary hover:text-pink-600" target="_blank">
                AAdvantage Cash
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="prototyping" className="flex mb-4">
        <div className="w-3/4 pt-0 p-4">
          <h4 className="font-heading text-[18] font-semibold">Prototyping</h4>

          <p className="mb-2">I create prototypes to test early ideas and discover obstacles. Originally my prototypes were sketches done in <strong>Photoshop</strong>, then they graduated to <strong>HTML</strong> static files. Today, I can quickly spin up operational prototypes with a <strong>JavaScript</strong> framework and database. I've used <strong>Figma</strong> to present and share ideas, but I find it an unnecessary step when I can code something just as quickly.</p>

          <button
            onClick={scrollToTop}
            className="text-primary text-sm hover:text-pink-600"
          >
            Return to top
          </button>
        </div>

        <div className="w-1/4 pt-0 p-4">
          <div className="mt-6 pl-4 border-l">
            <h4 className="font-heading text-[14] font-medium uppercase mb-3">Projects</h4>

            <div className="mb-3">
              <Link href="/projects/peerless-portal" className="text-primary hover:text-pink-600" target="_blank">
                Peerless Portal
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>

            <div className="mb-3">
              <Link href="/projects/alcon-toolbox" className="text-primary hover:text-pink-600" target="_blank">
                Alcon Toolbox
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>

            <div className="mb-3">
              <Link href="/projects/veritiv-leaderlink" className="text-primary hover:text-pink-600" target="_blank">
                Veritiv LeaderLink
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>

            <div className="mb-3">
              <Link href="/projects/aadvantage-cash" className="text-primary hover:text-pink-600" target="_blank">
                AAdvantage Cash
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="ux-and-ui-design" className="flex mb-4">
        <div className="w-3/4 pt-0 p-4">
          <h4 className="font-heading text-[18] font-semibold">UX and UI Design</h4>

          <p className="mb-4">I collect as much information about users as I can before designing the user experience. In my experience, much of it is anecdotal and the only hard data comes from CRM platforms or legacy applications. I would enjoy the chance to conduct user research, but to this point budget and time constraints have not allowed for it.</p>

          <p className="mb-4">My work in the B2B space has taught me the ideal user experience is intuitive, fast, and risk-free (meaning the user can always go back, undo, or delete). The user interface is informed by that philosophy - the process and controls should be so obvious that the need for instruction or documentation is almost redundant (but should stil be present!).</p>

          <p className="mb-2">With my marketing background, I have an understanding (and appreciation) for brand identity and standards. I have a lot of experience applying a brand to all sorts of assets, including applications. I'm careful to make sure the UI design represents the brand without interfering with the connection between the user and the application.</p>

          <button
            onClick={scrollToTop}
            className="text-primary text-sm hover:text-pink-600"
          >
            Return to top
          </button>
        </div>

        <div className="w-1/4 pt-0 p-4">
          <div className="mt-6 pl-4 border-l">
            <h4 className="font-heading text-[14] font-medium uppercase mb-3">Projects</h4>

            <div className="mb-3">
              <Link href="/projects/peerless-portal" className="text-primary hover:text-pink-600" target="_blank">
                Peerless Portal
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>

            <div className="mb-3">
              <Link href="/projects/alcon-toolbox" className="text-primary hover:text-pink-600" target="_blank">
                Alcon Toolbox
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>

            <div className="mb-3">
              <Link href="/projects/veritiv-leaderlink" className="text-primary hover:text-pink-600" target="_blank">
                Veritiv LeaderLink
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>

            <div className="mb-3">
              <Link href="/projects/aadvantage-cash" className="text-primary hover:text-pink-600" target="_blank">
                AAdvantage Cash
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="application-development" className="flex mb-4">
        <div className="w-3/4 pt-0 p-4">
          <h4 className="font-heading text-[18] font-semibold">Application Development</h4>

          <p className="mb-4">Today I am a <strong>JavaScript</strong> developer. For the last year or so, I've been focusing on <strong>React, especially with the Next.js framework</strong>. Prior to that, I worked with <strong>Vue.js and the Laravel PHP framework</strong> for several years. And prior to that, I was a big fan of the <strong>Bootstrap frontend framework with jQuery</strong>.</p>

          <p className="mb-2">As a team leader, I'm experienced in version control and Continuous Integration/Continuous Delivery. I've worked with <strong>GitHub Actions paired with Laravel Envoyer</strong> for deployment and <strong>BitBucket with Jenkins</strong>. For JavaScript tests I've worked with <strong>Cypress and Jest</strong>. For PHP I write <strong>phpunit</strong> tests.</p>

          <button
            onClick={scrollToTop}
            className="text-primary text-sm hover:text-pink-600"
          >
            Return to top
          </button>
        </div>

        <div className="w-1/4 pt-0 p-4">
          <div className="mt-6 pl-4 border-l">
            <h4 className="font-heading text-[14] font-medium uppercase mt-6 mb-3">Projects</h4>

            <div className="mb-3">
              <Link href="/projects/peerless-portal" className="text-primary hover:text-pink-600" target="_blank">
                Peerless Portal
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>

            <div className="mb-3">
              <Link href="/projects/alcon-toolbox" className="text-primary hover:text-pink-600" target="_blank">
                Alcon Toolbox
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>

            <div className="mb-3">
              <Link href="/projects/veritiv-leaderlink" className="text-primary hover:text-pink-600" target="_blank">
                Veritiv LeaderLink
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>

            <div className="mb-3">
              <Link href="/projects/aadvantage-cash" className="text-primary hover:text-pink-600" target="_blank">
                AAdvantage Cash
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="artificial-intelligence" className="flex mb-4">
        <div className="w-3/4 pt-0 p-4">
          <h4 className="font-heading text-[18] font-semibold">Artificial Intelligence</h4>

          <p className="mb-4">I've come to an obvious realization: AI is the future (if not the present) of application development. An effective application developer uses an AI coding assistant constantly, and only writes code themselves to tweak, adjust, or test. I've spent the last several months learning the coding language of the future: AI prompts that deliver specific, accurate code. To this end I've used <strong>Copilot in VS Code</strong>, the <strong>Cursor IDE</strong>, and of course <strong>ChatGPT</strong>.</p>

          <p className="mb-2">I've also experimented with the <strong>OpenAI API</strong> and <strong>AI image generation</strong>.</p>

          <button
            onClick={scrollToTop}
            className="text-primary text-sm hover:text-pink-600"
          >
            Return to top
          </button>
        </div>

        <div className="w-1/4 pt-0 p-4">
          <div className="mt-6 pl-4 border-l">
            <h4 className="font-heading text-[14] font-medium uppercase mt-6 mb-3">Projects</h4>

            <div className="mb-3">
              <Link href="/projects/peerless-portal" className="text-primary hover:text-pink-600" target="_blank">
                Peerless Portal
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>

            <div className="mb-3">
              <Link href="/projects/alcon-toolbox" className="text-primary hover:text-pink-600" target="_blank">
                Alcon Toolbox
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>

            <div className="mb-3">
              <Link href="/projects/veritiv-leaderlink" className="text-primary hover:text-pink-600" target="_blank">
                Veritiv LeaderLink
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>

            <div className="mb-3">
              <Link href="/projects/aadvantage-cash" className="text-primary hover:text-pink-600" target="_blank">
                AAdvantage Cash
                <ChevronRightIcon fontSize="small" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="languages" className="mb-4">
        <h4 className="font-heading text-[18] font-semibold px-4">Languages and Frameworks</h4>

        <ul className="px-4 columns-4 mb-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>Vue</li>
          <li>React</li>
          <li>jQuery</li>
          <li>Laravel</li>
          <li>MySQL</li>
          <li>Git</li>
          <li>Tailwind</li>
          <li>Bootstrap</li>
        </ul>

        <button
          onClick={scrollToTop}
          className="text-primary text-sm hover:text-pink-600 px-4"
        >
          Return to top
        </button>
      </div>

      <div id="tools" className="mb-4">
        <h4 className="font-heading text-[18] font-semibold px-4">Tools</h4>

        <ul className="px-4 columns-4 mb-2">
          <li>Visual Studio Code</li>
          <li>Cursor IDE</li>
          <li>ChatGPT</li>
          <li>Adobe Creative Suite</li>
          <li>Inkscape</li>
          <li>GIMP</li>
          <li>AWS</li>
          <li>GitHub</li>
        </ul>

        <button
          onClick={scrollToTop}
          className="text-primary text-sm hover:text-pink-600 px-4"
        >
          Return to top
        </button>
      </div>
    </>
  );
}
  