'use client';

import { useEffect, useRef, useState } from "react";
import { TypingText } from "./TypingText";

export default function RoleMatcherModal({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string>('');

  const [roleDescription, setRoleDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [roleMatch, setRoleMatch] = useState<string>('');

  const resumeText = `Jason Cooper
Designer and developer with 15 years designing applications and 10 years developing them.
10 years of marketing and marketing technology experience
Skilled in HTML, CSS, JavaScript, Typescript, and PHP languages.
Experienced in React with Next.JS, Vue, Tailwind, Twitter Bootstrap, and Laravel frameworks.
Experience with Jest, Cypress, and phpunit tests.
Experienced with MySQL databases and familiar with PostgreSQL databases.
Experience using and building RESTful APIs. Experience using SOAP APIs.
Experience with AWS, including S3, RDS, and Amplify. 
Strong graphic design, UI design, and copywriting skills.
Experienced with wireframing and designing with Adobe Creative Suite (20 years) and with Figma.
Experienced with and knowledgeable about developing applications with AI assistance.
Experience managing developer teams and projects using SDLCs like Agile and tools like Jira.
Fast learner and self-starter.
Excellent communicator.`;

  useEffect(() => {
    if (isOpen) {
      setText('');
      setRoleDescription('');
      setRoleMatch('');
      document.body.style.overflow = 'hidden';
      textareaRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmitClick = async () => {
    if (!roleDescription) {
      setRoleMatch('Please enter a role description before submitting.');

      return;
    }

    setLoading(true);
    setRoleMatch('');

    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roleDescription, resumeText }),
    });

    const data = await res.json();
    if (data.result) {
      setRoleMatch(data.result);
    } else {
      setRoleMatch('Error generating AI response.');
    }

    setLoading(false);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-4xl h-3/4 min-h-[400px]">
        <div className="relative bg-black shadow rounded-lg border-3 border-gray-709 h-full">
          <div className="p-4 text-emerald-400 font-terminal tracking-wide flex justify-between">
            <div>*** ROLE MATCHER ***</div>
            <button className="px-1 text-right hover:text-black hover:bg-emerald-400 hover:cursor-pointer" onClick={() => setIsOpen(false)}>
              QUIT
            </button>
          </div>

          <div className="h-full">
            <div className="h-[calc(67%-56px)] text-emerald-400 p-4 pt-0 font-terminal tracking-wide overflow-auto terminal-scrollbar">
              <TypingText fullText={`Hello. Welcome to the artificial intelligence-powered "Role Matcher." Please enter information regarding the role you are hiring for. The Role Matcher will match it to Jason's skills and experience, then prepare a summary for your review.`} speed={10} />

              {loading && (
                <>
                  Loading...
                  <div className="bg-emerald-400 aspect-square w-4 animate-blink"></div>
                </>
              )}

              {roleMatch && <TypingText fullText={roleMatch} speed={10} />}
            </div>
            <div className="h-1/3 p-4 flex flex-col">
              <div className="overflow-hidden text-nowrap text-emerald-400 text-terminal">
                ----------------------------------------------------------------------------------------------------------------------------
              </div>

              <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  setRoleDescription(e.target.value);
                }}
                className="block w-full font-terminal text-gray-300 resize-none focus-visible:outline-0 rounded-lg flex-grow min-h-[24px] caret-gray-300 terminal-scrollbar"
                placeholder="Enter/paste your role information here, then submit."></textarea>

                <div className="flex justify-end">
                  <button className="px-1 text-emerald-400 font-terminal tracking-wide text-right hover:text-black hover:bg-emerald-400 hover:cursor-pointer" onClick={() => handleSubmitClick()}>
                    SUBMIT
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}