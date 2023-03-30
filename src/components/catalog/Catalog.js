import React from 'react'
import CarouselItem from '../carousel/CarouselItem'
import classes from './Catalog.module.css'
import DUMMY_DATA from '../../util/dummyData'

const Catalog = () => {
  return (
    <div className={classes.outerDiv}>
     <div className={classes.heading}>
      <h2>CATALOG</h2>
     </div> 
    <div className={classes.catalogWrapper}>
        {DUMMY_DATA.map((bag) => (
          
          <div style={{display: "flex", justifyContent: "space-between", marginBottom: "5rem"}}>
              <CarouselItem  image={bag.image} name={bag.name} id={bag.id} />
          </div>
     
  ))}

  </div>
</div>
  )
}

export default Catalog
