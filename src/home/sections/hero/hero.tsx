import LeftSection from "./leftSection"
import RightSection from "./rightSection"

const Hero = () => {
  return (
    <section className="bg-gradient-to-t from-[#fcc258] to-white/0">
        <div className="flex gap-[90px] py-16">
            <LeftSection />
            <RightSection />
        </div>
    </section>
  )
}

export default Hero