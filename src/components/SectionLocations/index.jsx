import React from 'react'
import { GiDiamondRing, GiPartyPopper } from "react-icons/gi"

import "./style.css"

const SectionLocations = () => {

  return (
    <section id="location">
      <div className="myBackground2 mb:p-16 sm:py-8 sm:px-4">
        <div className='wrapping-overlay flex flex-col items-center py-4 px-4 rounded-3xl'>
          <h3 className='mb-4 font-normal xl:text-2xl md:text-xl sm:text-lg text-center'>Pelaksanaan Acara</h3>
          <p className="xl:text-lg sm:text-base text-center mb-8">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu
            kepada kedua mempelai
          </p>

          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 w-full">
            <div className="myBackground3 relative md:px-6 sm:px-2 py-16 rounded-3xl overflow-hidden">
              <div className="overlay absolute w-full h-full top-0 left-0"></div>

                <div className="relative">

                  <div className='flex justify-center mb-8'>
                    <GiDiamondRing className="text-swanWhite font-bold xl:text-8xl sm:text-6xl text-center"/>
                  </div>
                  <h4 className='text-swanWhite font-bold text-xl text-center mb-8'>Akad Nikah</h4>
                  <p className='text-center text-sm text-swanWhite mb-2'>Sabtu, 08 Juli 2023</p>
                  <p className='text-center text-sm text-swanWhite mb-12'>Pukul 09.00 - 10.00 WIB</p>

                  <p className='text-center text-sm ffont-medium text-swanWhite mb-6'>
                    Jl. Permata, Gg. Pancawarna I A, RT.005/004, Desa Curug, Kec. Gunung Sindur
                    Kab. Bogor, Jawa Barat
                  </p>

                </div>
            </div>

            <div className="myBackground4 relative md:px-6 sm:px-2 py-16 rounded-3xl overflow-hidden">
              <div className="overlay absolute w-full h-full top-0 left-0"></div>

                <div className="relative">
                  <div className='flex justify-center mb-8'>
                    <GiPartyPopper className="text-swanWhite font-bold xl:text-8xl sm:text-6xl text-center"/>
                  </div>
                  <h4 className='text-swanWhite font-bold text-xl text-center mb-8'>Resepsi</h4>
                  <p className='text-center text-sm text-swanWhite mb-2'>Sabtu, 08 Juli 2023</p>
                  <p className='text-center text-sm text-swanWhite mb-12'>Pukul 10.30 - Selesai</p>

                  <p className='text-center text-sm ffont-medium text-swanWhite mb-6'>
                    Jl. Permata, Gg. Pancawarna I A, RT.005/004, Desa Curug, Kec. Gunung Sindur
                    Kab. Bogor, Jawa Barat
                  </p>

                  {/* <button onClick={handleClickAkad} className='bg-swanWhite border-none outline-none rounded-md w-full'>
                    Lihat Lokasi
                  </button> */}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionLocations