'use client';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { pdf } from "@react-pdf/renderer";
import AtsResumePdf from './AtsResumePdf';

export default function ResumePage() {
  const handleDownload = async () => {
    const blob = await pdf(
      <AtsResumePdf />
    ).toBlob();

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'jason-cooper-ats-resume.pdf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-10">
      <button 
        className="block font-heading text-gray-200 whitespace-nowrap mb-4 border-2 border-pink-500 rounded-lg px-4 py-2 hover:text-white hover:bg-pink-600 hover:cursor-pointer"
        onClick={handleDownload}
      >
        Download ATS Resumé PDF
        <ChevronRightIcon fontSize="small" />
      </button>
    </div>
  );
}