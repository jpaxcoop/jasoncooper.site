import Link from "next/link";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { resumeContent } from "@/data/resumeContent";
import ReactMarkdown from 'react-markdown';

export default function RecommendationsTab() {
    return (
      <>
        <div id={resumeContent.recommendations.id} className="flex flex-wrap md:flex-nowrap gap-10 pb-8 mb-4 border-b border-dashed scroll-mt-28">
          <div className="w-full md:w-3/4">
            <h2 className="font-heading font-semibold text-2xl mb-8">
              {resumeContent.recommendations.title}
            </h2>

            {resumeContent.recommendations.recommendations.map((recommendation, index) => {
              return (
                <div key={index} className="mb-12">
                  <div className="mb-2 pl-6 pb-4 border-l-4 border-gray-500">
                    <ReactMarkdown>{recommendation.text}</ReactMarkdown>
                  </div>

                  <h4 className="font-heading text-[18] font-semibold">{recommendation.title}</h4>
                  <em>{recommendation.relation}</em>          
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
      </>
    );
  }
  