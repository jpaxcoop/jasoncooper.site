'use client';

import { useState } from "react";
import IntroductionTab from "./IntroductionTab";
import SkillsTechTab from "./SkillsTechTab";
import ExperienceTab from "./ExperienceTab";
import RecommendationsTab from "./RecommendationsTab";

export default function ResumePage() {
    const tabs = ['Introduction', 'Recommendations', 'Skills / Tech', 'Experience'];
    const [activeTab, setActiveTab] = useState('Introduction');

    return (
        <>
            <div className="max-w-full xl:max-w-7xl mx-auto p-4 md:px-8">
                <div className="flex flex-wrap md:flex-nowrap gap-10">
                    <div className="w-full md:w-auto">
                        <div className="p-2 bg-white/10 rounded-lg">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 text-sm font-heading font-medium ${
                                    activeTab === tab
                                        ? 'text-pink-600'
                                        : 'hover:text-white'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        {activeTab === 'Introduction' && <IntroductionTab />}
                        {activeTab === 'Recommendations' && <RecommendationsTab />}
                        {activeTab === 'Skills / Tech' && <SkillsTechTab />}
                        {activeTab === 'Experience' && <ExperienceTab />}
                    </div>
                </div>
            </div>
        </>
    );
}