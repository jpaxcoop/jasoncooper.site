'use client';

import { useEffect, useRef, useState } from "react";
import { TypingText } from "./TypingText";
import { pdf } from "@react-pdf/renderer";
import ResumePdf from "@/app/(pages)/resume/ResumePdf";
import { resumeContent } from "@/data/resume-content";
import AtsResumePdf from "@/app/(pages)/resume/ats/AtsResumePdf";

export default function RoleMatcherModal({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (val: boolean) => void }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string>('');

  const [roleDescription, setRoleDescription] = useState<string>('');
  const [isMatching, setIsMatching] = useState<boolean>(false);
  const [roleMatch, setRoleMatch] = useState<string>('');

  const [errorMessage, setErrorMessage] = useState<string>('');

  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setText('');
      setRoleDescription('');
      setRoleMatch('');

      document.body.style.overflow = 'hidden';
      const mediaQuery = window.matchMedia("(min-width: 768px)");

      if (mediaQuery.matches) {
        textareaRef.current?.focus();
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmitClick = async () => {
    if (!roleDescription) {
      setErrorMessage('Please enter a role description before submitting.');

      return;
    }

    if (isMatching) {
      return;
    }

    setErrorMessage('');
    setIsMatching(true);
    setRoleMatch('');

    const res = await fetch('/api/role-match', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roleDescription }),
    });

    const data = await res.json();
    if (data.result) {
      setRoleMatch(data.result);
    } else {
      setErrorMessage('Error generating AI response.');
    }

    setIsMatching(false);
  }

  const handleDownloadResumeClick = async () => {
    if (isDownloading) {
      return;
    }

    setErrorMessage('');
    setIsDownloading(true);

    const res = await fetch('/api/optimize-resume', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roleDescription }),
    });

    const data = await res.json();
    if (data.result) {
      const introduction = JSON.parse(data.result);

      const optimizedResumeContent = resumeContent;

      optimizedResumeContent.introduction.title = introduction.title;
      optimizedResumeContent.introduction.text = introduction.text;

      const blob = await pdf(
        <ResumePdf hasJobDescription={true} resumeContent={optimizedResumeContent} />
      ).toBlob();

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'jason-cooper-resume.pdf';
      a.click();
      URL.revokeObjectURL(url);
    } else {
      setErrorMessage('Error generating resumé PDF.');
    }

    setIsDownloading(false);
  }

  const handleDownloadAtsResumeClick = async () => {
    if (isDownloading) {
      return;
    }

    setErrorMessage('');
    setIsDownloading(true);

    const res = await fetch('/api/optimize-resume', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roleDescription }),
    });

    const data = await res.json();
    if (data.result) {
      const introduction = JSON.parse(data.result);

      const optimizedResumeContent = resumeContent;

      optimizedResumeContent.introduction.title = introduction.title;
      optimizedResumeContent.introduction.text = introduction.text;

      const blob = await pdf(
        <AtsResumePdf resumeContent={optimizedResumeContent} />
      ).toBlob();

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'jason-cooper-ats-resume.pdf';
      a.click();
      URL.revokeObjectURL(url);
    } else {
      setErrorMessage('Error generating ATS resumé PDF.');
    }

    setIsDownloading(false);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed h-screen w-screen top-0 left-0 z-50 flex md:items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-4xl h-3/4 min-h-[400px]">
        <div className="relative text-emerald-400 font-terminal tracking-wide bg-black shadow rounded-lg border-3 border-emerald-500 h-full overflow-hidden">
          <div className="h-2/3 flex flex-col">
            <div className="flex p-3 pb-0 justify-between">
              <div className="px-1">
                *** ROLE MATCHER ***
              </div>
              <button className="px-1 text-right hover:text-black hover:bg-emerald-400 hover:cursor-pointer" onClick={() => setIsOpen(false)}>
                QUIT
              </button>
            </div>

            <div className="text-nowrap text-emerald-400 text-terminal">
              ----------------------------------------------------------------------------------------------------------------------------
            </div>

            <div className="text-emerald-400 font-terminal tracking-wide overflow-y-auto terminal-scrollbar">
              <div className="p-4 pt-0">
                <TypingText fullText={`Hello. Welcome to the artificial intelligence-powered "Role Matcher." Please enter information regarding the role you are hiring for. The Role Matcher will match it to Jason's skills and experience, then prepare a summary for your review.`} speed={10} />

                {isMatching && (
                  <>
                    Matching...
                    <div className="bg-emerald-400 aspect-square w-4 animate-blink"></div>
                  </>
                )}

                {roleMatch && (
                  <>
                    <div className="mb-4">Matched!</div>
                    <div className="mb-4">
                      <button
                        className={`uppercase px-1 mr-2 text-right text-black bg-emerald-400 ${isDownloading ? 'hover:cursor-wait' : 'hover:cursor-pointer'}`}
                        onClick={() => handleDownloadResumeClick()}
                      >
                        Download Resumé
                      </button>

                      <button
                        className={`uppercase px-1 mr-2 text-right text-black bg-emerald-400 ${isDownloading ? 'hover:cursor-wait' : 'hover:cursor-pointer'}`}
                        onClick={() => handleDownloadAtsResumeClick()}
                      >
                        Download ATS Resumé
                      </button>

                      {isDownloading ? 'Downloading...' : ''}
                    </div>
                    <TypingText fullText={roleMatch} speed={10} />
                  </>
                )}

                {
                  errorMessage && (
                    <TypingText fullText={errorMessage} speed={10} />
                  )
                }
              </div>
            </div>
          </div>

          <div className="h-1/3 flex flex-col">
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
              className="px-4 block w-full font-terminal text-gray-300 resize-none focus-visible:outline-0 rounded-lg flex-grow min-h-[24px] caret-gray-300 terminal-scrollbar"
              placeholder="Enter/paste your role information here, then submit."></textarea>

            <div className="flex justify-end p-4 pt-1">
              <button className="px-1 text-emerald-400 font-terminal tracking-wide text-right hover:text-black hover:bg-emerald-400 hover:cursor-pointer" onClick={() => handleSubmitClick()}>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}