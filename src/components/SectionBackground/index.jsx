import React from 'react'

import "./style.css"

const SectionBackground = () => {
  return (
    <section id="sectionBackground">
      <div className="myBackground md:p-16 sm:py-8">
        <div className="flex flex-col-reverse">
          <div className="flex flex-col justify-center items-center">
            <p className='xl:text-base md:text-sm sm:text-xs font-normal text-softBlack font-semibold mb-4'>WEDDING ANNOUNCEMENT</p>
            <h1 className='xl:text-9xl md:text-7xl sm:text-5xl font-bold text-softBlack font-greatVibes'>Fadhli & Indah</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionBackground