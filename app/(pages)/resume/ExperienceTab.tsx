import Link from "next/link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { resumeContent } from "@/data/resume-content";
import ReactMarkdown from 'react-markdown';

export default function ExperienceTab() {
  return (
    <div id={resumeContent.experience.id} className="scroll-mt-28">
      <h2 className="font-heading font-semibold text-2xl mb-8">
        {resumeContent.experience.title}
      </h2>

      <div className="flex flex-wrap md:flex-nowrap gap-10 ">
        <div className="w-full md:w-3/4">
          {resumeContent.experience.experiences.map((experience, index) => {
            return (
              <div key={index} className="mb-8">
                <h4 className="font-heading text-lg font-semibold">{experience.role}, {experience.org}</h4>
                <div className="mb-4 text-gray-600 dark:text-gray-400"><em>{experience.dates}</em></div>
                  <ReactMarkdown>{experience.text}</ReactMarkdown>
              </div>
            );
          })}
        </div>

        <div className="w-full md:w-1/4">
          <Link href="https://www.linkedin.com/in/jasonpaxtoncooper" target="_blank" className="block font-heading font-medium whitespace-nowrap mb-4 border-2 border-gray-500 dark:border-gray-400 rounded-lg px-4 py-2 hover:text-pink-500 hover:border-pink-500 hover:cursor-pointer bg-white/25 dark:bg-gray-800/25">
            More on LinkedIn
            <ChevronRightIcon fontSize="small" />
          </Link>
        </div>
      </div>
    </div>
  );
}