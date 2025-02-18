import { testimonials } from "./constants";

function Testimonial()
{
    return(
        <div className="mt-10 pt-20" id="Testimonials">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl my-10 text-center lg:my-20">What People are saying</h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial,index)=>(
                    <div className=" bg-neutral-900 p-3 m-3 h-fit max-w-[300px] rounded-xl border border-neutral-800 font-thin" key={index}>
                        <div className="flex flex-col ">
                            <p className="text-sm mb-2">{testimonial.text}</p>
                            <div className="flex my-2 items-center">
                                <img className="h-10 w-10 rounded-full border" src={testimonial.image} alt="" />
                                <div className="flex flex-col ml-2">
                                    <h5 className="text-sm">{testimonial.user}</h5>
                                    <p className="text-sm text-neutral-400">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                        

                    </div> 
                ))}
            </div>
        </div>
    );
}
export default Testimonial;