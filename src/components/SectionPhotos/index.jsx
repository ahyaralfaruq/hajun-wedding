import React, { memo } from 'react'
// import ImagesData from "../../utils/images"

const SectionPhotos = () => {

  return (
    <section id="sectionAlbum">
      <div className="md:p-16 sm:py-8 sm:px-4">
        <h3 className='mb-12 font-normal xl:text-2xl md:text-xl sm:text-lg text-center'>Gallery</h3>

        <div className="grid xl:grid-cols-4 xl:gap-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4">
          <div className="w-full overflow-hidden rounded-md">
            <img src="assets/images/background.jpg" alt="gambar" className='w-full object-cover' />
          </div>
          <div className="w-full overflow-hidden rounded-md">
            <img src="assets/images/groom.jpg" alt="gambar" className='w-full object-cover' />
          </div>
          <div className="w-full overflow-hidden rounded-md">
            <img src="assets/images/bride.jpg" alt="gambar" className='w-full object-cover' />
          </div>
          <div className="w-full overflow-hidden rounded-md">
            <img src="assets/images/1.jpg" alt="gambar" className='w-full object-cover' />
          </div>
          <div className="w-full overflow-hidden rounded-md">
            <img src="assets/images/2.jpg" alt="gambar" className='w-full object-cover' />
          </div>
          <div className="w-full overflow-hidden rounded-md">
            <img src="assets/images/3.jpg" alt="gambar" className='w-full object-cover' />
          </div>
          <div className="w-full overflow-hidden rounded-md">
            <img src="assets/images/4.jpg" alt="gambar" className='w-full object-cover' />
          </div>
          <div className="w-full overflow-hidden rounded-md">
            <img src="assets/images/5.jpg" alt="gambar" className='w-full object-cover' />
          </div>
          <div className="w-full overflow-hidden rounded-md">
            <img src="assets/images/6.jpg" alt="gambar" className='w-full object-cover' />
          </div>
          <div className="w-full overflow-hidden rounded-md">
            <img src="assets/images/7.jpg" alt="gambar" className='w-full object-cover' />
          </div>
          <div className="w-full overflow-hidden rounded-md">
            <img src="assets/images/8.jpg" alt="gambar" className='w-full object-cover' />
          </div>
          <div className="w-full overflow-hidden rounded-md">
            <img src="assets/images/9.jpg" alt="gambar" className='w-full object-cover' />
          </div>
          <div className="w-full overflow-hidden rounded-md">
            <img src="assets/images/10.jpg" alt="gambar" className='w-full object-cover' />
          </div>
          <div className="w-full overflow-hidden rounded-md">
            <img src="assets/images/11.jpg" alt="gambar" className='w-full object-cover' />
          </div>
          <div className="w-full overflow-hidden rounded-md">
            <img src="assets/images/12.jpg" alt="gambar" className='w-full object-cover' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(SectionPhotos)