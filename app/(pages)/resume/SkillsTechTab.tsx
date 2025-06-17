'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";
import { projectThumbs } from "@/data/project-thumbs";
import { handleClick } from "@/utlis/projectThumbUtils";
import { resumeContent } from "@/data/resume-content";
import ReactMarkdown from 'react-markdown';

export default function SkillsTechTab() {
  const router = useRouter();

  const scrollToSection = (anchorId: string) => {
    const section = document.getElementById(anchorId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSkillProjects = (skillId: string) => {
    return Object.entries(projectThumbs)
      .filter(([, project]) => project.skills.includes(skillId))
      .map(([key, project]) => ({ key, ...project }));
  };

  return (
    <div id={resumeContent.skillsAndTech.id} className="pb-8 mb-4 border-b border-dashed scroll-mt-28">
      <h2 className="font-heading font-semibold text-2xl mb-4">{resumeContent.skillsAndTech.title}</h2>

      <div className="flex">
          <div className="w-full md:w-3/4">
            <div className="flex flex-wrap mb-4">
              {resumeContent.skillsAndTech.skills.map((skill, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => scrollToSection(skill.id)}
                    className="border-gray-400 border-1 py-1 px-3 hover:text-white hover:cursor-pointer rounded-md mr-2 mb-2"
                  >
                    {skill.title}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="hidden md:block w-1/4">
          </div>
      </div>

      {resumeContent.skillsAndTech.skills.map((skill, index) => {
        return (
          <div id={skill.id} key={index} className="mb-6 scroll-mt-21">
            <h4 className="font-heading text-lg font-semibold mb-2">{skill.title}</h4>
            
            <div className="flex flex-wrap md:flex-nowrap gap-10">
              <div className="w-full md:w-3/4">
                <ReactMarkdown>{skill.text}</ReactMarkdown>

                {skill.list.length > 0 &&
                  <ul className="columns-4 mb-2 gap-4">
                    {skill.list.map((item, index) => {
                      return (
                        <li key={index}>{item}</li>
                      );
                    })}
                  </ul>
                }

                <button
                  onClick={() => scrollToSection(resumeContent.skillsAndTech.id)}
                  className="text-gray-400 hover:text-pink-600"
                >
                  Return to Skills
                </button>
              </div>

              {getSkillProjects(skill.id).length > 0 ?
                <div className="w-full md:w-1/4">
                  <h4 className="font-heading text-sm tracking-wider font-medium uppercase mb-3">Projects</h4>

                  <div className="flex flex-wrap justify-between">
                    {getSkillProjects(skill.id).map((project, index) => {
                      return (
                        <div key={index} className="w-[46%] mb-2">
                          <div className="relative aspect-square rounded-lg overflow-hidden mb-2">
                            <Image
                              src={project.imgSrc}
                              alt={project.title}
                              fill
                              className="object-cover hover:border-2 border-pink-500 hover:cursor-pointer"
                              sizes="(max-width: 768px) 50vw, 25vw"
                              title={project.title}
                              onClick={() => handleClick(project, router)}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              : ''}
            </div>
          </div>
        );
      })}
    </div>
  );
}
  