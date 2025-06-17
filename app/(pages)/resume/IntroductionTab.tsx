import Link from "next/link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { resumeContent } from "@/data/resume-content";
import ReactMarkdown from 'react-markdown';

export default function IntroductionTab() {
  return (
    <>
      <div id={resumeContent.introduction.id} className="flex flex-wrap md:flex-nowrap gap-10 pb-8 mb-4 border-b border-dashed scroll-mt-28">
        <div className="w-full md:w-3/4">
          <h2 className="font-heading font-semibold text-2xl mb-2">{resumeContent.introduction.title}</h2>

          <ReactMarkdown>{resumeContent.introduction.text}</ReactMarkdown>
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
        </div>
      </div>
    </>
  );
}
  