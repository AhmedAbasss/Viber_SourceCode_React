import React from 'react'
import classes from './Viewer.module.css'

const Images = () => {
  return (
    <>
      <div className={classes.main_container}>
        <div className={classes.item}>
          <img width="100%" height="100%" src="https://img.freepik.com/free-vector/realistic-abstract-football-background_52683-66946.jpg?w=2000&t=st=1670092631~exp=1670093231~hmac=f5c5ba363eafa014eae4f586bb796bfec5cc535fbe9e4e4b37768e19de44747a" alt="" />
        </div>
        <div className={classes.item}>
          <img width="100%" height="100%" src="https://img.freepik.com/free-vector/gradient-abstract-football-background_52683-66767.jpg?w=2000&t=st=1670092463~exp=1670093063~hmac=27002c7361714e2d085a7fba057d012111e733ca9a9b21c84c9ede9275379e1e" alt="" />
        </div>
        <div className={classes.item}>
          <img width="100%" height="100%" src="https://img.freepik.com/free-vector/realistic-abstract-football-background_23-2149017849.jpg?w=2000&t=st=1670092511~exp=1670093111~hmac=02b6a10ab1a574a23556565d8b5736c881dac5c6de79871fa50bb0f830af157e" alt="" />
        </div>
        <div className={classes.item}>
          <img width="100%" height="100%" src="https://img.freepik.com/free-vector/gradient-football-field-background_23-2149015211.jpg?w=2000&t=st=1670092543~exp=1670093143~hmac=58364d564d381615ac29eff75943b2137ead445c333993540fcdf3f71274c674" alt="" />
        </div>
      </div>
    </>
  )
}

export default Images
