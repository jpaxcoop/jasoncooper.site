import Link from "next/link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { resumeContent } from "@/data/resume-content";
import ReactMarkdown from 'react-markdown';

export default function IntroductionTab() {
  return (
    <>
      <div id={resumeContent.introduction.id} className="flex flex-wrap md:flex-nowrap gap-10 pb-8 mb-4 border-b border-dashed scroll-mt-28">
        <div className="w-full md:w-3/4">
          <h2 className="font-heading font-semibold text-2xl text-black dark:text-white mb-4 max-w-md">{resumeContent.introduction.title}</h2>

          <ReactMarkdown>{resumeContent.introduction.text}</ReactMarkdown>
        </div>

        <div className="w-full md:w-1/4">
          <Link href="mailto:jasonpaxtoncooper@gmail.com" className="block font-heading font-medium whitespace-nowrap mb-4 border-2 border-gray-500 dark:border-gray-400 rounded-lg px-4 py-2 hover:text-pink-500 hover:border-pink-500 hover:cursor-pointer bg-white/25 dark:bg-gray-800/25">
            Email Jason
            <ChevronRightIcon fontSize="small" />
          </Link>

          <Link href="https://www.linkedin.com/in/jasonpaxtoncooper" target="_blank" className="block font-heading font-medium whitespace-nowrap mb-4 border-2 border-gray-500 dark:border-gray-400 rounded-lg px-4 py-2 hover:text-pink-500 hover:border-pink-500 hover:cursor-pointer bg-white/25 dark:bg-gray-800/25">
            Connect on LinkedIn
            <ChevronRightIcon fontSize="small" />
          </Link>
        </div>
      </div>
    </>
  );
}
  