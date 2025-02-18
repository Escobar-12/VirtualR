import { CheckCircle2 } from "lucide-react";
import {pricingOptions} from "./constants"

function PricingPlan()
{
    return(
        <div id="Pricing" className=" mt-10 pt-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center my-8">Pricing</h2>
            <div className="flex flex-wrap justify-center space-y-3">
                {pricingOptions.map((price, index)=>(
                    <div key={index} className="max-w-[920px] min-w-[260px] mx-1">
                        <div className="p-5 border-1 border-neutral-700 rounded-xl">
                            <p className="text-4xl mb-10">
                                {price.title}
                                {price.title === "Pro" && 
                                    <span className="text-sm mb-4 bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">(Most Popular)
                                    </span>
                                }
                            </p>
                            <p className="text-4xl mb-10">{price.price}
                                <span className="text-sm text-neutral-500 tracking-tight"> /Month</span> 
                            </p>
                            <div className="flex flex-col">
                                {price.features.map((feature,index)=>(
                                    <ul key={index}>
                                        <li className="flex items-center mb-4">
                                            <div className="bg-neutral-800 h-8 w-8 p-1 justify-center items-center rounded-full"><CheckCircle2/></div>
                                            <div className="text-sm ml-2">{feature}</div>
                                        </li>
                                    </ul>
                                ))}
                            </div>

                        </div>
                        
                        

                    </div>
                ))}
            </div>
        </div>
    );
}
export default PricingPlan;