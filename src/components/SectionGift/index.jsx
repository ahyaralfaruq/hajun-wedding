import React, { useState , useEffect } from 'react'
import KirimDana from './KirimDana';
import KirimHadiah from './KirimHadiah';
import KirimPesan from './KirimPesan';

const SectionGift = () => {
  const [isOpen, setIsOpen] = useState({
    pesan: false,
    dana: false,
    hadiah: false
  })
  
  const calculateTimeLeft = () => {
    const end = "8 jul 2023 09:00:00"
    // const test = "26 jun 2023 02:56:00"
    const difference = +new Date(end) - +new Date().getTime();
  
    let timeLeft = {}
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    } 
    
    return timeLeft
  }
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000)

    return () => clearTimeout(timer);
  })

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval]) {
      return;
    }
  
    timerComponents.push(
      <div className="w-full bg-gray-500 xl:py-6 md:py-4 sm:py-2 px-2 rounded-lg" key={index}>
        <h2 className="xl:text-6xl sm:text-4xl text-center text-white">
          {timeLeft[interval]}
        </h2>
        <p className="xl:text-base sm:text-xs text-center font-bold text-white">{interval}</p>
      </div>
    );
  });


  const handlePesan = () => setIsOpen({...isOpen, pesan: true})
  const handleDana = () => setIsOpen({...isOpen, dana: true})
  const handleHadiah = () => setIsOpen({...isOpen, hadiah: true})
  

  return (
    <section id="sectionGift">
      <div className="md:p-16 sm:py-8 sm:px-4 bg-swanWhite">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 md:gap-8 sm:gap-6">
          <div className='rounded-3xl flex flex-col overflow-hidden'>
            <div className="w-full h-60">
              <img src="/assets/images/3.jpg" alt="gambar" className='w-full h-full object-cover' />
            </div>
            
            <div className="flex flex-col items-center bg-white py-4 px-3 grow">
              <h4 className="xl:text-2xl md:text-xl sm:text-lg font-karla font-semibold mb-8">Menuju Hari Bahagia</h4>
              <p className="xl:text-lg sm:text-base text-center font-karla">
                Kami begitu antusias untuk menyambut hari bahagia pernikahan.
                Ini adalah awal perjalanan kami untuk mewujudkan mimpi berdua.
              </p>

                {timerComponents.length ? (
                  <div className="grid grid-cols-4 xl:gap-4 sm:gap-2 my-auto pt-12 xl:w-4/6 sm:w-full">
                    {timerComponents}
                  </div>
                ) : (
                  <div className="text-center font-philosopher text-4xl font-bold text-red-500 p-4 m-auto w-full">
                    Time's up !
                  </div>
                )  }
            </div>
          </div>

          <div className='rounded-3xl flex flex-col overflow-hidden'>
            <div className="w-full h-60">
              <img src="/assets/images/2.jpg" alt="gambar" className='w-full h-full object-cover' />
            </div>
            
            <div className="flex flex-col items-center bg-white py-4 px-3">
              <h4 className="xl:text-2xl md:text-xl sm:text-lg font-karla font-semibold mb-8">Sampaikan Salam</h4>
              <p className="xl:text-lg sm:text-base text-center font-karla">
                Kami mengerti tidak semua keluarga dan teman berkesempatan untuk hadir di acara pernikahan kami.
                Untuk itu, bagi kerabat yang ingin mengirimkan salam atau hadiah silahkan ketuk tombol berikut:
              </p>

              <div className="flex flex-col gap-4 items-center  pt-12 xl:w-4/6 sm:w-full">
                <button
                  onClick={handlePesan}
                  className='font-karla font-semibold xl:text-lg sm:text-base w-full bg-gray-500 text-white px-4 py-2 rounded-full'
                >
                  KIRIM PESAN
                </button>
                { isOpen.pesan && <KirimPesan isOpen={isOpen} setIsOpen={setIsOpen} />}
                
                <button
                  onClick={handleDana}
                  className='font-karla font-semibold xl:text-lg sm:text-base w-full bg-gray-500 text-white px-4 py-2 rounded-full'
                >
                  KIRIM DANA
                </button>
                { isOpen.dana && <KirimDana isOpen={isOpen} setIsOpen={setIsOpen} />}

                <button
                  onClick={handleHadiah}
                  className='font-karla font-semibold xl:text-lg sm:text-base w-full bg-gray-500 text-white px-4 py-2 rounded-full'
                >
                  KIRIM HADIAH
                </button>
                { isOpen.hadiah && <KirimHadiah isOpen={isOpen} setIsOpen={setIsOpen} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionGift