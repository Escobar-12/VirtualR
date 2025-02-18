import codeIMG from "./assets/code.jpg"
import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "./constants";

function WorkFlow()
{
    return(
        <div className="pt-10 mt-20">
            <div id="Workflow" className=" text-center">
                <h2 className="text-4xl my-10 mx-auto sm:text-5xl lg:text-6xl mt-10">Accelerate your <span className="bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">coding workflow.</span></h2>
            </div>
            <div className="flex flex-wrap justify-center items-center">
                <div className="w-full lg:w-1/2 p-2">
                    <img src={codeIMG} alt="" />
                </div>
                <div className="w-full lg:w-1/2 p-2 my-5">
                    {checklistItems.map((item, index)=>(
                        <div key={index} className="flex mb-5">
                            <div className="text-green-400 bg-neutral-800 h-10 w-10 p-2 mx-6 justify-center items-center rounded-full"><CheckCircle2/></div>
                            <div>
                                <h5 className="text-lg tracking-tight mb-2"> {item.title}</h5>
                                <p className="text-neutral-500 text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default WorkFlow;