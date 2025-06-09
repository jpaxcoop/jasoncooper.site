import { GitHub } from "@mui/icons-material";
import Image from "next/image";

export default function Hal9000Page() {
  return (
    <div className="max-w-full xl:max-w-7xl mx-auto p-4 md:px-8">
      <div className="flex flex-wrap lg:flex-nowrap gap-10 mb-8">
        <div className="w-full lg:w-2/3">
          <div className="relative rounded-lg overflow-hidden border-3 border-gray-600 bg-black">
            <video width="100%" height="auto" preload="none" poster="/hal9000.png" controls className="aspect-video">
              <source src="/hal9000.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="font-heading font-semibold text-2xl">HAL9000</h1>
            </div>

            <div>
              <a href="https://github.com/jpaxcoop/hal9000" target="_blank" className="text-pink-500">
                <GitHub fontSize="small" className="mr-1" /> repository
              </a>
            </div>
          </div>
          
          <p className="mb-4">I am old enough to remember life before the Internet. Now I say I am old enough to remember life before Artificial Intelligence. That's how profound I think the impact A.I. will have on our lives. And we're still in the "AOL" stage of A.I.!</p>

          <p>HAL9000 from the movie <em>2001: A Space Odyssey</em> is the archetype of A.I.: capable, wired into everything, and it cannot be trusted. So I selected "Hal" for my first "real" A.I. project. In hindsight, I realize that it's probably the obvious choice for a lot of people. But I went into it blind: I did not consult anyone's notes on building their "Hal" as I developed my own.</p>
        </div>
      </div>

       <div className="flex flex-wrap lg:flex-nowrap gap-10 mb-4">
        <div className="w-full lg:w-1/3 mb-4">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-4 border-3 border-gray-600">
            <Image
              src="/gradio.png"
              alt="Gradio UI"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>

          <h2 className="font-heading font-semibold text-xl mb-2">Voice Model</h2>

          <p className="mb-4">Training the voice model was the biggest task of the project. I started with the Coqui TTS library. But I had a lot of trouble with dependencies because the project has been abandoned. I switched to F5 TTS, which was much easier. I used the Gradio UI to train the voice on audio clips I created from the movie.</p>
        </div>

        <div className="w-full lg:w-1/3 mb-4">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-4 border-3 border-gray-600">
            <Image
              src="/llm-properties.png"
              alt="LLM properties"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>

          <h2 className="font-heading font-semibold text-xl mb-2">Hugging Face LLM</h2>

          <p className="mb-4">This project introduced me to Hugging Face. I was surprised when I learned of it. <em>It can't be this easy,</em> I thought. <em>You just seach for the model you want and download it? And it comes with its own knowledge base built in?</em></p>

          <p className="mb-4">In this stage, I learned about finetuning an A.I. with properties like temperature and nucleus sampling. High values were needed to make Hal creepy and imaginative.</p>
        </div>

        <div className="w-full lg:w-1/3 mb-4">
          <div className="relative aspect-video rounded-lg overflow-hidden mb-4 border-3 border-gray-600">
            <Image
              src="/hal9000.png"
              alt="HAL9000 interface"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>

          <h2 className="font-heading font-semibold text-xl mb-2">User Interface</h2>

          <p className="mb-4">The user interface was the relaxing part. I think of it as drawing or illustrating, one of my favorite activities. I built a website using Next.JS and Tailwind. I am proud to say that the HAL9000 "illustration" is completely Tailwind classes - no images necessary. I borrowed the code for the "transcript monitor" from the Role Matcher feature on this website. I think the result compares with its movie muse nicely.</p>
        </div>
      </div>
    </div>
  );
}