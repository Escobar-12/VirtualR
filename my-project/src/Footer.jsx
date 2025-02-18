import {resourcesLinks, platformLinks, communityLinks} from "./constants/index"

function FooterS()
{
    return (
        <footer id="Footer" className=" mt-20 text-sm border-t py-10 border-neutral-600 w-full max-w-[60vw]">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="platform flex flex-col justify-center items-start">
                    <h5 className="py-2">Resources</h5>
                    {resourcesLinks.map((plink,index)=>(
                        <a className="text-neutral-500 pb-1" key={index} href={plink.href}>{plink.text}</a>
                    ))}
                </div>
                <div className="platform flex flex-col justify-center items-start">
                    <h5 className="py-2">Platform</h5>
                    {platformLinks.map((plink,index)=>(
                        <a className="text-neutral-500 pb-1" key={index} href={plink.href}>{plink.text}</a>
                    ))}
                </div>
                <div className="platform flex flex-col justify-center items-start">
                    <h5 className="py-2">Community</h5>
                    {communityLinks.map((plink,index)=>(
                        <a className="text-neutral-500 pb-1" key={index} href={plink.href}>{plink.text}</a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
export default FooterS;