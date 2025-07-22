'use client';

import { useState } from "react";
import IntroductionTab from "./IntroductionTab";
import SkillsTechTab from "./SkillsTechTab";
import ExperienceTab from "./ExperienceTab";
import RecommendationsTab from "./RecommendationsTab";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RoleMatcherModal from "@/components/RoleMatcherModal";
import ResumePdf from "./ResumePdf";
import { pdf } from "@react-pdf/renderer";
import { resumeContent } from "@/data/resume-content";

export default function ResumePage() {
  const tabs = Object.values(resumeContent);
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const [isRoleMatcherModalOpen, setIsRoleMatcherModalOpen] =useState<boolean>(false);

  const scrollToSection = (anchorId: string) => {
    const section = document.getElementById(anchorId);

    if (section) {
      setActiveTab(anchorId);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = async () => {
    const blob = await pdf(
      <ResumePdf />
    ).toBlob();

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'jason-cooper-resume.pdf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap gap-10">
        <div className="w-full md:w-auto">
          <div className="sticky top-30">
            <button 
              className="block font-heading font-medium whitespace-nowrap mb-4 border-2 border-pink-500 rounded-lg px-4 py-2 hover:text-white hover:bg-pink-600 hover:cursor-pointer bg-white/25 dark:bg-gray-800/25"
              onClick={handleDownload}
            >
              Download Resumé PDF
              <ChevronRightIcon fontSize="small" />
            </button>

            <div className="rounded-lg items-center mb-4 py-3 px-4 bg-pink-600">
              <div className="font-heading text-lg mb-3 text-white">
                <span className="font-semibold">Hiring?</span> See if Jason matches your role
              </div>

              <button
                className="font-heading whitespace-nowrap px-4 py-1 rounded-lg border-2 border-white/50 text-lg hover:border-pink-500 hover:bg-pink-500 hover:cursor-pointer text-white text-nowrap"
                onClick={() => {setIsRoleMatcherModalOpen(true)}}
              >
                Try Role Matcher
                <ChevronRightIcon fontSize="small" />
              </button>
            </div>

            <ul>
              {tabs.map((tab, index) => (
                <li key={tab.id}>
                    <button
                      key={index}
                      onClick={() => scrollToSection(tab.id)}
                      className={`block py-1 font-heading font-medium text-lg dark:text-shadow-lg dark:text-shadow-gray-900/50 hover:cursor-pointer ${
                      activeTab === tab.id
                        ? 'text-pink-500'
                        : 'hover:text-black hover:font-bold dark:hover:text-white'
                      }`}
                    >
                      {tab.tab}
                    </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <IntroductionTab />
          <RecommendationsTab />
          <SkillsTechTab />
          <ExperienceTab />
        </div>
      </div>

      <RoleMatcherModal isOpen={isRoleMatcherModalOpen} setIsOpen={setIsRoleMatcherModalOpen} />
    </>
  );
}