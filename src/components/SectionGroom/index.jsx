import React from 'react'

const SectionGroom = () => {
  return (
    <section id="groomBride">
      <div className="md:p-16 sm:py-8 sm:px-4 bg-swanWhite">
        <h3 className='mb-12 font-normal text-2xl text-center'>Calon Mempelai</h3>
        <p className="text-base text-center mb-8">
          Dengan memohon Rahmat dan Ridha Allah SWT.
          Kami bermaksud menyelenggarakan Akad & Resepsi Pernikahan putra putri kami
        </p>
        
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
          <div className='bg-white flex flex-col items-center pt-4 px-4 rounded-3xl'>
            <div className="relative w-60 h-60">
              <div className="absolute w-full h-full top-0 left-0 rounded-full overflow-hidden">
                <img src="/assets/images/groom.jpg" alt="gambar" className='w-full h-full object-cover' />
              </div>
            </div>
            <div className="py-4">
              <h4 className="text-4xl font-greatVibes font-bold text-center mb-4">Azzukhrufi Fadhli Zaini</h4>
              <p className='text-center text-sm font-medium text-gray-600 mb-4'>putra dari :</p>
              <p className='text-center text-sm font-semibold'>
                Bpk. Mohammad Zaini (Alm) & Ibu Azizah Herma Yuliansyah
              </p>
            </div>
          </div>

          <div className='bg-white flex flex-col items-center pt-4 px-4 rounded-3xl'>
            <div className="relative w-60 h-60">
              <div className="absolute w-full h-full top-0 left-0 rounded-full overflow-hidden">
                <img src="/assets/images/bride.jpg" alt="gambar" className='w-full h-full object-cover' />
              </div>
            </div>
            <div className="py-4">
              <h4 className="text-4xl font-greatVibes font-bold text-center mb-4">Indah Lestari</h4>
              <p className='text-center text-sm font-medium text-gray-600 mb-4'>putri dari :</p>
              <p className='text-center text-sm font-semibold'>
                Bpk. Pardi & Ibu Hartatik
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionGroom