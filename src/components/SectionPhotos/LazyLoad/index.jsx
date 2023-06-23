import React, { memo } from 'react'
import ImagesData from "../../../utils/images"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

const index = memo(() => {
  return (
    <>
      {
        ImagesData.map( res => (
          <LazyLoadImage src={res.src} key={res.id} effect='blur' />
          // <div className="w-full overflow-hidden rounded-md" key={res.id}>
          //   <img src={res.src} alt="gambar" className='w-full object-cover' />
          // </div>
        ))
      }
    </>
  )
})

export default index