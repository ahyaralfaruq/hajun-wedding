import React from 'react'

const SectionGift = () => {
  return (
    <section id="sectionGift">
      <div className="md:p-16 sm:py-8 sm:px-4 bg-swanWhite">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-8 sm:gap-6">
          <div className='rounded-3xl flex flex-col overflow-hidden'>
            <div className="w-full h-60">
              <img src="/assets/images/3.jpg" alt="gambar" className='w-full h-full object-cover' />
            </div>
            
            <div className="flex flex-col items-center bg-white py-4 px-3">
              <h4 className="text-2xl font-karla font-semibold mb-8">Menuju Hari Bahagia</h4>
              <p className="text-base text-center font-karla">
                Kami begitu antusias untuk menyambut hari bahagia pernikahan.
                Ini adalah awal perjalanan kami untuk mewujudkan mimpi berdua.
              </p>

              <div className="grid grid-cols-4 gap-2 mt-4">
                <div className="w-full bg-swanWhite p-2 rounded-sm">
                  <h2 className="text-4xl text-center text-white">00</h2>
                  <p className="text-xs text-center font-bold text-white">Days</p>
                </div>
                <div className="w-full bg-swanWhite p-2 rounded-sm">
                  <h2 className="text-4xl text-center text-white">00</h2>
                  <p className="text-xs text-center font-bold text-white">Hour</p>
                </div>
                <div className="w-full bg-swanWhite p-2 rounded-sm">
                  <h2 className="text-4xl text-center text-white">00</h2>
                  <p className="text-xs text-center font-bold text-white">Minutes</p>
                </div>
                <div className="w-full bg-swanWhite p-2 rounded-sm">
                  <h2 className="text-4xl text-center text-white">00</h2>
                  <p className="text-xs text-center font-bold text-white">Seconds</p>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-3xl flex flex-col overflow-hidden'>
            <div className="w-full h-60">
              <img src="/assets/images/2.jpg" alt="gambar" className='w-full h-full object-cover' />
            </div>
            
            <div className="flex flex-col items-center bg-white py-4 px-3">
              <h4 className="text-2xl font-karla font-semibold mb-8">Sampaikan Salam</h4>
              <p className="text-base text-center font-karla">
                Kami mengerti tidak semua keluarga dan teman berkesempatan untuk hadir di acara pernikahan kami.
                Untuk itu, bagi kerabat yang ingin mengirimkan salam atau hadiah silahkan ketuk tombol berikut:
              </p>

              <div className="flex flex-col gap-4 items-center mt-4">
                <button className='font-karla font-semibold text-sm bg-gray-500 text-white px-4 py-2 rounded-full'>
                  KIRIM PESAN
                </button>
                <button className='font-karla font-semibold text-sm bg-gray-500 text-white px-4 py-2 rounded-full'>
                  Kirim Dana
                </button>
                <button className='font-karla font-semibold text-sm bg-gray-500 text-white px-4 py-2 rounded-full'>
                  KIRIM Hadiah
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionGift