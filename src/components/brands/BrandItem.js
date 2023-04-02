import React from 'react'
import BrandCard from '../UI/BrandCard'
import classes from "./BrandItem.module.css"


const BrandItem = (props) => {
  return (
     <BrandCard className={classes.brandItemWrap}>
       <div className={classes.logo}>
          <img src={props.logo} alt={props.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <p>{props.about}</p>
        </div>

     </BrandCard>
  )
}

export default BrandItem
