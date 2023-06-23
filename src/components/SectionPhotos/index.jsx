import React, { lazy, memo, Suspense } from 'react'

const GetImages = lazy(() => import('./LazyLoad'))

const SectionPhotos = () => {

  return (
    <section id="sectionAlbum">
      <div className="md:p-16 sm:py-8 sm:px-4">
        <h3 className='mb-12 font-normal xl:text-2xl md:text-xl sm:text-lg text-center'>Gallery</h3>

        <div className="grid xl:grid-cols-4 xl:gap-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4">
          <Suspense fallback={<div className='text-center'>Loading...</div>}>
            <GetImages />
          </Suspense>
        </div>
      </div>
    </section>
  )
}

export default memo(SectionPhotos)