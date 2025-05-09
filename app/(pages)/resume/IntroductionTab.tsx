'use client';

import Link from "next/link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function IntroductionTab() {

  return (
    <div className="flex flex-wrap md:flex-nowrap">
      <div className="w-full md:w-3/4 md:p-4">
        <p className="mb-4">
            <span className="text-primary font-medium text-lg">Hello!</span> I'm a designer and developer looking for my next passion project. Do you have a web application that you need to constantly enhance with new features for your customers? Or maybe you have a vision where you're still working out the details? I can help in either case.
        </p>

        <p className="mb-4">
          I can bring a lot of value to your organization: instead of waiting on detailed instructions or exact specifications, I can accelerate the development process by helping you create the specs, or by creating a proof-of-concept until exact specs are ready.
        </p>

        <p className="mb-4">Once we're up and running, I'm an effective leader who can manage projects and guide a team efficiently. And because I'm not a specialist, I can pitch in wherever it's needed: development, design, operations, analytics, presentations.
        </p>

        <p className="mb-4">
            Please reach out to me and I'm happy to share my thoughts and experience, and listen to yours.
        </p>
      </div>

      <div className="w-full md:w-1/4 md:p-4">
        <div className="mb-3">
          <Link href="mailto:jasonpaxtoncooper@gmail.com" className="text-primary hover:text-pink-600">
            Email Jason
            <ChevronRightIcon fontSize="small" />
          </Link>
        </div>

        <div className="mb-3">
          <Link href="https://www.linkedin.com/in/jasonpaxtoncooper" target="_blank" className="text-primary hover:text-pink-600">
            <div>
              Connect on LinkedIn
              <ChevronRightIcon fontSize="small" />
            </div>
          </Link>
        </div>

        <div className="mb-4">
          <Link href="/jason-cooper-resume.pdf" target="_blank" className="text-primary hover:text-pink-600">
            <div>
              Download as PDF
              <ChevronRightIcon fontSize="small" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
  