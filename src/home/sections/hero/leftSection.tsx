import MyInput from "../../../components/searchBar"


const LeftSection = () => {
  return (
    <div className="flex flex-col relative gap-4 px-4 max-w-[565px]">
        <img src="/trust-us-badge.svg" alt="People trust us badge" className="ml-3 -mb-1" width={139} height={28} />
        <h1 className="capitalize font-black text-[58px] leading-snug">We're <span className="text-orange">Serious</span> for <span className="text-orange">food</span> & <span className="text-yellow">Delivery</span></h1>
        <h3 className="text-dark text-[24px] mb-5 leading-tight mt-4">Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 20 minutes.</h3>
        <MyInput />
        <img src="/buttons.svg" alt="buttons" width={376} height={52} className="my-5"/>
        
        <img src="/slider.svg" alt="slider" width={22} height={61} className="ml-3"/>
        
    </div>
  )
}

export default LeftSection