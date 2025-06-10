import Link from "next/link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function IntroductionTab() {
  return (
    <>
      <div id="Introduction" className="flex flex-wrap md:flex-nowrap gap-10 pb-8 mb-4 border-b border-dashed scroll-mt-28">
        <div className="w-full md:w-3/4">
          <h2 className="font-heading font-semibold text-2xl mb-2">Hello! I'm a designer and developer looking for my next passion project.</h2>

          <p className="mb-4">
            Do you have a web application that you need to constantly enhance with new features for your customers? Or maybe you have a vision where you're still working out the details? I can help in either case.
          </p>

          <p className="mb-4">
            I can bring a lot of value to your organization: instead of waiting on detailed instructions or exact specifications, I can accelerate the development process by helping you create the specs, or by creating a proof-of-concept until exact specs are ready.
          </p>

          <p className="mb-4">
            Once we're up and running, I'm an effective leader who can manage projects and guide a team efficiently. And because I'm not a specialist, I can pitch in wherever it's needed: development, design, operations, analytics, presentations.
          </p>

          <p className="mb-4">
            Please reach out to me and I'm happy to share my thoughts and experience, and listen to yours.
          </p>
        </div>

        <div className="w-full md:w-1/4">
          <Link href="mailto:jasonpaxtoncooper@gmail.com" className="block mb-4 border border-gray-400 rounded-lg p-2 hover:text-white">
            Email Jason
            <ChevronRightIcon fontSize="small" />
          </Link>

          <Link href="https://www.linkedin.com/in/jasonpaxtoncooper" target="_blank" className="block mb-4 border border-gray-400 rounded-lg p-2 hover:text-white">
            Connect on LinkedIn
            <ChevronRightIcon fontSize="small" />
          </Link>

          <Link href="/jason-cooper-resume.pdf" target="_blank" className="block mb-4 border border-gray-400 rounded-lg p-2 hover:text-white">
            Download as PDF
            <ChevronRightIcon fontSize="small" />
          </Link>
        </div>
      </div>
    </>
  );
}
  