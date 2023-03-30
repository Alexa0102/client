import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../UI/Card'
import classes from './CarouselItem.module.css'


const CarouselItem = (props) => {
  return (
<Link style={{textDecoration:"none"}} to={`/catalog/${props.id}`}>
    <Card >
         <div className={classes.image}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
        </div>
    </Card>
    </Link>
  )
}

export default CarouselItem
