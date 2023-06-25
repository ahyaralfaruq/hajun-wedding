import React, { useState, useEffect } from 'react'
import KirimPesan from '../SectionGift/KirimPesan';

const SectionCountdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  
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
    const timer = setTimeout(() => {
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
        <h2 className="xl:text-8xl lg:text-6xl sm:text-4xl text-center text-white">
          {timeLeft[interval]}
        </h2>
        <p className="xl:text-lg lg:text-base sm:text-xs text-center font-bold text-white">{interval}</p>
      </div>
    )
  })

  return (
    <section id="sectionCoundown">
      <div className="md:p-16 sm:py-8 sm:px-4 bg-white">
        <div className="">
          <div>
            
            <div className="flex flex-col items-center bg-white py-4 px-3 grow">
              <h4 className="xl:text-2xl md:text-xl sm:text-lg font-karla font-semibold mb-8">Menuju Hari Bahagia</h4>
              <p className="xl:text-lg sm:text-base text-center font-karla mb-12">
                Kami begitu antusias untuk menyambut hari bahagia pernikahan.
                Ini adalah awal perjalanan kami untuk mewujudkan mimpi berdua.
              </p>

              {timerComponents.length ? (
                <div className="grid grid-cols-4 xl:gap-4 lg:gap-8 sm:gap-2 my-auto pt-12 xl:w-4/6 sm:w-full mb-12">
                  {timerComponents}
                </div>
              ) : (
                <div className="text-center font-philosopher text-4xl font-bold text-red-500 p-4 m-auto w-full mb-12">
                  Time's up !
                </div>
              )  }

              {
                timerComponents.length && (
                  <>
                    <button
                      onClick={() => setIsOpen(true)}
                      className='font-karla font-semibold xl:text-lg sm:text-base lg:w-2/5 md:w-4/5 sm:w-full bg-gray-500 text-white px-4 py-2 rounded-full'
                    >
                      KIRIM PESAN
                    </button>
                    { isOpen && <KirimPesan setIsOpen={setIsOpen} />}
                  </>
                )
              }
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default SectionCountdown