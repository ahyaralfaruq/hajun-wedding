import React from 'react'
import ImageData from "../../utils/images"

const SectionPhotos = () => {
  return (
    <section id="sectionAlbum">
      <div className="md:p-16 sm:py-8 sm:px-4">
        <h3 className='mb-12 font-normal text-2xl text-center'>Gallery</h3>

        <div className="grid xl:grid-cols-8 xl:gap-2 md:grid-cols-4 sm:grid-cols-2 sm:gap-4">
          {
            ImageData.map(res => (
              <div className="w-full overflow-hidden rounded-md" key={res.id}>
                <img src={res.src} alt="gambar" className='w-full object-cover' />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default SectionPhotos