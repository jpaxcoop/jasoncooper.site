import Stage from "./Stage";

type Props = {
    onDismiss: () => void;
  };
  
  export default function AboutYouWelcome({ onDismiss }: Props) {
    return (
        <Stage className="absolute top-0 w-full h-[80vh] text-center pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-full md:max-w-xl p-4 pointer-events-auto">
                <h2 className="text-2xl font-bold mb-4">Enough About Me - What About&nbsp;You?</h2>
                <p className="mb-4">When you visit a website, your web browser provides your IP address, browser version, and OS. On this page, I've used your IP address to approximate your geolocation, and then used that to check your timezone and weather. Finally, I've used this data to illustrate the sky near you.</p>

                <button
                    onClick={onDismiss}
                    className="px-4 py-2 border-2 border-white text-white rounded hover:cursor-pointer"
                >
                    Learn About You
                </button>
            </div>
        </Stage>
    );
  }
  