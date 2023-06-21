import React, { useCallback } from 'react'
import { IoMdClose } from 'react-icons/io'
import { FaCopy, FaMoneyCheck } from 'react-icons/fa'

const KirimDana = ({ isOpen, setIsOpen }) => {
  const brideRek = "4730677818"

  const handleCopyRek = useCallback((norek) => {
    return navigator.clipboard.writeText(norek)
  }, [])
  
  return (
    <div className='background-overlay fixed z-10 inset-0 overflow-hidden flex items-center justify-center py-8 px-4'>
      <div className="xl:w-3/6 md:w-4/5 sm:w-full sm:h-full relative bg-white rounded-md flex justify-center items-center">
        <button
          onClick={() => setIsOpen({...isOpen, dana : false})}
          className='absolute right-0 top-0 p-2 m-2 bg-white text-black text-lg font-bold'
        >
          <IoMdClose className='xl:text-2xl md:text-xl sm:text-lg text-black' />
        </button>
        
        <div className="grid grid-cols-1 w-full">

          <div className='flex flex-col items-center'>
            <div className="rounded-full bg-gray-500 p-3 mb-4">
              <FaMoneyCheck className="text-swanWhite xl:text-6xl sm:text-4xl" />
            </div>
            <h4 className="xl:text-2xl md:text-xl sm:text-lg font-semibold mb-4">Bank BCA</h4>
            <p className='xl:text-lg sm:text-base font-medium mb-4'>{brideRek}</p>
            <p className='xl:text-lg sm:text-base font-medium mb-6'>
              Indah Lestari
            </p>
            <button
              onClick={() => handleCopyRek(brideRek)}
              className='px-8 py-2 border-none outline-none rounded-full bg-gray-500 flex items-center'
            >
              <span className='xl:text-lg sm:text-base font-medium font-normal text-white'>Copy Rekening</span>
              <FaCopy className='ml-4 text-white' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KirimDana