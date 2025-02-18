import NavBar from "./NavBar"
import HeroSec from "./Hero"
import FeatureSec from "./Features"
import WorkFlow from "./Workflow"
import PricingPlan from "./Pricing"
import Testimonial from "./Testimonials"
import FooterS from "./Footer"

function App() {

  return (
    <>
      <NavBar/>
      <div className=" max-w-7xl mx-auto pt-15 px-6 flex flex-col items-center">
        <HeroSec/>
        <FeatureSec/>
        <WorkFlow/>
        <PricingPlan/>
        <Testimonial/>
        <FooterS/>
      </div>

    </>
  )
}

export default App
