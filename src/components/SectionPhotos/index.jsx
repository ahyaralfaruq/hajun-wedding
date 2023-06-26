import React, { useEffect, useState } from 'react'
import { dbFirebase } from '../../config/firebase-config'
import {ref, listAll, getDownloadURL } from 'firebase/storage'


const SectionPhotos = () => {
  const [imageList,setImageList] = useState([])
  const imgRef = ref(dbFirebase, "images/")

  useEffect(() => {
    listAll(imgRef).then((res) => {
      res.items.forEach(item => {
        getDownloadURL(item).then(url => {
          // console.log(url)
          setImageList(prev => [...prev, url])
        })
      })
    })
  }, [])

  return (
    <section id="sectionAlbum">
      <div className="md:p-16 sm:py-8 sm:px-4">
        <h3 className='mb-12 font-normal xl:text-2xl md:text-xl sm:text-lg text-center'>Gallery</h3>

        <div className="grid xl:grid-cols-4 xl:gap-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4">
          {
            imageList.map((res, i) => (
              <div className="w-full overflow-hidden rounded-md" key={i}>
                <img src={res} alt="gambar" className='w-full object-cover' />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default SectionPhotos