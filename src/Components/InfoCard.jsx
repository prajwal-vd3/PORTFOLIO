import React from 'react'

const InfoCard = ({ title, text }) => {
  return (
    <div className="info-card will-change-transform  w-[85%]  bg-white/10 backdrop-blur-xl  border-white/30 rounded-3xl shadow-2xl mt-5 text-white border-2    px-[1em] py-[1em] sm:py-[2em] sm:px-[2em] tablet:gap-2 flex flex-col tablet:p-6">
        <h3 className=" text-2xl sm:text-[2em] font-semibold tablet:text-[2em]">{title}</h3>
        <p className="text-white/60 sm:text-[1.5em] text-xl pt-2 tablet:text-[1.5em] leading-normal">{ text }</p>
    </div>
  )
}

export default InfoCard