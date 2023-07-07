import React from 'react'
import classes from './CircularViewer.module.css'

const CircularViewer = () => {
  return (
    <>
      <div className={classes.gallery}>
        <img src="https://picsum.photos/id/174/400/400" alt="a_hot_air_balloon" />
        <img src="https://picsum.photos/id/188/400/400" alt="a_sky_photo_of_an_old_city" />
        <img src="https://picsum.photos/id/211/400/400" alt="a_small_boat" />
        <img src="https://picsum.photos/id/28/400/400" alt="a_forest" />
      </div>
    </>
  )
}

export default CircularViewer
