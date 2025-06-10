'use client';

import { useState } from "react";
import IntroductionTab from "./IntroductionTab";
import SkillsTechTab from "./SkillsTechTab";
import ExperienceTab from "./ExperienceTab";
import RecommendationsTab from "./RecommendationsTab";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RoleMatcherModal from "@/components/RoleMatcherModal";

export default function ResumePage() {
  const tabs = ['Introduction', 'Recommendations', 'Skills & Tech', 'Experience'];
  const [activeTab, setActiveTab] = useState<string>('Introduction');
  const [isRoleMatcherModalOpen, setIsRoleMatcherModalOpen] =useState<boolean>(false);

  return (
    <>
      <div className="max-w-full xl:max-w-7xl mx-auto p-4 md:px-8">
        <div className="flex flex-wrap md:flex-nowrap gap-10">
          <div className="w-full md:w-auto">
            <div className="rounded-lg items-center mb-4 py-3 px-4 bg-pink-600/80">
              <div className="font-heading text-lg mb-3 text-white">
                <span className="font-semibold">Hiring?</span> See if Jason matches your role
              </div>

              <button
                className="text-center px-4 py-1 rounded-lg border-2 border-white/50 text-lg hover:border-pink-500 hover:bg-pink-500 hover:cursor-pointer text-white text-nowrap"
                onClick={() => {setIsRoleMatcherModalOpen(true)}}
              >
                Try the Role Matcher
                <ChevronRightIcon fontSize="small" />
              </button>
            </div>

            <ul>
              {tabs.map((tab) => (
                <li key={tab}>
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`block py-1 font-heading font-medium text-lg text-shadow-lg text-shadow-gray-900/50 hover:cursor-pointer ${
                      activeTab === tab
                        ? 'text-pink-600'
                        : 'hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {activeTab === 'Introduction' && <IntroductionTab />}
            {activeTab === 'Recommendations' && <RecommendationsTab />}
            {activeTab === 'Skills & Tech' && <SkillsTechTab />}
            {activeTab === 'Experience' && <ExperienceTab />}
          </div>
        </div>
      </div>

      <RoleMatcherModal isOpen={isRoleMatcherModalOpen} setIsOpen={setIsRoleMatcherModalOpen} />
    </>
  );
}