import React from 'react'
import { BsInstagram } from "react-icons/bs"
import { LazyLoadImage } from 'react-lazy-load-image-component'

import 'react-lazy-load-image-component/src/effects/blur.css';

const SectionGroom = () => {
  return (
    <section id="groomBride">
      <div className="md:p-16 sm:py-8 sm:px-4 bg-swanWhite">
        <h3 className='mb-12 font-normal xl:text-2xl md:text-xl sm:text-lg text-center'>Calon Mempelai</h3>
        <p className="xl:text-lg sm:text-base text-center mb-8">
          Dengan memohon Rahmat dan Ridha Allah SWT.
          Kami bermaksud menyelenggarakan Akad & Resepsi Pernikahan putra putri kami
        </p>
        
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
          <div 
            className='bg-white flex flex-col items-center py-16 px-4 rounded-3xl' 
            style={{
              minHeight:"576px"
            }}
          >
            <div className="relative w-60 h-60">
              <div className="absolute w-full h-full top-0 left-0 rounded-full overflow-hidden">
                <LazyLoadImage src='/assets/images/groom.JPG' alt='gambar' className='w-full h-full object-cover' effect='blur' />
                {/* <img src="/assets/images/groom.JPG" alt="gambar" className='w-full h-full object-cover' /> */}
              </div>
            </div>
            <div className="py-6">
              <h4 className="xl:text-5xl md:text-4xl sm:text-3xl font-greatVibes font-bold text-center mb-4">Azzukhrufi Fadhli Zaini</h4>
              <p className='text-center xl:text-base sm:text-sm font-medium text-gray-600 mb-4'>putra dari :</p>
              <p className='text-center xl:text-base sm:text-sm font-semibold'>
                Bpk. Mohammad Zaini (Alm) & Ibu Azizah Herma Yuliansyah
              </p>
            </div>
            <div className="my-auto">
              <a href="http://instagram.com/fadhli.zaini" target="_blank" rel="noopener noreferrer"
                className='inline-block p-3 rounded-full cursor-pointer bg-gray-500'
              >
                <BsInstagram className='text-white text-lg' />
              </a>
            </div>
          </div>

          <div 
            className='bg-white flex flex-col items-center py-16 px-4 rounded-3xl' 
            style={{
              minHeight:"576px"
            }}
          >
            <div className="relative w-60 h-60">
              <div className="absolute w-full h-full top-0 left-0 rounded-full overflow-hidden">
              <LazyLoadImage src='/assets/images/bride.JPG' alt='gambar' className='w-full h-full object-cover' effect='blur' />
                {/* <img src="/assets/images/bride.JPG" alt="gambar" className='w-full h-full object-cover' /> */}
              </div>
            </div>
            <div className="py-6">
              <h4 className="xl:text-5xl md:text-4xl sm:text-3xl font-greatVibes font-bold text-center mb-4">Indah Lestari</h4>
              <p className='text-center xl:text-base sm:text-sm font-medium text-gray-600 mb-4'>putri dari :</p>
              <p className='text-center xl:text-base sm:text-sm font-semibold'>
                Bpk. Pardi & Ibu Hartatik
              </p>
            </div>
            <div className="my-auto">
              <a href="http://instagram.com/indah.lstr" target="_blank" rel="noopener noreferrer"
                className='inline-block p-3 rounded-full cursor-pointer bg-gray-500'
              >
                <BsInstagram className='text-white text-lg' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionGroom