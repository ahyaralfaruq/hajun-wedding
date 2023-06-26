import React, { useState, useEffect } from 'react'
import KirimPesan from '../SectionGift/KirimPesan';

const SectionCountdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [expire, setExpire] = useState("8 jul 2023 09:00:00")
  const [countdownTime, setCountdownTime]= useState({
    days: '',
    hours: '',
    minutes: '',
    seconds: ''
  })

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expire).getTime(); 
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
        setExpire(false)
      }
    }, 1000)

    return () => clearInterval(timeInterval)
  }, [countdownTime.days, countdownTime.hours, countdownTime.minutes, countdownTime.seconds, expire]);

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

              <div className="grid grid-cols-4 xl:gap-4 lg:gap-6 sm:gap-2 my-auto pt-12 xl:w-4/6 sm:w-full mb-12">
                <div className="w-full bg-gray-500 xl:py-6 md:py-4 sm:py-2 px-2 rounded-lg">
                  <h2 className="xl:text-8xl lg:text-6xl sm:text-4xl text-center text-white">
                    {countdownTime.days}
                  </h2>
                  <p className="xl:text-lg lg:text-base sm:text-xs text-center font-bold text-white">Days</p>
                </div>
                <div className="w-full bg-gray-500 xl:py-6 md:py-4 sm:py-2 px-2 rounded-lg">
                  <h2 className="xl:text-8xl lg:text-6xl sm:text-4xl text-center text-white">
                    {countdownTime.hours}
                  </h2>
                  <p className="xl:text-lg lg:text-base sm:text-xs text-center font-bold text-white">Hours</p>
                </div>
                <div className="w-full bg-gray-500 xl:py-6 md:py-4 sm:py-2 px-2 rounded-lg">
                  <h2 className="xl:text-8xl lg:text-6xl sm:text-4xl text-center text-white">
                    {countdownTime.minutes}
                  </h2>
                  <p className="xl:text-lg lg:text-base sm:text-xs text-center font-bold text-white">Minutes</p>
                </div>
                <div className="w-full bg-gray-500 xl:py-6 md:py-4 sm:py-2 px-2 rounded-lg">
                  <h2 className="xl:text-8xl lg:text-6xl sm:text-4xl text-center text-white">
                    {countdownTime.seconds}
                  </h2>
                  <p className="xl:text-lg lg:text-base sm:text-xs text-center font-bold text-white">Seconds</p>
                </div>
              </div>

              {
                (countdownTime.days || countdownTime.hours || countdownTime.minutes || countdownTime.seconds) && (
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