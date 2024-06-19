
const RightSection = () => {
  return (
    <div className="px-5">
        <div className="-mt-[180px] relative">
            <img src="/hero-image.svg" alt="" width={488} height={587} />
            <img src="/fire-emoji.svg" alt="" className="absolute top-[125px] left-[213px] z-50" width={46} height={46}/>
            <img src="/rating-card.svg" alt="" className="absolute top-[260px] -left-[80px]" />
            <img src="/happy-customer-card.png" alt="" className="absolute top-[260px] right-[20px]" />
            <img src='/dania.svg' alt='' className="absolute top-[190px] right-[100px]" />
            <img src='/menu-arrow.svg' alt='' className="absolute top-[150px] w-[90px]  right-[0px]" />

            <img src='/meal-1.svg' alt='' className="absolute top-[400px] w-[90px]  -left-[80px]" />
            <img src='/meal-2.svg' alt='' className="absolute top-[480px] w-[90px]  left-[0px]" />
            <img src='/meal-3.svg' alt='' className="absolute top-[480px] w-[90px]  right-[150px]" />
            <img src='/meal-4.svg' alt='' className="absolute top-[400px] w-[90px]  right-[0px]" />

        </div>
    </div>
  )
}

export default RightSection