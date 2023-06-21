import React, { memo, useCallback, useState } from 'react'
import { IoMdClose } from 'react-icons/io'

const KirimPesan = memo(({ isOpen, setIsOpen }) => {
  const [pesan, setPesan] = useState({
    nama: "",
    message: ""
  })

  const handleSubmit = useCallback((e) => {
    e.preventDefault()

    if(pesan.nama.trim() && pesan.message.trim()) {
      console.log(pesan.nama)
    }
  }, [pesan])


  return (
    <div className='background-overlay fixed z-10 inset-0 overflow-hidden flex items-center justify-center py-8 px-4'>
      <div className="xl:w-3/6 md:w-4/5 sm:w-full sm:h-full relative bg-white rounded-md">
        <button
          onClick={() => setIsOpen({...isOpen, pesan : false})}
          className='absolute right-0 top-0 p-2 m-2 bg-white text-black text-lg font-bold'
        >
          <IoMdClose className='xl:text-2xl md:text-xl sm:text-lg text-black' />
        </button>

        <form className="h-full" onSubmit={handleSubmit}>
          <h4 className="xl:text-2xl md:text-xl sm:text-lg font-semibold mb-16 pl-4 pt-4">Kirim Pesan</h4>

          <div className="px-4 pb-4">
            <label htmlFor="nama" className='xl:text-lg sm:text-base font-normal block mb-2'>Nama:</label>
            <div className="bg-white w-full h-9 overflow-hidden shadow-sm">
              <input 
                type="text" 
                id='nama'
                className='w-full h-full border-none outline-none cursor-pointer px-2'
                placeholder='e.g: Muhammad Faruq Alfatih'
                onChange={(e) => setPesan({...pesan, nama : e.target.value})}
                value={pesan.nama}
              />
            </div>
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="pesan" className='xl:text-lg sm:text-base font-normal block mb-2'>Pesan :</label>
            <div className="bg-white w-full overflow-hidden shadow-sm">
              <textarea
                rows={8}
                type="text" 
                id='pesan'
                className='w-full h-full border-none outline-none cursor-pointer p-2 resize-none'
                placeholder='Tuliskan pesan yang ingin disampaikan disini'
                onChange={(e) => setPesan({...pesan, message : e.target.value})}
                value={pesan.message}
              ></textarea>
            </div>
          </div>

          <div className="px-4 pb-4">
            <button className='w-full bg-gray-500 text-white px-8 py-2 rounded-full'>Kirim</button>
          </div>
        </form>
      </div>
    </div>
  )
})

export default KirimPesan