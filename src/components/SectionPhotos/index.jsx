import React, { memo } from 'react'
import ImagesData from "../../utils/images"
import { LazyLoadImage } from 'react-lazy-load-image-component'

import 'react-lazy-load-image-component/src/effects/blur.css';

const SectionPhotos = () => {

  return (
    <section id="sectionAlbum">
      <div className="md:p-16 sm:py-8 sm:px-4">
        <h3 className='mb-12 font-normal xl:text-2xl md:text-xl sm:text-lg text-center'>Gallery</h3>

        <div className="grid xl:grid-cols-4 xl:gap-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4">
          {
            ImagesData.map( res => (
              <LazyLoadImage src={res.src} alt="gambar" className="w-full overflow-hidden rounded-md" effect='blur' key={res.id} />
              // <div className="w-full overflow-hidden rounded-md" key={res.id}>
              //   <img src={res.src} alt="gambar" className='w-full object-cover' />
              // </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default memo(SectionPhotos)