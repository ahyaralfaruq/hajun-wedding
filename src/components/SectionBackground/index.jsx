import React from 'react'

import "./style.css"

const SectionBackground = () => {
  return (
    <section id="sectionBackground">
      <div className="myBackground md:p-16 sm:py-8">
        <div className="flex flex-col-reverse">
          <div className="flex flex-col justify-center items-center">
            <p className='text-xs font-normal text-softBlack font-semibold mb-4'>WEDDING ANNOUNCEMENT</p>
            <h1 className='text-5xl font-bold text-softBlack font-greatVibes'>Fadhli & Indah</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionBackground