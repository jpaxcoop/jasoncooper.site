import Link from "next/link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { resumeContent } from "@/data/resumeContent";
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
                <div className="mb-4 text-gray-400"><em>{experience.dates}</em></div>
                  <ReactMarkdown>{experience.text}</ReactMarkdown>
              </div>
            );
          })}
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