import { features } from "./constants/index.jsx";

function FeatureSec()
{
    return(
        <div id="Features" className=" relative flex flex-col border-b border-neutral-800 m-auto mt-10 pt-20 justify-center items-center">
            <div className="text-center">
                <p className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">Features</p>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mt-10">Easily build <span className="bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">your code</span></h2>
            <div className="flex flex-wrap mt-15 lg:mt-20">
                {features.map((item, index)=>(
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 sm:mb-10 lg:mb-20 mb-15">
                        <div className="flex">
                            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-800 text-orange-700 justify-center items-center rounded-full">
                                {item.icon}
                            </div>
                            <div className="flex flex-col sm:space-y-5 lg:space-y-10">
                                <h5 className="text-xl tracking-tight">{item.text}</h5>
                                <p className="text-sm text-neutral-500">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default FeatureSec;