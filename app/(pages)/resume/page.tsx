'use client';

import { useEffect, useState } from "react";
import IntroductionTab from "./IntroductionTab";
import SkillsTechTab from "./SkillsTechTab";
import ExperienceTab from "./ExperienceTab";
import RecommendationsTab from "./RecommendationsTab";

export default function ResumePage() {
    const tabs = ['Introduction', 'Recommendations', 'Skills / Tech', 'Experience'];
    const [activeTab, setActiveTab] = useState('Introduction');

    useEffect(() => {
        const original = document.body.style.backgroundColor;
        document.body.style.backgroundColor = '#deaa87';

        return () => {
            document.body.style.backgroundColor = original;
        };
    }, []);

    return (
        <>
            <div className="bg-white shadow-[16px_8px_0px_rgba(160,90,44,1)] max-w-4xl ml-12 my-16 p-12 rotate-[-0.33deg] min-h-[90vw]">
                <div className="flex justify-between items-baseline">
                    <h1 className="text-[36px] font-heading uppercase tracking-widest mb-4 text-primary">
                        Jason Cooper
                    </h1>

                    <h2 className="text-[24px] font-heading uppercase tracking-wider">
                        Designer <span className="text-[28px] relative top-[1px] text-primary">&</span> Developer
                    </h2>
                </div>

                <div className="flex">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 text-sm font-heading font-medium ${
                            activeTab === tab
                                ? 'border-b-2 border-primary text-primary'
                                : 'hover:text-pink-600'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="mt-8">
                    {activeTab === 'Introduction' && <IntroductionTab />}
                    {activeTab === 'Recommendations' && <RecommendationsTab />}
                    {activeTab === 'Skills / Tech' && <SkillsTechTab />}
                    {activeTab === 'Experience' && <ExperienceTab />}
                </div>
            </div>
        </>
    );
}