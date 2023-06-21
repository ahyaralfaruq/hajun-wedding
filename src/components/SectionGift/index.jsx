import React, { useState , useEffect, useMemo } from 'react'
import KirimDana from './KirimDana';
import KirimHadiah from './KirimHadiah';
import KirimPesan from './KirimPesan';

const SectionGift = () => {
  const [isOpen, setIsOpen] = useState({
    pesan: false,
    dana: false,
    hadiah: false
  })
  const [expiryTime, setExpiryTime] = useState("8 jul 2023 09:00:00");
  const [countdownTime, setCountdownTime]= useState({
    days: '',
    hours: '',
    minutes: '',
    seconds: ''
  })

  const memoizeData = useMemo(() => ({
    days : countdownTime.days,
    hours : countdownTime.hours,
    minutes : countdownTime.minutes,
    seconds : countdownTime.seconds
  }), [countdownTime.days,countdownTime.hours,countdownTime.minutes,countdownTime.seconds])
    
  useEffect(() => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime(); 
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);
  
      const runningCountdownTime={
          days: totalDays,
          hours: totalHours,
          minutes: totalMinutes,
          seconds: totalSeconds
      }
      
      setCountdownTime(runningCountdownTime);

      if(remainingDayTime < 0) {
        clearInterval(timeInterval);
        setCountdownTime({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00"
        });
        setExpiryTime(false);
      }

    }, 1000)

    return () => clearInterval(timeInterval)
  }, [memoizeData, expiryTime]);

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

              <div className="grid grid-cols-4 xl:gap-4 sm:gap-2 my-auto pt-12 xl:w-4/6 sm:w-full">
                <div className="w-full bg-gray-500 xl:py-6 md:py-4 sm:py-2 px-2 rounded-lg">
                  <h2 className="xl:text-6xl sm:text-4xl text-center text-white">
                    {countdownTime.days}
                  </h2>
                  <p className="xl:text-base sm:text-xs text-center font-bold text-white">Days</p>
                </div>
                <div className="w-full bg-gray-500 xl:py-6 md:py-4 sm:py-2 px-2 rounded-lg">
                  <h2 className="xl:text-6xl sm:text-4xl text-center text-white">
                    {countdownTime.hours}
                  </h2>
                  <p className="xl:text-base sm:text-xs text-center font-bold text-white">Hours</p>
                </div>
                <div className="w-full bg-gray-500 xl:py-6 md:py-4 sm:py-2 px-2 rounded-lg">
                  <h2 className="xl:text-6xl sm:text-4xl text-center text-white">
                    {countdownTime.minutes}
                  </h2>
                  <p className="xl:text-base sm:text-xs text-center font-bold text-white">Minutes</p>
                </div>
                <div className="w-full bg-gray-500 xl:py-6 md:py-4 sm:py-2 px-2 rounded-lg">
                  <h2 className="xl:text-6xl sm:text-4xl text-center text-white">
                    {countdownTime.seconds}
                  </h2>
                  <p className="xl:text-base sm:text-xs text-center font-bold text-white">Seconds</p>
                </div>
              </div>
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
                  onClick={() => setIsOpen({...isOpen, pesan: true})}
                  className='font-karla font-semibold xl:text-lg sm:text-base w-full bg-gray-500 text-white px-4 py-2 rounded-full'
                >
                  KIRIM PESAN
                </button>
                { isOpen.pesan && <KirimPesan isOpen={isOpen} setIsOpen={setIsOpen} />}
                
                <button
                  onClick={() => setIsOpen({...isOpen, dana: true})}
                  className='font-karla font-semibold xl:text-lg sm:text-base w-full bg-gray-500 text-white px-4 py-2 rounded-full'
                >
                  KIRIM DANA
                </button>
                { isOpen.dana && <KirimDana isOpen={isOpen} setIsOpen={setIsOpen} />}

                <button
                  onClick={() => setIsOpen({...isOpen, hadiah: true})}
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