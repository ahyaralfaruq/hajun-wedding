import React, { memo } from 'react'
import ImagesData from "../../utils/images"

const SectionPhotos = () => {
  // const imagesData = [
  //   {
  //     id: 1,
  //     src: "assets/images/background.JPG"
  //   },
  //   {
  //     id: 2,
  //     src: "assets/images/groom.JPG"
  //   },
  //   {
  //     id: 3,
  //     src: "assets/images/bride.JPG"
  //   },
  //   {
  //     id: 4,
  //     src: "assets/images/1.JPG"
  //   },
  //   {
  //     id: 5,
  //     src: "assets/images/2.JPG"
  //   },
  //   {
  //     id: 6,
  //     src: "assets/images/3.JPG"
  //   },
  //   {
  //     id: 7,
  //     src: "assets/images/4.JPG"
  //   },
  //   {
  //     id: 8,
  //     src: "assets/images/5.JPG"
  //   },
  //   {
  //     id: 9,
  //     src: "assets/images/6.JPG"
  //   },
  //   {
  //     id: 10,
  //     src: "assets/images/7.JPG"
  //   },
  //   {
  //     id: 11,
  //     src: "assets/images/8.JPG"
  //   },
  //   {
  //     id: 12,
  //     src: "assets/images/9.JPG"
  //   },
  //   {
  //     id: 13,
  //     src: "assets/images/10.JPG"
  //   },
  //   {
  //     id: 14,
  //     src: "assets/images/11.JPG"
  //   },
  //   {
  //     id: 15,
  //     src: "assets/images/12.JPG"
  //   },
  // ]

  return (
    <section id="sectionAlbum">
      <div className="md:p-16 sm:py-8 sm:px-4">
        <h3 className='mb-12 font-normal xl:text-2xl md:text-xl sm:text-lg text-center'>Gallery</h3>

        <div className="grid xl:grid-cols-4 xl:gap-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4">
          {
            ImagesData.map( res => (
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

export default memo(SectionPhotos)