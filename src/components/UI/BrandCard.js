import React from 'react'
import classes from './BrandCard.module.css'


const BrandCard = (props) => {
  return (
      <div style={{ marginTop: "2rem"}} className={classes.brandCard}>{props.children}</div>
  )
}

export default BrandCard
