import Video1 from "./assets/video1.mp4";
import Video2 from "./assets/video2.mp4";

function HeroSec()
{
    return(
        <div id="Hero" className=" flex flex-col m-auto space-y-5 justify-center items-center">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide" >VirtualR build tools 
                <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-800 bg-clip-text">
                    {" "}for developers
                </span>
            </h2>
            <p className="text-center text-lg mt-5 max-w-4xl text-neutral-500">
                Empower your creativity and bring your VR app idea to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!
            </p>
            <div className="flex justify-center items-center space-x-5 mt-5">
                <a href="" className="py-2 px-3 bg-gradient-to-r from-orange-400 to-orange-800 rounded">Start for free</a>
                <a href="" className="py-2 px-3 border rounded">Documentation</a>
            </div>
            <div className="flex mt-5 justify-center">
                <video autoPlay loop muted className="w-1/2 border border-orange-600 rounded-lg shadow-orange-900 mx-2 my-5" 
                    src={Video1} type="video/mp4"> 
                </video>
                <video autoPlay loop muted className="w-1/2 border border-orange-600 rounded-lg shadow-orange-900 mx-2 my-5" 
                    src={Video2} type="video/mp4"> 
                </video>
            </div>
        </div>
    );
}
export default HeroSec;