import React from 'react'

import "./style.css"

const SectionLocations = () => {

  const handleClickAkad = () => {
    window.location = "https://www.google.com/maps/dir/Jl.+Pancawarna,+Curug,+Kec.+Gn.+Sindur,+Kabupaten+Bogor,+Jawa+Barat+16340//@-6.3744912,106.7094622,14z/data=!4m7!4m6!1m2!1m1!1s0x2e69e61d1cbadbad:0x468012369c455730!1m1!4e2!3e3"
  }

  return (
    <section id="location">
      <div className="myBackground2 mb:p-16 sm:py-8 sm:px-4">
        <div className='wrapping-overlay flex flex-col items-center py-4 px-4 rounded-3xl'>
          <h3 className='mb-4 font-normal text-2xl text-center'>Pelaksanaan Acara</h3>
          <p className="text-base text-center mb-8">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu
            kepada kedua mempelai
          </p>

          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 w-full">
            <div className="myBackground3 relative px-2 py-6 rounded-3xl overflow-hidden">
              <div className="overlay absolute w-full h-full top-0 left-0"></div>

                <div className="relative">
                  <h4 className='text-swanWhite font-bold text-xl text-center mb-8'>Akad Nikah</h4>
                  <p className='text-center text-sm text-swanWhite mb-2'>Sabtu, 08 Juli 2023</p>
                  <p className='text-center text-sm text-swanWhite mb-12'>Pukul 09.00 - 10.00 WIB</p>

                  <p className='text-center text-sm ffont-medium text-swanWhite mb-6'>
                    Jl. Permata, Gg. Pancawarna I A, RT.005/004, Desa Curug, Kec. Gunung Sindur
                    Kab. Bogor, Jawa Barat
                  </p>

                  {/* <button onClick={handleClickAkad} className='bg-swanWhite border-none outline-none rounded-md w-full'>
                    Lihat Lokasi
                  </button> */}
                </div>
            </div>

            <div className="myBackground4 relative px-2 py-6 rounded-3xl overflow-hidden">
              <div className="overlay absolute w-full h-full top-0 left-0"></div>

                <div className="relative">
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