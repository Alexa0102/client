import React from 'react'
import Card from '../UI/Card'
import classes from './CarouselItem.module.css'


const CarouselItem = (props) => {
  return (

    <Card>
         <div className={classes.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
        </div>
    </Card>
  )
}

export default CarouselItem
