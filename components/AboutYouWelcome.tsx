import Stage from "./Stage";

type Props = {
    onDismiss: () => void;
  };
  
  export default function AboutYouWelcome({ onDismiss }: Props) {
    return (
        <>
            <div className="w-full mx-auto md:max-w-xl p-4 text-center">
                <h2 className="text-2xl font-bold mb-4">Enough About Me - What About&nbsp;You?</h2>
                <p>When you visit a website, your web browser provides your IP address, browser version, and OS. On this page, I've used your IP address to approximate your geolocation, and then used that to check your timezone and weather. Finally, I've used this data to illustrate the sky near you.</p>

                <button
                    onClick={onDismiss}
                    className="font-heading font-medium whitespace-nowrap mb-4 border-2 border-pink-500 rounded-lg px-4 py-2 hover:text-white hover:bg-pink-600 hover:cursor-pointer bg-white/25 dark:bg-gray-800/25"
                >
                    Learn About You
                </button>
            </div>
            <Stage className="absolute z-[-1] top-0 w-full h-[80vh] pointer-events-none">
            </Stage>
        </>
    );
  }
  