import React from 'react'

const KirimHadiah = ({ isOpen, setIsOpen }) => {
  return (
    <div className='background-overlay fixed z-10 inset-0 overflow-hidden flex items-center justify-center py-8 px-4'>
      <div className="sm:w-full sm:h-full relative bg-white rounded-md">
        <button
          onClick={() => setIsOpen({...isOpen, hadiah : false})}
          className='absolute right-0 top-0 p-2 m-2 bg-white text-black text-lg font-bold'
        >
          X
        </button>

        <form className="flex flex-col gap-4 mb-4">
          <h4 className="text-lg font-semibold mb-4 pl-4 pt-4">Kirim Pesan</h4>

          <div className="px-4 pb-4">
            <label htmlFor="nama" className='text-base font-normal block mb-2'>Nama:</label>
            <div className="bg-white w-full h-9 overflow-hidden shadow-sm">
              <input 
                type="text" 
                id='nama'
                className='w-full h-full border-none outline-none cursor-pointer px-2'
                placeholder='e.g: Muhammad Faruq Alfatih'
              />
            </div>
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="pesan" className='text-base font-normal block mb-2'>Pesan :</label>
            <div className="bg-white w-full overflow-hidden shadow-sm">
              <textarea
                rows={8}
                type="text" 
                id='pesan'
                className='w-full h-full border-none outline-none cursor-pointer p-2 resize-none'
                placeholder='Tuliskan pesan yang ingin disampaikan disini'
              ></textarea>
            </div>
          </div>

          <div className="px-4 pb-4">
            <button className='w-full bg-swanWhite text-white px-8 py-2 rounded-full'>Kirim</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default KirimHadiah