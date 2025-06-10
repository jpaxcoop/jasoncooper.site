'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";
import { thumbs } from "@/data/thumb";
import { handleThumbClick } from "@/utlis/thumb-utils";

export default function SkillsTechTab() {
  const router = useRouter();

  const projects = thumbs;

  const applicationDesignProjects = [
    projects.peerlessPortal,
    projects.veritivLeaderLink,
    projects.paxton,
  ];

  const prototypingProjects = [
    projects.hal9000,
    projects.peerlessPortal,
  ];

  const uxAndUIDesignProjects = [
    projects.peerlessPortal,
    projects.pgi,
    projects.hopeIndustrialSystems,
    projects.streamlineWealth,
    projects.paxton,
    projects.veritivLeaderLink,
  ];

  const artificialIntelligenceProjects = [
    projects.hal9000,
  ];

  const applicationDevelopmentProjects = [
    projects.peerlessPortal,
    projects.pgi,
    projects.hopeIndustrialSystems,
  ];

  const scrollToSection = (anchorId: string) => {
    const section = document.getElementById(anchorId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="Skills & Tech" className="pb-8 mb-4 border-b border-dashed scroll-mt-28">
      <h2 className="font-heading font-semibold text-2xl mb-4">Skills & Tech</h2>

      <div className="flex">
          <div className="w-full md:w-3/4">
            <div className="flex flex-wrap mb-4">
              <button
                onClick={() => scrollToSection('application-design')}
                className="border-gray-400 border-1 py-1 px-3 hover:text-white hover:cursor-pointer rounded-md mr-2 mb-2"
              >
                Application Design
              </button>

              <button
                onClick={() => scrollToSection('prototyping')}
                className="border-gray-400 border-1 py-1 px-3 hover:text-white hover:cursor-pointer rounded-md mr-2 mb-2"
              >
                Prototyping
              </button>

              <button
                onClick={() => scrollToSection('ux-and-ui-design')}
                className="border-gray-400 border-1 py-1 px-3 hover:text-white hover:cursor-pointer rounded-md mr-2 mb-2"
              >
                UX and UI Design
              </button>

              <button
                onClick={() => scrollToSection('application-development')}
                className="border-gray-400 border-1 py-1 px-3 hover:text-white hover:cursor-pointer rounded-md mr-2 mb-2"
              >
                Application Development
              </button>

              <button
                onClick={() => scrollToSection('artificial-intelligence')}
                className="border-gray-400 border-1 py-1 px-3 hover:text-white hover:cursor-pointer rounded-md mr-2 mb-2"
              >
                Artificial Intelligence
              </button>

              <button
                onClick={() => scrollToSection('languages')}
                className="border-gray-400 border-1 py-1 px-3 hover:text-white hover:cursor-pointer rounded-md mr-2 mb-2"
              >
                Languages
              </button>

              <button
                onClick={() => scrollToSection('tools')}
                className="border-gray-400 border-1 py-1 px-3 hover:text-white hover:cursor-pointer rounded-md mr-2 mb-2"
              >
                Tools
              </button>
            </div>
          </div>
          <div className="hidden md:block w-1/4">
          </div>
      </div>

      <div id="application-design" className="mb-6">
        <h4 className="font-heading text-lg font-semibold mb-2">Application Design</h4>
        
        <div className="flex flex-wrap md:flex-nowrap gap-10">
          <div className="w-full md:w-3/4">
            <p className="mb-4">My journey into application design began over 15 years ago when I was hired to design a web-based print ordering application. The print side of the business did not last, but the application design did! I've designed dozens of B2B applications and websites, learning UX and UI best practices along the way.</p>

            <p className="mb-2">I often work directly with stakeholders to collect requirements and learn about the systems and processes the new application will integrate with. But it's always helpful to collaborate with a product manager, who can bring a great deal of content matter expertise.</p>

            <button
              onClick={() => scrollToSection('Skills & Tech')}
              className="text-gray-400 hover:text-pink-600"
            >
              Return to Skills
            </button>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="font-heading text-sm tracking-wider font-medium uppercase mb-3">Projects</h4>

            <div className="flex flex-wrap justify-between">
              {applicationDesignProjects.map((project, index) => {
                return (
                  <div key={index} className="w-[46%] mb-2">
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-2">
                      <Image
                        src={project.imgSrc}
                        alt={project.title}
                        fill
                        className="object-cover hover:border-2 border-pink-500 hover:cursor-pointer"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        title={project.title}
                        onClick={() => handleThumbClick(project, router)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div id="prototyping" className="mb-6">
        <h4 className="font-heading text-lg font-semibold mb-2">Prototyping</h4>

        <div className="flex flex-wrap md:flex-nowrap gap-10">
          <div className="w-full md:w-3/4">

            <p className="mb-2">I create prototypes to test early ideas and discover obstacles. Originally my prototypes were sketches done in <strong>Photoshop</strong>, then they graduated to <strong>HTML</strong> static files. Today, I can quickly spin up operational prototypes with a <strong>JavaScript</strong> framework and database. I've used <strong>Figma</strong> to present and share ideas, but I find it an unnecessary step when I can code something just as quickly.</p>

            <button
              onClick={() => scrollToSection('Skills & Tech')}
              className="text-gray-400 hover:text-pink-600"
            >
              Return to Skills
            </button>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="font-heading text-sm tracking-wide font-medium uppercase mb-3">Projects</h4>

            <div className="flex flex-wrap justify-between">
              {prototypingProjects.map((project, index) => {
                return (
                  <div key={index} className="w-[46%] mb-2">
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-2">
                      <Image
                        src={project.imgSrc}
                        alt={project.title}
                        fill
                        className="object-cover hover:border-2 border-pink-500 hover:cursor-pointer"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        title={project.title}
                        onClick={() => handleThumbClick(project, router)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div id="ux-and-ui-design" className="mb-6">
        <h4 className="font-heading text-lg font-semibold mb-2">UX and UI Design</h4>

        <div className="flex flex-wrap md:flex-nowrap gap-10">
          <div className="w-full md:w-3/4">
            <p className="mb-4">I collect as much information about users as I can before designing the user experience. In my experience, much of it is anecdotal and the only hard data comes from CRM platforms or legacy applications. I would enjoy the chance to conduct user research, but to this point budget and time constraints have not allowed for it.</p>

            <p className="mb-4">My work in the B2B space has taught me the ideal user experience is intuitive, fast, and risk-free (meaning the user can always go back, undo, or delete). The user interface is informed by that philosophy - the process and controls should be so obvious that the need for instruction or documentation is almost redundant (but should stil be present!).</p>

            <p className="mb-2">With my marketing background, I have an understanding (and appreciation) for brand identity and standards. I have a lot of experience applying a brand to all sorts of assets, including applications. I'm careful to make sure the UI design represents the brand without interfering with the connection between the user and the application.</p>

            <button
              onClick={() => scrollToSection('Skills & Tech')}
              className="text-gray-400 hover:text-pink-600"
            >
              Return to Skills
            </button>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="font-heading text-sm tracking-wide font-medium uppercase mb-3">Projects</h4>

            <div className="flex flex-wrap justify-between">
              {uxAndUIDesignProjects.map((project, index) => {
                return (
                  <div key={index} className="w-[46%] mb-2">
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-2">
                      <Image
                        src={project.imgSrc}
                        alt={project.title}
                        fill
                        className={`object-cover border-pink-500 ${project.linkHref ? 'hover:cursor-pointer hover:border-2' : ''}`}
                        sizes="(max-width: 768px) 50vw, 25vw"
                        title={project.title}
                        onClick={() => handleThumbClick(project, router)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div id="application-development" className="mb-6">
        <h4 className="font-heading text-lg font-semibold mb-2">Application Development</h4>

        <div className="flex flex-wrap md:flex-nowrap gap-10">
          <div className="w-full md:w-3/4">
            <p className="mb-4">Today I am a <strong>JavaScript</strong> developer. For the last year or so, I've been focusing on <strong>React, especially with the Next.js framework</strong>. Prior to that, I worked with <strong>Vue.js and the Laravel PHP framework</strong> for several years. And prior to that, I was a big fan of the <strong>Bootstrap frontend framework with jQuery</strong>.</p>

            <p className="mb-2">As a team leader, I'm experienced in version control and Continuous Integration/Continuous Delivery. I've worked with <strong>GitHub Actions paired with Laravel Envoyer</strong> for deployment and <strong>BitBucket with Jenkins</strong>. For JavaScript tests I've worked with <strong>Cypress and Jest</strong>. For PHP I write <strong>phpunit</strong> tests.</p>

            <button
              onClick={() => scrollToSection('Skills & Tech')}
              className="text-gray-400 hover:text-pink-600"
            >
              Return to Skills
            </button>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="font-heading text-sm tracking-wide font-medium uppercase mb-3">Projects</h4>

            <div className="flex flex-wrap justify-between">
              {applicationDevelopmentProjects.map((project, index) => {
                return (
                  <div key={index} className="w-[46%] mb-2">
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-2">
                      <Image
                        src={project.imgSrc}
                        alt={project.title}
                        fill
                        className={`object-cover border-pink-500 ${project.linkHref ? 'hover:cursor-pointer hover:border-2' : ''}`}
                        sizes="(max-width: 768px) 50vw, 25vw"
                        title={project.title}
                        onClick={() => handleThumbClick(project, router)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div id="artificial-intelligence" className="mb-6">
        <h4 className="font-heading text-lg font-semibold mb-2">Artificial Intelligence</h4>

        <div className="flex flex-wrap md:flex-nowrap gap-10">
          <div className="w-full md:w-3/4">
            <p className="mb-4">I've come to an obvious realization: AI is the future (if not the present) of application development. An effective application developer uses an AI coding assistant constantly, and only writes code themselves to tweak, adjust, or test. I've spent the last several months learning the coding language of the future: AI prompts that deliver specific, accurate code. To this end I've used <strong>Copilot in VS Code</strong>, the <strong>Cursor IDE</strong>, and of course <strong>ChatGPT</strong>.</p>

            <p className="mb-2">I've experimented with the <strong>OpenAI API</strong> (see the Role Matcher on this site) and <strong>AI image generation</strong> My recent <a href="/projects/hal9000" className="text-pink-500">HAL9000 project</a> was a deep dive into voice model training, vocoder optimization, and working with LLMs.</p>

            <button
              onClick={() => scrollToSection('Skills & Tech')}
              className="text-gray-400 hover:text-pink-600"
            >
              Return to Skills
            </button>
          </div>

          <div className="w-full md:w-1/4">
            <h4 className="font-heading text-sm tracking-wide font-medium uppercase mb-3">Projects</h4>

            <div className="flex flex-wrap justify-between">
              {artificialIntelligenceProjects.map((project, index) => {
                return (
                  <div key={index} className="w-[46%] mb-2">
                    <div className="relative aspect-square rounded-lg overflow-hidden mb-2">
                      <Image
                        src={project.imgSrc}
                        alt={project.title}
                        fill
                        className={`object-cover border-pink-500 ${project.linkHref ? 'hover:cursor-pointer hover:border-2' : ''}`}
                        sizes="(max-width: 768px) 50vw, 25vw"
                        title={project.title}
                        onClick={() => handleThumbClick(project, router)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div id="languages" className="mb-6">
        <h4 className="font-heading text-lg font-semibold mb-2">Languages and Frameworks</h4>

        <ul className="columns-4 mb-2 gap-4">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Typescript</li>
          <li>PHP</li>
          <li>Vue</li>
          <li>React</li>
          <li>Next.JS</li>
          <li>jQuery</li>
          <li>Laravel</li>
          <li>MySQL</li>
          <li>Git</li>
          <li>Tailwind</li>
          <li>Bootstrap</li>
        </ul>

        <button
          onClick={() => scrollToSection('Skills & Tech')}
          className="text-gray-400 hover:text-pink-600"
        >
          Return to Skills
        </button>
      </div>

      <div id="tools" className="mb-6">
        <h4 className="font-heading text-lg font-semibold mb-2">Tools</h4>

        <ul className="columns-4 mb-2 gap-4">
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
          onClick={() => scrollToSection('Skills & Tech')}
          className="text-gray-400 hover:text-pink-600"
        >
          Return to Skills
        </button>
      </div>
    </div>
  );
}
  