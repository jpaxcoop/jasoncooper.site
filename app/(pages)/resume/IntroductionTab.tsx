'use client';

import Link from "next/link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from "react";
import RoleMatcherModal from "@/components/RoleMatcherModal";

export default function IntroductionTab() {
  const [isRoleMatcherModalOpen, setIsRoleMatcherModalOpen] =useState<boolean>(false);

  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap gap-8">
        <div className="w-full md:w-3/4">
          <button
            className="w-full text-center p-2 rounded-lg border-2 border-white text-lg hover:border-pink-500 hover:text-pink-500 hover:cursor-pointer mb-4 text-white"
            onClick={() => {setIsRoleMatcherModalOpen(true)}}
          >
            Hiring? Try the Role Matcher to see if Jason matches your role.
          </button>
          <p className="mb-4">
              <span className="text-pink-500 font-medium text-lg">Hello!</span> I'm a designer and developer looking for my next passion project. Do you have a web application that you need to constantly enhance with new features for your customers? Or maybe you have a vision where you're still working out the details? I can help in either case.
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

        <div className="w-full md:w-1/4">
          <Link href="mailto:jasonpaxtoncooper@gmail.com" className="block mb-3 border-1 rounded-lg p-2 hover:border-pink-500 hover:text-pink-600">
            Email Jason
            <ChevronRightIcon fontSize="small" />
          </Link>

          <Link href="https://www.linkedin.com/in/jasonpaxtoncooper" target="_blank" className="block mb-3 border-1 rounded-lg p-2 hover:border-pink-500 hover:text-pink-600">
            <div>
              Connect on LinkedIn
              <ChevronRightIcon fontSize="small" />
            </div>
          </Link>

          <Link href="/jason-cooper-resume.pdf" target="_blank" className="block mb-3 border-1 rounded-lg p-2 hover:border-pink-500 hover:text-pink-600">
            <div>
              Download as PDF
              <ChevronRightIcon fontSize="small" />
            </div>
          </Link>
        </div>
      </div>

      <RoleMatcherModal isOpen={isRoleMatcherModalOpen} setIsOpen={setIsRoleMatcherModalOpen} />
    </>
  );
}
  